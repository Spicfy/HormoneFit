export default function CatchUp() {
	return (
		<div className="pl-[7%] w-[80%] p-12">
			<div className="mb-12">
				<h1 className="text-5xl font-bold">
					Welcome back, <span>Nathan</span>
				</h1>
			</div>

			<div className="flex gap-8">
				{/* Check-In Section */}
				<div className="flex-1">
					<h2 className="text-3xl font-bold mb-8">Check-In</h2>

					<div className="space-y-6">
						{/* Upcoming Appointments Card */}
						<div className="transition-colors ease-in-out duration-150 shadow-md/25 hover:bg-[#FFE4E4] bg-[#FFEAEA] rounded-xl p-6 outline-1 outline-[#FFD3D3]">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 gap-x-4 rounded-2xl flex items-center justify-center">
									<img
										className="w-12 h-12"
										src="pink_icons/calender.svg"
										alt=""
									/>
								</div>
								<div>
									<h3 className="font-bold text-xl">
										Upcoming
										<br /> Appointments
									</h3>
									<p className="text-gray-700 mt-1 text-xl">
										<span className=" font-bold">3 </span>booked
									</p>
								</div>
							</div>
						</div>

						{/* Unread Messages Card */}
						<div className="transition-colors ease-in-out duration-150 shadow-md/25 hover:bg-[#FFE4E4] bg-[#FFEAEA] rounded-xl p-6 outline-1 outline-[#FFD3D3]">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 gap-x-4 rounded-2xl flex items-center justify-center">
									<div className="w-12 h-12 gap-x-4 rounded-2xl flex items-center justify-center">
										<img
											className="w-12 h-12"
											src="pink_icons/mailbox.svg"
											alt=""
										/>
									</div>
								</div>
								<div>
									<h3 className="font-bold text-xl">
										Unread
										<br /> Messages
									</h3>
									<p className="text-gray-700 mt-1 text-xl">
										<span className=" font-bold">3 </span>messages
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[1px] h-[80vh] mt-10 bg-[#F09C9C] mx-4"></div>

				{/* Quick Actions Section */}
				<div className="w-[50%] ml-6">
					<h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
					<div className="space-y-4 text-xl">
						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-9" src="pink_icons/calender.svg" alt="" />
							</div>
							<span className="font-semibold ">Book a Followup</span>
						</button>

						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-10 " src="pink_icons/question.svg" alt="" />
							</div>
							<span className="font-semibold ">Book A Short Appointment</span>
						</button>

						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-10" src="pink_icons/clipboard.svg" alt="" />
							</div>
							<span className="font-semibold ">See a Doctor Inperson</span>
						</button>

						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-8 " src="pink_icons/book.svg" alt="" />
							</div>
							<span className="font-semibold ">Learn about Menopause</span>
						</button>

						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-8 " src="pink_icons/report.svg" alt="" />
							</div>
							<span className="font-semibold ">Report a new Symptom</span>
						</button>

						<button className="shadow-md/25 w-[80%] bg-[#FFEAEA] hover:bg-[#FFE4E4] px-6 py-3 rounded-2xl flex items-center gap-4 transition-colors outline-1 outline-[#FFD3D3]">
							<div className="w-10 h-10 gap-x-4 rounded-lg flex items-center justify-center">
								<img className="h-8 " src="pink_icons/report.svg" alt="" />
							</div>
							<span className="font-semibold ">
								Set Appointment with Others
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
