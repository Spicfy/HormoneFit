"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import Calender from "../../components/Calender";

export default function Cal() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(null);
	const [selectedDoctor, setSelectedDoctor] = useState(null);
	const [selectedBookingType, setSelectedBookingType] = useState(null);
	const [selectedOperation, setSelectedOperation] = useState(null);
	const [step, setStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const [availableSlots, setAvailableSlots] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [isLoadingSlots, setIsLoadingSlots] = useState(false);
	const [filteredDoctors, setFilteredDoctors] = useState([]);
	const [existingBookings, setExistingBookings] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Fetch all doctors when component mounts
	useEffect(() => {
		const fetchDoctors = async () => {
			try {
				const response = await axios.get('http://localhost:4000/api/doctor');
				if (response.data.success) {
					setDoctors(response.data.data);
				}
			} catch (err) {
				setError("Failed to fetch doctors");
			}
		};
		fetchDoctors();
	}, []);

	// Filter doctors when booking type is selected
	useEffect(() => {
		if (selectedBookingType && doctors.length > 0) {
			const filtered = doctors.filter(doctor =>
				doctor.booking_types.some(type => type.type === selectedBookingType)
			);
			setFilteredDoctors(filtered);
		}
	}, [selectedBookingType, doctors]);

	// Fetch available slots when date or selected doctor changes
	useEffect(() => {
		const fetchAvailableSlots = async () => {
			setIsLoadingSlots(true);
			setError(null);

			try {
				if (!selectedDoctor || !selectedDate || !selectedBookingType) {
					setAvailableSlots([]);
					return;
				}

				const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
				const dateStr = selectedDate.toISOString().split('T')[0];

				// Find the doctor's schedule for this day
				const doctor = doctors.find(d => d._id === selectedDoctor);
				if (!doctor) {
					setAvailableSlots([]);
					return;
				}

				// Get the selected booking type duration
				const bookingTypeInfo = doctor.booking_types.find(type => type.type === selectedBookingType);
				if (!bookingTypeInfo) {
					setError("Selected booking type is no longer available");
					return;
				}

				// Get existing bookings for this date
				const existingBookings = doctor.bookings?.filter(booking =>
					booking.date.split('T')[0] === dateStr
				) || [];

				// Check for override schedule first
				const override = doctor.schedule_overrides?.find(
					o => o.date.split('T')[0] === dateStr
				);

				// Use override slots if they exist, otherwise use weekly schedule
				const timeSlots = override
					? override.time_slots
					: (doctor.weekly_schedule?.[dayOfWeek] || []);

				// Format the slots for display and consider appointment duration
				const formattedSlots = timeSlots.flatMap(slot => {
					const startTime = new Date(`1970-01-01T${slot.start_time}`);
					const endTime = new Date(`1970-01-01T${slot.end_time}`);
					const duration = bookingTypeInfo.duration;

					const slots = [];
					let currentTime = new Date(startTime);

					while (currentTime.getTime() + (duration * 60000) <= endTime.getTime()) {
						const slotEndTime = new Date(currentTime.getTime() + (duration * 60000));
						const slotStartStr = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
						const slotEndStr = slotEndTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

						// Check if this slot overlaps with any existing booking
						const isSlotAvailable = !existingBookings.some(booking => {
							const bookingStart = new Date(`1970-01-01T${booking.time_slots.start_time}`);
							const bookingEnd = new Date(`1970-01-01T${booking.time_slots.end_time}`);
							return (
								(currentTime >= bookingStart && currentTime < bookingEnd) ||
								(slotEndTime > bookingStart && slotEndTime <= bookingEnd) ||
								(currentTime <= bookingStart && slotEndTime >= bookingEnd)
							);
						});

						if (isSlotAvailable) {
							slots.push({
								start: slotStartStr,
								end: slotEndStr,
								displayTime: `${slotStartStr} - ${slotEndStr}`
							});
						}

						currentTime.setMinutes(currentTime.getMinutes() + duration);
					}
					return slots;
				});

				setAvailableSlots(formattedSlots);
			} catch (err) {
				setError(err.response?.data?.message || "Failed to fetch available slots");
			} finally {
				setIsLoadingSlots(false);
			}
		};

		if (step === 4 && selectedDoctor && selectedDate && selectedBookingType) {
			fetchAvailableSlots();
		}
	}, [selectedDate, selectedDoctor, step, doctors, selectedBookingType]);

	// Add function to fetch existing bookings
	const fetchExistingBookings = async (doctorId, date) => {
		try {
			const response = await axios.get(`http://localhost:4000/api/doctor/${doctorId}`);
			if (response.data.success) {
				const doctor = response.data.data;
				const dateStr = date.toISOString().split('T')[0];
				const bookingsForDate = doctor.bookings?.filter(booking =>
					new Date(booking.date).toISOString().split('T')[0] === dateStr
				) || [];
				setExistingBookings(bookingsForDate);
			}
		} catch (err) {
			console.error("Error fetching bookings:", err);
			setExistingBookings([]);
		}
	};

	// Update useEffect to fetch bookings when date or doctor changes
	useEffect(() => {
		if (selectedDoctor && selectedDate) {
			fetchExistingBookings(selectedDoctor, selectedDate);
		}
	}, [selectedDoctor, selectedDate]);

	// Handle form submission
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setError(null);

		try {
			const bookingData = { ...data, doctor_id: selectedDoctor, booking_type: selectedBookingType, booking: { date: new Date(selectedDate.toISOString()), time_slots: { start_time: selectedTime.start, end_time: selectedTime.end } } };

			const response = await axios.post("http://localhost:4000/api/appointment/book", bookingData);

			if (response.data.success) {
				setBookingConfirmed(true);
				setStep(6);
				reset();
			} else {
				setError(response.data.message || "Failed to book appointment");
			}
		} catch (err) {
			setError(
				err.response?.data?.message ||
					"Something went wrong. Please try again."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Error Alert Component
	const ErrorAlert = ({ message }) => (
		<div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<svg
						className="h-5 w-5 text-red-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="ml-3">
					<p className="text-sm text-red-700">{message}</p>
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50 py-8 text-blacktxt">
			<div className="max-w-4xl mx-auto px-4">
				<div className="bg-white rounded-lg shadow-lg p-6">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-8"
					>
						<h1 className="text-3xl font-bold text-gray-800">
							Schedule an Appointment
						</h1>
						<p className="text-gray-600 mt-2">
							Select your appointment type, doctor, date, and time
						</p>
					</motion.div>

					{/* Progress Steps */}
					<div className="flex justify-center mb-8">
						{[1, 2, 3, 4, 5, 6].map((stepNumber) => (
							<motion.div
								key={stepNumber}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: stepNumber * 0.1 }}
								className={`flex items-center ${
									stepNumber < 6 ? "w-24" : ""
								}`}
							>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										step >= stepNumber
											? "bg-blue-500 text-white"
											: "bg-gray-200"
									}`}
								>
									{stepNumber}
								</div>
								{stepNumber < 6 && (
									<div
										className={`h-1 w-full ${
											step > stepNumber
												? "bg-blue-500"
												: "bg-gray-200"
										}`}
									/>
								)}
							</motion.div>
						))}
					</div>

					{error && <ErrorAlert message={error} />}

					{/* Booking Type Selection */}
					{step === 1 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="grid grid-cols-1 gap-4 mb-8"
						>
							<h2 className="text-xl font-semibold mb-4">Select Appointment Type</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{['menopause', 'psychiatry', 'other'].map((type) => (
									<motion.button
										key={type}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() => {
											setSelectedBookingType(type);
											setStep(2);
										}}
										className={`p-6 rounded-lg text-left transition-colors border ${
											type === selectedBookingType
												? "border-blue-500 bg-blue-50"
												: "border-gray-200 hover:border-blue-300"
										}`}
									>
										<div className="font-medium capitalize">{type}</div>
										<div className="text-sm text-gray-600 mt-2">
											{type === 'menopause' && "Consultation for menopause-related concerns"}
											{type === 'psychiatry' && "Mental health consultation and treatment"}
											{type === 'other' && "Other medical consultations"}
										</div>
									</motion.button>
								))}
							</div>
						</motion.div>
					)}

					{/* Doctor Selection */}
					{step === 2 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="grid grid-cols-1 gap-4 mb-8"
						>
							<h2 className="text-xl font-semibold mb-4">Select a Doctor</h2>
							{filteredDoctors.length > 0 ? (
								filteredDoctors.map((doctor) => (
									<motion.button
										key={doctor._id}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() => {
											setSelectedDoctor(doctor._id);
											setStep(3);
										}}
										className={`p-4 rounded-lg text-left transition-colors border ${
											doctor._id === selectedDoctor
												? "border-blue-500 bg-blue-50"
												: "border-gray-200 hover:border-blue-300"
										}`}
									>
										<div className="font-medium">{`Dr. ${doctor.first_name} ${doctor.last_name}`}</div>
										<div className="text-sm text-gray-600">{doctor.specialty}</div>
										<div className="text-sm text-gray-500 mt-1">
											{doctor.booking_types.find(type => type.type === selectedBookingType)?.name} -
											{doctor.booking_types.find(type => type.type === selectedBookingType)?.duration} minutes
										</div>
									</motion.button>
								))
							) : (
								<div className="text-center py-8 text-gray-600">
									No doctors available for this appointment type.
								</div>
							)}
						</motion.div>
					)}

					{/* Operation Selection */}
					{step === 3 && selectedDoctor && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="grid grid-cols-1 gap-4 mb-8"
						>
							<h2 className="text-xl font-semibold mb-4">Select Operation Type</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{doctors.find(d => d._id === selectedDoctor)?.booking_types
									.filter(type => type.type === selectedBookingType)
									.map((operation) => (
										<motion.button
											key={operation.name}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											onClick={() => {
												setSelectedOperation(operation);
												setStep(4);
											}}
											className={`p-6 rounded-lg text-left transition-colors border ${
												selectedOperation?.name === operation.name
													? "border-blue-500 bg-blue-50"
													: "border-gray-200 hover:border-blue-300"
											}`}
										>
											<div className="font-medium">{operation.name}</div>
											<div className="text-sm text-gray-600 mt-2">
												{operation.description}
											</div>
											<div className="text-sm text-blue-600 mt-2">
												Duration: {operation.duration} minutes
											</div>
										</motion.button>
									))}
							</div>
						</motion.div>
					)}

					{/* Calendar View - Now step 4 */}
					{step === 4 && (
						<>
							<Calender
								setStep={setStep}
								setSelectedDate={setSelectedDate}
								selectedOperation={selectedOperation}
								existingBookings={existingBookings}
							/>
							{selectedDate && (
								<div className="mt-4">
									<h3 className="text-lg font-semibold mb-2">
										Available Times for {selectedDate.toLocaleDateString()}
									</h3>
									{isLoadingSlots ? (
										<div className="text-center py-8">
											<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
											<p className="mt-2 text-gray-600">Loading available slots...</p>
										</div>
									) : availableSlots.length > 0 ? (
										<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
											{availableSlots
												.filter(slot => {
													// Filter out slots that conflict with existing bookings
													return !existingBookings.some(booking => {
														const bookingStart = booking.time_slots.start_time;
														const bookingEnd = booking.time_slots.end_time;
														return (
															(slot.start <= bookingEnd && slot.end >= bookingStart) ||
															(bookingStart <= slot.end && bookingEnd >= slot.start)
														);
													});
												})
												.map((slot, index) => (
													<motion.button
														key={index}
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														onClick={() => {
															setSelectedTime(slot);
															setStep(5);
														}}
														className={`p-4 rounded-lg text-center transition-colors ${
															slot.displayTime === selectedTime?.displayTime
																? "bg-blue-500 text-white"
																: "bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-300"
														}`}
													>
														{slot.displayTime}
													</motion.button>
												))}
										</div>
									) : (
										<div className="text-center py-8 bg-gray-50 rounded-lg">
											<p className="text-gray-600">No available slots for this date. Please select a different date.</p>
										</div>
									)}
								</div>
							)}
						</>
					)}

					{/* Details Form - Now step 5 */}
					{step === 5 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="max-w-md mx-auto"
						>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 }}
								>
									<label className="block text-gray-700 mb-2">
										Name
									</label>
									<input
										{...register("name", {
											required: "Name is required",
											minLength: {
												value: 2,
												message:
													"Name must be at least 2 characters",
											},
										})}
										type="text"
										className={`w-full p-2 border rounded-lg ${
											errors.name ? "border-red-500" : ""
										}`}
										placeholder="Your name"
									/>
									{errors.name && (
										<p className="text-red-500 text-sm mt-1">
											{errors.name.message}
										</p>
									)}
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2 }}
								>
									<label className="block text-gray-700 mb-2">
										Email
									</label>
									<input
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message:
													"Invalid email address",
											},
										})}
										type="email"
										className={`w-full p-2 border rounded-lg ${
											errors.email ? "border-red-500" : ""
										}`}
										placeholder="your@email.com"
									/>
									{errors.email && (
										<p className="text-red-500 text-sm mt-1">
											{errors.email.message}
										</p>
									)}
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 }}
								>
									<label className="block text-gray-700 mb-2">
										Notes
									</label>
									<textarea
										{...register("notes")}
										className="w-full p-2 border rounded-lg"
										rows="4"
										placeholder="Add any additional notes..."
									/>
								</motion.div>
								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={
										!isSubmitting ? { scale: 1.02 } : {}
									}
									whileTap={
										!isSubmitting ? { scale: 0.98 } : {}
									}
									className={`w-full bg-blue-500 text-white py-2 rounded-lg transition-colors ${
										isSubmitting
											? "opacity-50 cursor-not-allowed"
											: "hover:bg-blue-600"
									}`}
								>
									{isSubmitting
										? "Scheduling..."
										: "Schedule Appointment"}
								</motion.button>
							</form>
						</motion.div>
					)}

					{/* Confirmation Step - Now step 6 */}
					{step === 6 && bookingConfirmed && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							className="text-center"
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
								}}
								className="mb-6"
							>
								<div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-green-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
							</motion.div>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-2xl font-bold text-gray-800 mb-4"
							>
								Appointment Scheduled!
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-gray-600 mb-6"
							>
								Your appointment for {selectedOperation?.name} has been scheduled for{" "}
								{selectedDate.toLocaleDateString()} at{" "}
								{selectedTime?.displayTime} with Dr. {doctors.find(d => d._id === selectedDoctor)?.last_name}.
								<br />A confirmation email has been sent to your
								inbox.
							</motion.p>
							<motion.button
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									setStep(1);
									setSelectedDate(new Date());
									setSelectedTime(null);
									setSelectedDoctor(null);
									setSelectedBookingType(null);
									setSelectedOperation(null);
									setBookingConfirmed(false);
								}}
								className="text-blue-500 hover:text-blue-600"
							>
								Schedule Another Appointment
							</motion.button>
						</motion.div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-8">
						{step > 1 && step !== 6 && (
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setStep(step - 1)}
								className="text-blue-500 hover:text-blue-600"
							>
								← Back
							</motion.button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
