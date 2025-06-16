"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Calender({ setStep, setSelectedDate, selectedOperation, existingBookings }) {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [slideDirection, setSlideDirection] = useState(0);
	const [fullyBookedDates, setFullyBookedDates] = useState(new Set());

	const getMaxBookingDate = () => {
		const maxDate = new Date();
		maxDate.setMonth(maxDate.getMonth() + 6);
		return maxDate;
	};

	// Check if a month is within the bookable range
	const isMonthBookable = (date) => {
		const today = new Date();
		const maxDate = getMaxBookingDate();
		return (
			date >= new Date(today.getFullYear(), today.getMonth(), 1) &&
			date <= new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
		);
	};

	// Get days in month
	const getDaysInMonth = (year, month) => {
		return new Date(year, month + 1, 0).getDate();
	};

	// Get first day of month (0 = Sunday, 1 = Monday, etc.)
	const getFirstDayOfMonth = (year, month) => {
		return new Date(year, month, 1).getDay();
	};

	// Format date for display
	const formatDate = (date) => {
		return date.toLocaleDateString("en-US", {
			month: "long",
			year: "numeric",
		});
	};

	// Navigate to previous month
	const previousMonth = () => {
		const newDate = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth() - 1,
		);
		if (isMonthBookable(newDate)) {
			setSlideDirection(-1);
			setCurrentMonth(newDate);
		}
	};

	// Navigate to next month
	const nextMonth = () => {
		const newDate = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth() + 1,
		);
		if (isMonthBookable(newDate)) {
			setSlideDirection(1);
			setCurrentMonth(newDate);
		}
	};

	// Function to check if a date is fully booked
	const isDateFullyBooked = (date) => {
		const dateStr = date.toISOString().split('T')[0];
		const bookingsForDate = existingBookings.filter(booking =>
			new Date(booking.date).toISOString().split('T')[0] === dateStr
		);

		// If there are no bookings for this date, it's not fully booked
		if (bookingsForDate.length === 0) return false;

		// Get all possible time slots for the day (assuming 9 AM to 5 PM)
		const allSlots = [];
		let currentTime = new Date(date);
		currentTime.setHours(9, 0, 0, 0); // Start at 9 AM
		const endTime = new Date(date);
		endTime.setHours(17, 0, 0, 0); // End at 5 PM

		while (currentTime < endTime) {
			const slotEnd = new Date(currentTime.getTime() + (selectedOperation?.duration || 30) * 60000);
			if (slotEnd <= endTime) {
				allSlots.push({
					start: currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
					end: slotEnd.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
				});
			}
			currentTime = slotEnd;
		}

		// Check if all slots are booked
		return allSlots.every(slot =>
			bookingsForDate.some(booking =>
				(slot.start <= booking.time_slots.end_time && slot.end >= booking.time_slots.start_time) ||
				(booking.time_slots.start_time <= slot.end && booking.time_slots.end_time >= slot.start)
			)
		);
	};

	// Update fully booked dates when existingBookings changes
	useEffect(() => {
		const bookedDates = new Set();
		const today = new Date();
		const maxDate = getMaxBookingDate();

		// Check each date in the booking range
		for (let d = new Date(today); d <= maxDate; d.setDate(d.getDate() + 1)) {
			if (isDateFullyBooked(new Date(d))) {
				bookedDates.add(d.toISOString().split('T')[0]);
			}
		}
		setFullyBookedDates(bookedDates);
	}, [existingBookings, selectedOperation]);

	// Generate calendar days for current month
	const generateCalendarDays = () => {
		const year = currentMonth.getFullYear();
		const month = currentMonth.getMonth();
		const daysInMonth = getDaysInMonth(year, month);
		const firstDayOfMonth = getFirstDayOfMonth(year, month);
		const today = new Date();
		const maxDate = getMaxBookingDate();

		const days = [];

		// Add empty cells for days before the first day of the month
		for (let i = 0; i < firstDayOfMonth; i++) {
			days.push(null);
		}

		// Add the days of the month
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day);
			const dateStr = date.toISOString().split('T')[0];

			// Check if date is selectable
			const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
			const isFuture = date > maxDate;
			const isWeekend = date.getDay() === 0 || date.getDay() === 6;
			const isFullyBooked = fullyBookedDates.has(dateStr);

			days.push({
				date,
				isSelectable: !isPast && !isFuture && !isWeekend && !isFullyBooked,
				isFullyBooked
			});
		}

		return days;
	};

	// Calendar animations
	const calendarVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	const calendarTransition = {
		x: { type: "spring", stiffness: 300, damping: 30 },
		opacity: { duration: 0.2 },
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			{/* Month Navigation */}
			<div className="flex items-center justify-between mb-4">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={previousMonth}
					className={`p-2 rounded-full ${
						!isMonthBookable(
							new Date(
								currentMonth.getFullYear(),
								currentMonth.getMonth() - 1,
							),
						)
							? "text-gray-300 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					disabled={
						!isMonthBookable(
							new Date(
								currentMonth.getFullYear(),
								currentMonth.getMonth() - 1,
							),
						)
					}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</motion.button>
				<h2 className="text-xl font-semibold">
					{formatDate(currentMonth)}
				</h2>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={nextMonth}
					className={`p-2 rounded-full ${
						!isMonthBookable(
							new Date(
								currentMonth.getFullYear(),
								currentMonth.getMonth() + 1,
							),
						)
							? "text-gray-300 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					disabled={
						!isMonthBookable(
							new Date(
								currentMonth.getFullYear(),
								currentMonth.getMonth() + 1,
							),
						)
					}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</motion.button>
			</div>

			<AnimatePresence mode="wait" custom={slideDirection}>
				<motion.div
					key={currentMonth.toISOString()}
					custom={slideDirection}
					variants={calendarVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={calendarTransition}
				>
					<div className="grid grid-cols-7 gap-2">
						{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
							(day) => (
								<div
									key={day}
									className="text-center font-semibold text-gray-600 py-2"
								>
									{day}
								</div>
							),
						)}
						{generateCalendarDays().map((dayInfo, index) => (
							<div key={index} className="aspect-square p-2">
								{dayInfo && (
									<motion.button
										whileHover={
											dayInfo.isSelectable
												? { scale: 1.1 }
												: {}
										}
										whileTap={
											dayInfo.isSelectable
												? { scale: 0.95 }
												: {}
										}
										onClick={() => {
											if (dayInfo.isSelectable) {
												setSelectedDate(dayInfo.date);
												setStep(4);
											}
										}}
										disabled={!dayInfo.isSelectable}
										className={`w-full h-full rounded-lg flex items-center justify-center transition-colors ${
											dayInfo.isFullyBooked
												? "bg-red-50 text-red-400 cursor-not-allowed"
												: dayInfo.isSelectable
												? "hover:bg-blue-50 cursor-pointer"
												: "text-gray-300 cursor-not-allowed bg-gray-50"
										}`}
									>
										{dayInfo.date.getDate()}
										{dayInfo.isFullyBooked && (
											<span className="absolute text-xs text-red-400">Booked</span>
										)}
									</motion.button>
								)}
							</div>
						))}
					</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
