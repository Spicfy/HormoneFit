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
	const [step, setStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const [availableSlots, setAvailableSlots] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [isLoadingSlots, setIsLoadingSlots] = useState(false);
	const [filteredDoctors, setFilteredDoctors] = useState([]);

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
				if (!selectedDoctor) {
					setAvailableSlots([]);
					return;
				}

				const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
				console.log(dayOfWeek);
				const dateStr = selectedDate.toISOString().split('T')[0];

				console.log("Test");
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

				// Check for override schedule first
				const override = doctor.schedule_overrides?.find(
					o => o.date.split('T')[0] === dateStr
				);
				console.log(doctor.weekly_schedule);

				// Use override slots if they exist, otherwise use weekly schedule
				const timeSlots = override
					? override.time_slots
					: (doctor.weekly_schedule?.[dayOfWeek] || []);

				// Format the slots for display and consider appointment duration
				const formattedSlots = timeSlots.map(slot => {
					const startTime = new Date(`1970-01-01T${slot.start_time}`);
					const endTime = new Date(`1970-01-01T${slot.end_time}`);
					const duration = bookingTypeInfo.duration;

					// Only create slots if there's enough time for the appointment
					const slots = [];
					while (startTime.getTime() + (duration * 60000) <= endTime.getTime()) {
						const slotEndTime = new Date(startTime.getTime() + (duration * 60000));
						slots.push({
							start: startTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
							end: slotEndTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
							displayTime: `${startTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} - ${slotEndTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}`
						});
						startTime.setMinutes(startTime.getMinutes() + duration);
					}
					return slots;
				}).flat();

				setAvailableSlots(formattedSlots);
			} catch (err) {
				setError(err.response?.data?.message || "Failed to fetch available slots");
			} finally {
				setIsLoadingSlots(false);
			}
		};

		if (step === 3 && selectedDoctor) {
			fetchAvailableSlots();
		}
	}, [selectedDate, selectedDoctor, step, doctors, selectedBookingType]);

	// Handle form submission
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setError(null);

		try {
			const bookingData = {
				...data,
				doctor_id: selectedDoctor,
				booking_type: selectedBookingType,
				date: selectedDate.toISOString(),
				time: selectedTime,
			};

			const response = await axios.post("/api/bookings", bookingData);

			if (response.data.success) {
				setBookingConfirmed(true);
				setStep(5);
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
						{[1, 2, 3, 4, 5].map((stepNumber) => (
							<motion.div
								key={stepNumber}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: stepNumber * 0.1 }}
								className={`flex items-center ${
									stepNumber < 5 ? "w-24" : ""
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
								{stepNumber < 5 && (
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

					{/* Calendar View */}
					{step === 3 && (
						<>
							<Calender
								setStep={(x) => {
									setStep(x);
								}}
								setSelectedDate={(x) => {
									setSelectedDate(x);
								}}
							/>
							{selectedDate && (
								<div className="mt-4">
									<h3 className="text-lg font-semibold mb-2">
										Available Times for {selectedDate.toLocaleDateString()}
									</h3>
									<div className="grid grid-cols-3 gap-4">
										{isLoadingSlots ? (
											<div className="col-span-3 text-center py-8">
												<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
												<p className="mt-2 text-gray-600">Loading available slots...</p>
											</div>
										) : availableSlots.length > 0 ? (
											availableSlots.map((slot, index) => (
												<motion.button
													key={index}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													onClick={() => {
														setSelectedTime(slot.displayTime);
														setStep(4);
													}}
													className={`p-4 rounded-lg text-center transition-colors ${
														slot.displayTime === selectedTime
															? "bg-blue-500 text-white"
															: "border border-gray-200 hover:bg-blue-50"
													}`}
												>
													{slot.displayTime}
												</motion.button>
											))
										) : (
											<div className="col-span-3 text-center py-8">
												<p className="text-gray-600">No available slots for this date</p>
											</div>
										)}
									</div>
								</div>
							)}
						</>
					)}

					{/* Details Form */}
					{step === 4 && (
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

					{/* Confirmation Step */}
					{step === 5 && bookingConfirmed && (
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
								Your {doctors.find(d => d._id === selectedDoctor)?.booking_types.find(t => t.type === selectedBookingType)?.name} appointment has been scheduled for{" "}
								{selectedDate.toLocaleDateString()} at{" "}
								{selectedTime} with Dr. {doctors.find(d => d._id === selectedDoctor)?.last_name}.
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
						{step > 1 && step !== 5 && (
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
