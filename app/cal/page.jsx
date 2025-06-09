"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import Calender from "../../components/Calender";

export default function Cal() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(null);
	const [step, setStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	// -1 for left, 1 for right

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Generate time slots for the selected date
	const generateTimeSlots = () => {
		const slots = [];
		for (let hour = 9; hour <= 17; hour++) {
			slots.push(`${hour}:00`);
			slots.push(`${hour}:30`);
		}
		return slots;
	};

	// Handle form submission
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setError(null);

		try {
			// Combine form data with selected date and time
			const bookingData = {
				...data,
				date: selectedDate,
				time: selectedTime,
			};

			// Send booking data to your API
			const response = await axios.post("/api/bookings", bookingData);

			setBookingConfirmed(true);
			setStep(4);
			reset(); // Reset form
		} catch (err) {
			setError(
				err.response?.data?.message ||
					"Something went wrong. Please try again.",
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
							Schedule a Meeting
						</h1>
						<p className="text-gray-600 mt-2">
							Select a date and time that works for you
						</p>
					</motion.div>

					{/* Progress Steps */}
					<div className="flex justify-center mb-8">
						{[1, 2, 3, 4].map((stepNumber) => (
							<motion.div
								key={stepNumber}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: stepNumber * 0.1 }}
								className={`flex items-center ${
									stepNumber < 4 ? "w-32" : ""
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
								{stepNumber < 4 && (
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

					{/* Calendar View */}
					{step === 1 && (
						<Calender
							setStep={(x) => {
								setStep(x);
							}}
							setSelectedDate={(x) => {
								setSelectedDate(x);
							}}
						/>
					)}

					{/* Time Slots */}
					{step === 2 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="grid grid-cols-3 gap-4"
						>
							{generateTimeSlots().map((time) => (
								<motion.button
									key={time}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										setSelectedTime(time);
										setStep(3);
									}}
									className={`p-4 rounded-lg text-center transition-colors ${
										time === selectedTime
											? "bg-blue-500 text-white"
											: "border border-gray-200 hover:bg-blue-50"
									}`}
								>
									{time}
								</motion.button>
							))}
						</motion.div>
					)}

					{/* Details Form */}
					{step === 3 && (
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
										: "Schedule Meeting"}
								</motion.button>
							</form>
						</motion.div>
					)}

					{/* Confirmation Step */}
					{step === 4 && bookingConfirmed && (
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
								Meeting Scheduled!
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-gray-600 mb-6"
							>
								Your meeting has been scheduled for{" "}
								{selectedDate.toLocaleDateString()} at{" "}
								{selectedTime}.
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
									setBookingConfirmed(false);
								}}
								className="text-blue-500 hover:text-blue-600"
							>
								Schedule Another Meeting
							</motion.button>
						</motion.div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-8">
						{step > 1 && step !== 4 && (
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
