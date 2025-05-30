"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<div className="font-[family-name:var(--font-geist-sans)] items-center justify-items-center min-h-screen  text-blacktxt bg-whitetxt">
			<Header />
			<main className="font-[family-name:var(--font-domine)]  text-blacktxt flex flex-col items-center">
				<div className="px-8 flex flex-row h-[calc(100vh-80px)] items-center justify-around w-full bg-primary">
					<div className="flex flex-col w-1/2 space-y-6">
						<div className="flex items-center text-accent1 text-2xl">
							★★★★★
							<p className="ml-3 text-lg text-blacktxt">
								25,000+ Reviews Reviews
							</p>
						</div>

						<h1 className="font-bold text-6xl">
							Personalized <br /> Menopause
							<br /> Care for Canadians
						</h1>
						<h2 className="font-medium text-lg text-black opacity-75">
							Personalized menopause care — without the waiting
							room
						</h2>
						<div className="text-whitetxt flex flex-row gap-4 font-[family-name:var(--font-geist-sans)]">
							<a
								href=""
								className="bg-accent1 px-6 py-4 rounded-xl font-bold"
							>
								Take the Quiz
							</a>
							<a
								href=""
								className="bg-accent1 px-6 py-4 rounded-xl font-bold"
							>
								Get Started
							</a>
						</div>
					</div>
					<div className="w-2/5 bg-ominous h-1/2"></div>
				</div>
				<div className="w-7/8 rounded-3xl outline-2 outline-[#B1A8A8] h-20 bg-white flex flex-row items-center justify-around">
					<div className="flex flex-row items-center gap-x-3">
						<img src="heart.svg" alt="" className="size-10" />
						<p>Trusted by 1,000,000 doctors</p>
					</div>
					<div className="flex flex-row items-center gap-x-3">
						<img
							src="stethoscope.svg"
							alt=""
							className="size-14 "
						/>
						<p>Licensed healthcare experts</p>
					</div>
					<div className="flex flex-row items-center gap-x-3">
						<img src="maple-leaf.svg" alt="" className="size-14" />
						<p>Canadian Owned</p>
					</div>
				</div>
				<div className="flex flex-row justify-between mt-20 w-full h-[70vh] px-8">
					<div className="w-[46vw] h-full flex flex-col justify-between">
						<div className="bg-accent1 w-full h-[35%] rounded-4xl"></div>
						<div className="bg-accent1 w-full h-[60%] rounded-4xl"></div>
					</div>
					<div className="w-[46vw] h-full flex flex-col justify-between">
						<div className="bg-accent1 w-full h-[60%] rounded-4xl"></div>
						<div className="bg-accent1 w-full h-[35%] rounded-4xl"></div>
					</div>
				</div>
				<div className="mt-20 w-[90vw] h-0.5 bg-gray-300"></div>

				<div className="w-full px-8 py-16">
					<div className="px-6 flex justify-between  mb-14">
						<div className="max-w-md">
							<p className="text-lg">
								From brain fog to sleep issues, menopause
								impacts more than people realize. The right
								support can restore balance — and put you back
								in control.
							</p>
							<button className="mt-6 bg-accent1 text-white px-6 py-3 rounded-lg">
								Get Started
							</button>
						</div>
						<h2 className="text-5xl font-bold text-right">
							Your Hormones, Your
							<br />
							Health, Your Power
						</h2>
					</div>

					<div className="grid grid-cols-4 gap-16 mb-6 px-16">
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Brain Fog
							</h3>
							<div className="text-3xl">≈</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Bladder issues
							</h3>
							<div className="text-3xl">💧</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Vaginal discomfort
							</h3>
							<div className="text-3xl">☹</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Disrupted sleep
							</h3>
							<div className="text-3xl">🌙</div>
						</div>
					</div>

					<div className="grid grid-cols-4 gap-16 px-16">
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Hot flashes
							</h3>
							<div className="text-3xl">☀</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Weight Gain
							</h3>
							<div className="text-3xl">⚖</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Joint pain
							</h3>
							<div className="text-3xl">⚡</div>
						</div>
						<div className="p-8 border border-gray-200 rounded-lg">
							<h3 className="text-xl font-medium mb-4">
								Decreased libido
							</h3>
							<div className="text-3xl">♡</div>
						</div>
					</div>
				</div>
				<div className="mt-10 w-[90vw] h-0.5 bg-gray-300"></div>

				<div className="pt-16 w-full">
					<h3 className="ml-10 mb-10 font-bold text-4xl">
						How Hormne Fit Works
					</h3>
					<div className=" flex flex-row justify-center gap-20 mb-32">
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-[#FFD6D6] flex items-center justify-center text-xl mb-8">
								1
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Take our quiz
							</h3>
							<p className="text-gray-600 max-w-xs">
								Answer a few questions about your symptoms and
								health history
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-[#FFD6D6] flex items-center justify-center text-xl mb-8">
								2
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Connect with a doctor
							</h3>
							<p className="text-gray-600 max-w-xs">
								Schedule a virtual consultation with a licensed
								healthcare provider
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-[#FFD6D6] flex items-center justify-center text-xl mb-8">
								3
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Get personalized care
							</h3>
							<p className="text-gray-600 max-w-xs">
								Receive a customized treatment plan tailored to
								your needs
							</p>
						</div>
					</div>
				</div>

				<div className="px-8">
					<h3 className="mb-10 font-bold text-4xl">
						By Canadians For Canadians
					</h3>
					<div className="flex flex-row gap-8 mb-20">
						<div className="flex flex-col gap-6 w-1/3 h-[500px]">
							<div className="bg-black text-white p-6 rounded-xl h-[60%]">
								<div className="flex text-[#FFD6D6] mb-2">
									★★★★★
								</div>
								<p className="mb-4">
									Amazing service and support throughout my
									journey. The doctors really listen and care.
								</p>
								<p className="font-semibold">- Sarah M.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[40%]">
								<div className="flex text-[#FFD6D6] mb-2">
									★★★★★
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
									★★★★★
								</div>
								<p className="mb-4">
									The virtual consultations are so convenient.
									Professional and caring team.
								</p>
								<p className="font-semibold">- Jennifer K.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[60%]">
								<div className="flex text-[#FFD6D6] mb-2">
									★★★★★
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
									★★★★★
								</div>
								<p className="mb-4">
									Life-changing results. The personalized
									approach makes all the difference.
								</p>
								<p className="font-semibold">- Rachel B.</p>
							</div>
							<div className="bg-black text-white p-6 rounded-xl h-[50%]">
								<div className="flex text-[#FFD6D6] mb-2">
									★★★★★
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
