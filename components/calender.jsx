import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Calender({ setStep, setSelectedDate }) {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [slideDirection, setSlideDirection] = useState(0);

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
			// Only allow selecting current or future dates within max booking range
			const isPast =
				date <
				new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate(),
				);
			const isFuture = date > maxDate;
			days.push({
				date,
				isSelectable: !isPast && !isFuture,
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
												? {
														scale: 1.1,
														backgroundColor:
															"#EBF5FF",
													}
												: {}
										}
										whileTap={
											dayInfo.isSelectable
												? {
														scale: 0.95,
													}
												: {}
										}
										onClick={() => {
											if (dayInfo.isSelectable) {
												setSelectedDate(dayInfo.date);
												setStep(2);
											}
										}}
										disabled={!dayInfo.isSelectable}
										className={`w-full h-full rounded-lg flex items-center justify-center transition-colors ${
											dayInfo.isSelectable
												? "hover:bg-blue-50"
												: "text-gray-300 cursor-not-allowed"
										}`}
									>
										{dayInfo.date.getDate()}
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
