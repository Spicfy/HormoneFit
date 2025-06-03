"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<div className="font-[family-name:var(--font-geist-sans)] items-center justify-items-center min-h-screen  text-blacktxt bg-whitetxt">
			<Header />
			<main className="font-sans text-blacktxt flex flex-col items-center w-full">
				{/* Modern Hero Section Start */}
				<section className="w-full bg-gradient-to-r from-[#ffeaea] to-[#ebc4f0] py-30 px-8 flex flex-col md:flex-row items-center justify-between gap-12">
					
				<div className="max-w-xl space-y-10 md:ml-30 lg:ml-30">

						<div className="flex items-center text-accent1 text-2xl">
							<span className="flex flex-row gap-1">
								{Array.from({ length: 5 }).map((_, i) => (
									<img key={i} src="/star-1.svg" alt="star" style={{ width: 28, height: 28 }} />
								))}
							</span>
							<p className="ml-3 text-lg text-blacktxt font-medium">
								25,000+ Reviews
							</p>
						</div>
						<h1 className="font-bold text-5xl md:text-6xl leading-tight">
							Personalized <br /> Menopause <br /> Care for Canadians
						</h1>
						<h2 className="font-medium text-lg text-black opacity-75">
							Personalized menopause care — without the waiting room
						</h2>
						<div className="flex flex-row gap-4 mt-6">
							<a
								href=""
								className="bg-gradient-to-r from-accent1 to-accent2 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition"
							>
								Take the Quiz
							</a>
							<a
								href=""
								className="bg-white text-accent1 border border-accent1 px-8 py-4 rounded-xl font-bold shadow-md hover:bg-accent1 hover:text-white transition"
							>
								Get Started
							</a>
						</div>
					</div>
				</section>
				{/* Modern Hero Section End */}

				{/* Modern Info Bar Start */}
				<div className="w-full flex justify-center -mt-10">
					<div className="backdrop-blur-md bg-white/80 border border-[#E0E0E0] rounded-3xl shadow-xl px-12 py-3 flex flex-col md:flex-row items-center justify-around gap-6 w-11/12 md:w-4/5">
						<div className="flex flex-row items-center gap-x-3">
							<img src="/heart.svg" alt="" className="w-8 h-8" />
							<p className="font-medium">Trusted by 1,000,000 patients</p>
						</div>
						<div className="flex flex-row items-center gap-x-3">
							<img src="/stethoscope.svg" alt="" className="w-10 h-10" />
							<p className="font-medium">Licensed healthcare professionals</p>
						</div>
						<div className="flex flex-row items-center gap-x-3">
							<img src="/maple-leaf.svg" alt="" className="w-10 h-10" />
							<p className="font-medium">Canadian Owned</p>
						</div>
					</div>
				</div>
				{/* Modern Info Bar End */}

				{/* Boxes Section Start */}
				<div className="flex justify-center mt-32 w-full px-4">
				<div className="w-11/12 md:w-4/5 flex flex-row justify-between h-[80vh] gap-8">
					<div className="w-1/2 h-full flex flex-col justify-between gap-4">
					<div className="w-full h-[35%] rounded-4xl border border-gray-300"></div>
					<div className="w-full h-[60%] rounded-4xl border border-gray-300"></div>
					</div>
					<div className="w-1/2 h-full flex flex-col justify-between gap-4">
					<div className="w-full h-[60%] rounded-4xl border border-gray-300"></div>
					<div className="w-full h-[35%] rounded-4xl border border-gray-300"></div>
					</div>
				</div>
				</div>
				{/* Boxes Section End */}

					<div className="w-full px-10 md:px-40 py-20">
						<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-14">
							<div className="max-w-md text-center md:text-left">
							<p className="text-lg">
								From brain fog to sleep issues, menopause
								impacts more than people realize. The right
								support can restore balance — and put you back
								in control.
							</p>
							<a
								href=""
								className="mt-5 inline-block bg-gradient-to-r from-accent1 to-accent2 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition"
								>
								Get Started
							</a>
							</div>
							<h2 className="text-4xl md:text-5xl font-bold text-center md:text-right leading-tight">
								Your Hormones, Your<br />
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Health, Your Power
								</span>
							</h2>
						</div>
						

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
						{[
							{ title: "Brain Fog", icon: "/fog.svg", description: "Trouble focusing or remembering" },
							{ title: "Bladder Issues", icon: "/tear.svg", description: "Frequent or urgent urination" },
							{ title: "Vaginal Discomfort", icon: "/sad.svg", description: "Dryness or irritation" },
							{ title: "Disrupted Sleep", icon: "/sleep.svg", description: "Hard to fall or stay asleep" },
							{ title: "Hot Flashes", icon: "/sun.svg", description: "Sudden heat and sweating" },
							{ title: "Weight Gain", icon: "/scale.svg", description: "Increased belly fat" },
							{ title: "Joint Pain", icon: "/bolt.svg", description: "Achy or stiff joints" },
							{ title: "Decreased Libido", icon: "/heart.svg", description: "Lower sex drive" },
						].map((item, idx) => (
							<div
								key={idx}
								className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center justify-center min-h-[170px] group border border-gray-100"
							>
								<div className="mb-4 group-hover:scale-110 transition-transform">
									<Image src={item.icon} alt="icon" width={40} height={40} style={{ filter: 'invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.5)' }} />
								</div>
								<h3 className="text-lg font-semibold text-center group-hover:text-accent1 transition-colors text-gray-800">{item.title}</h3>
								<p className="text-sm text-center text-gray-700 mt-2">{item.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="pt-16 w-full">
					<h3 className="ml-40 mb-16 font-bold text-4xl">How Hormone Fit Works</h3>
					<div className="max-w-6xl mx-auto flex flex-col gap-20">
						{/* Step 1 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div>
								<p className="text-gray-500 mb-2">Step 1</p>
								<h4 className="text-2xl font-semibold mb-2">Take the Quiz</h4>
								<p className="text-gray-600">Complete our comprehensive assessment to help us understand your unique symptoms and health history</p>
							</div>
							<div className="flex justify-center">
								<img
									src="/mock.png"
									alt="Step 1"
									className="rounded-xl shadow-lg w-full max-w-md object-cover"
								/>
							</div>
						</div>
						{/* Step 2 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div className="order-2 md:order-1 flex justify-center">
								<img
									src="/mock.png"
									alt="Step 2"
									className="rounded-xl shadow-lg w-full max-w-md object-cover"
								/>
							</div>
							<div className="order-1 md:order-2">
								<p className="text-gray-500 mb-2">Step 2</p>
								<h4 className="text-2xl font-semibold mb-2">Connect with Specialists</h4>
								<p className="text-gray-600">Meet with Canadian menopause specialists via secure video call to discuss your personalized care plan</p>
							</div>
						</div>
						{/* Step 3 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div>
								<p className="text-gray-500 mb-2">Step 3</p>
								<h4 className="text-2xl font-semibold mb-2">Ongoing Care</h4>
								<p className="text-gray-600">Receive your personalized treatment plan </p>
							</div>
							<div className="flex justify-center">
								<img
									src="/mock.png"
									alt="Step 3"
									className="rounded-xl shadow-lg w-full max-w-md object-cover"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="px-10">
					<h3 className="mb-10 font-bold text-4xl">
						By Canadians For Canadians
					</h3>
					<div className="flex flex-row gap-8 mb-20">
						<div className="flex flex-col gap-6 w-1/3 h-[500px]">
							<div className="bg-black text-white p-6 rounded-xl h-[60%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									Amazing service and support throughout my
									journey. The doctors really listen and care.
								</p>
								<p className="font-semibold">- Sarah M.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[40%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									Finally found relief from my symptoms. Thank
									you HormoneFit!
								</p>
								<p className="font-semibold">- Lisa R.</p>
							</div>
						</div>
						<div className="flex flex-col gap-6 w-1/3 h-[500px]">
							<div className="bg-black text-white p-6 rounded-xl h-[40%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									The virtual consultations are so convenient.
									Professional and caring team.
								</p>
								<p className="font-semibold">- Jennifer K.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[60%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									Comprehensive care that actually addresses
									root causes. Highly recommend!
								</p>
								<p className="font-semibold">- Maria P.</p>
							</div>
						</div>
						<div className="flex flex-col gap-6 w-1/3 h-[500px]">
							<div className="bg-black text-white p-6 rounded-xl h-[50%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									Life-changing results. The personalized
									approach makes all the difference.
								</p>
								<p className="font-semibold">- Rachel B.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[50%]">
								<div className="flex text-[#FFD6D6] mb-2">
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 22, height: 22 }} />
										))}
									</span>
								</div>
								<p className="mb-4">
									Expert guidance and support every step of
									the way.
								</p>
								<p className="font-semibold">- Emma S.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-16 px-8 bg-primary">
					<div className="flex flex-row gap-8 mb-20">
						<div className="w-1/2">
							<div className=" rounded-2xl p-8 h-full">
								<h3 className="mb-10 font-bold text-4xl">
									Real Experts. Real Care.
								</h3>
								<p className="text-gray-700 mb-6">
									"Lorem ipsum dolor sit amet consectetur
									adipiscing elit. Consectetur adipiscing
									elit, cursus nec lectus ex enim vitae. Ex
									sapien vitae pellentesque sem placerat in
									id. Placerat in id cursus mi pretium tellus
									duis. Pretium tellus duis convallis tempus
									leo eu aenean."
								</p>
								<p className="font-semibold">
									Dr. Nathan Roth, MD LLM FRCSC
								</p>
								<p className="text-gray-600">
									Obstetrician, Gynecologist, Surgeon
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<div className="bg-ominous rounded-2xl p-8 h-full">
								{/* Image placeholder */}
							</div>
						</div>
					</div>
				</div>

				<div className="pt-16">
					<h3 className="mb-10 font-bold text-4xl text-center">
						Pricing
					</h3>
					<div className="flex flex-row gap-8 justify-center mb-20">
						<div className="w-[500px] border-2 border-[#FFD6D6] rounded-2xl p-8">
							<div className="text-center mb-6">
								<h4 className="text-2xl font-semibold mb-2">
									Complete Care
								</h4>
								<p className="text-gray-600 mb-4">
									Comprehensive menopause management
								</p>
								<div className="text-4xl font-bold">
									${isYearly ? "39" : "49"}
									<span className="text-lg font-normal">
										/month
									</span>
								</div>
								{isYearly && (
									<div className="text-sm text-accent1 mt-1">
										Save $120/year
									</div>
								)}
								<div className="text-sm text-gray-600 mt-1">
									{isYearly ? "Billed $468 annually" : ""} +
									$99 program fee
								</div>
							</div>

							<div className="flex items-center justify-center gap-3 mb-8">
								<span
									className={`text-sm ${!isYearly ? "text-black" : "text-gray-500"}`}
								>
									Monthly
								</span>
								<div
									className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer relative"
									onClick={() => setIsYearly(!isYearly)}
								>
									<div
										className={`w-4 h-4 bg-accent1 rounded-full transition-transform duration-200 ${
											isYearly ? "translate-x-6" : ""
										}`}
									></div>
								</div>
								<span
									className={`text-sm ${isYearly ? "text-black" : "text-gray-500"}`}
								>
									Yearly
								</span>
							</div>

							<div className="mb-8">
								<h5 className="text-xl font-medium mb-4">
									What's Included
								</h5>
								<ul className="space-y-4">
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										Unlimited virtual consultations
									</li>
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										Ongoing treatment adjustments
									</li>
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										Prescription renewals
									</li>
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										Priority scheduling
									</li>
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										10% off all products
									</li>
									<li className="flex items-center">
										<span className="mr-3">✓</span>
										24/7 messaging support
									</li>
								</ul>
							</div>

							<button className="w-full bg-accent1 text-white py-4 rounded-xl font-bold transition-all duration-200 hover:bg-opacity-90 hover:transform hover:scale-[1.02] active:scale-[0.98] active:bg-opacity-100">
								Get Started
							</button>
						</div>
					</div>
				</div>

				<div className="flex justify-center mb-20">
					<div className="bg-[#F3E5F5] p-8 rounded-2xl w-[500px] text-center">
						<h3 className="text-2xl font-semibold mb-6">
							Ready to take control of your health?
						</h3>
						<ul className="text-left mb-6 space-y-2">
							<li className="flex items-center">
								<span className="mr-2">✓</span>
								Free online consultation
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span>Personalized
								treatment plans
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span>
								Ongoing support and monitoring
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span>
								Expert medical team
							</li>
						</ul>
						<button className="bg-accent1 text-white px-8 py-3 rounded-lg font-semibold">
							Get Started
						</button>
					</div>
				</div>

				<div className="w-full px-16 py-20 bg-[#FFD6D6] mb-20">
					<h3 className="text-4xl font-bold mb-12 text-center">
						The Impact of Menopause
					</h3>
					<div className="grid grid-cols-4 gap-12">
						<div className="text-center">
							<div className="text-5xl font-bold mb-4">75%</div>
							<p className="text-lg">
								of women experience hot flashes during menopause
							</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-4">10M+</div>
							<p className="text-lg">
								Canadian women are in menopause or perimenopause
							</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-4">60%</div>
							<p className="text-lg">
								report sleep disturbances affecting daily life
							</p>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-4">80%</div>
							<p className="text-lg">
								don't receive the care they need for symptoms
							</p>
						</div>
					</div>
				</div>
			</main>
			<footer className="bg-[#FFE8E8] py-12 w-full ">
				<div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
					<div className="col-span-1">
						<div className="w-32 h-32 bg-[#F3E5F5] rounded-xl mb-4"></div>
						<p className="text-sm text-gray-600">
							Empowering women through personalized menopause care
						</p>
					</div>
					<div className="col-span-1">
						<h4 className="font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-600">
									Our Doctors
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600">
									Reviews
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-1">
						<h4 className="font-semibold mb-4">Support</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-600">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-1">
						<h4 className="font-semibold mb-4">Social</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-600">
									Instagram
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600">
									Facebook
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600">
									Twitter
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600">
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
