"use client";

import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const reviews = [
	{
		text: "I never realized how much my hormone health was affecting my daily life until I started with HormoneFit. From the initial consultation to the personalized treatment plan, the entire process felt supportive and empowering. Within weeks, my energy levels improved, my mood stabilized, and I finally started feeling like myself again. The team is compassionate, professional, and truly committed to helping women thrive.",
		author: "Sarah M.",
	},
	{
		text: "For years, I bounced between different doctors and treatments with no lasting relief. HormoneFit was a game changer. The clinicians took the time to really understand my symptoms and designed a plan tailored to my body and lifestyle. The regular check-ins made me feel seen and supported. I've never experienced such a holistic and patient-centered approach to care before — I only wish I found them sooner.",
		author: "Lisa R.",
	},
	{
		text: "I was initially skeptical about trying virtual hormone care, but HormoneFit completely changed my mind. Booking appointments was easy, and every provider I spoke with was not only knowledgeable but incredibly kind. They walked me through every step, explained my lab results in plain language, and adjusted my plan as needed. It's rare to find a healthcare experience that feels this personal. I'm so grateful for the support and results I've seen.",
		author: "Jennifer K.",
	},
	{
		text: "After being dismissed by so many providers in the past, HormoneFit was a breath of fresh air. They actually took my symptoms seriously and provided real solutions. I've seen improvements in my sleep, mood, and cycle regularity — and I finally feel in control of my health again.",
		author: "Maria P.",
	},
	{
		text: "I was struggling with perimenopause symptoms and didn't know where to turn. HormoneFit made it easy to access expert care from the comfort of home. Their ongoing support and thoughtful treatment approach have made a huge difference in my quality of life.",
		author: "Rachel B.",
	},
	{
		text: "I love how easy and accessible everything is with HormoneFit. No waiting rooms, no judgment — just real help when I needed it most. The team is incredibly knowledgeable and kind. I finally feel heard and supported on my health journey.",
		author: "Emma S.",
	},
	//Add more reviews here if needed
];

export default function Home() {
	const [isYearly, setIsYearly] = useState(false);
	const [showAllReviews, setShowAllReviews] = useState(false);
	const reviewsToShow = showAllReviews ? reviews.length : 3;

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
									<img
										key={i}
										src="/star-1.svg"
										alt="star"
										style={{ width: 28, height: 28 }}
									/>
								))}
							</span>
							<p className="ml-3 text-lg text-blacktxt font-medium">
								25,000+ Reviews
							</p>
						</div>
						<h1 className="font-bold text-5xl md:text-6xl leading-tight">
							Personalized <br /> Menopause <br /> Care for
							Canadians
						</h1>
						<h2 className="font-medium text-lg text-black opacity-75">
							Personalized menopause care — without the waiting
							room
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
							<p className="font-medium">
								Trusted by 1,000,000 patients
							</p>
						</div>
						<div className="flex flex-row items-center gap-x-3">
							<img
								src="/stethoscope.svg"
								alt=""
								className="w-10 h-10"
							/>
							<p className="font-medium">
								Licensed healthcare professionals
							</p>
						</div>
						<div className="flex flex-row items-center gap-x-3">
							<img
								src="/maple-leaf.svg"
								alt=""
								className="w-10 h-10"
							/>
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

				<div className="w-full px-10 md:px-40 py-30">
					<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-25">
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
							Your Hormones, Your
							<br />
							<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
								Health, Your Power
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
						{[
							{
								title: "Brain Fog",
								icon: "/fog.svg",
								description: "Trouble focusing or remembering",
							},
							{
								title: "Bladder Issues",
								icon: "/tear.svg",
								description: "Frequent or urgent urination",
							},
							{
								title: "Vaginal Discomfort",
								icon: "/sad.svg",
								description: "Dryness or irritation",
							},
							{
								title: "Disrupted Sleep",
								icon: "/sleep.svg",
								description: "Hard to fall or stay asleep",
							},
							{
								title: "Hot Flashes",
								icon: "/sun.svg",
								description: "Sudden heat and sweating",
							},
							{
								title: "Weight Gain",
								icon: "/scale.svg",
								description: "Increased belly fat",
							},
							{
								title: "Joint Pain",
								icon: "/bolt.svg",
								description: "Achy or stiff joints",
							},
							{
								title: "Decreased Libido",
								icon: "/heart.svg",
								description: "Lower sex drive",
							},
						].map((item, idx) => (
							<div
								key={idx}
								className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center justify-center min-h-[170px] group border border-gray-100"
							>
								<div className="mb-4 group-hover:scale-110 transition-transform">
									<Image
										src={item.icon}
										alt="icon"
										width={40}
										height={40}
										style={{
											filter: "invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.5)",
										}}
									/>
								</div>
								<h3 className="text-lg font-semibold text-center group-hover:text-accent1 transition-colors text-gray-800">
									{item.title}
								</h3>
								<p className="text-sm text-center text-gray-700 mt-2">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="pt-10 w-full">
					<h2 className="text-4xl md:text-5xl font-bold text-center md:text-center leading-tight mb-25">
						How HormoneFit
						<br />
						<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
							Works
						</span>
					</h2>

					<div className="max-w-6xl mx-auto flex flex-col gap-20">
						{/* Step 1 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-65 items-center">
							<div>
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Step 1
								</span>
								<h4 className="text-2xl font-semibold mb-2">
									Take the Quiz
								</h4>
								<p className="text-gray-600">
									Complete our comprehensive assessment to
									help us understand your unique symptoms and
									health history
								</p>
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
						<div className="grid grid-cols-1 md:grid-cols-2 gap-65 items-center">
							<div className="order-2 md:order-1 flex justify-center">
								<img
									src="/mock.png"
									alt="Step 2"
									className="rounded-xl shadow-lg w-full max-w-md object-cover"
								/>
							</div>
							<div className="order-1 md:order-2">
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Step 2
								</span>
								<h4 className="text-2xl font-semibold mb-2">
									Connect with Specialists
								</h4>
								<p className="text-gray-600">
									Meet with Canadian menopause specialists via
									secure video call to discuss your
									personalized care plan
								</p>
							</div>
						</div>
						{/* Step 3 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-65 items-center">
							<div>
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Step 3
								</span>
								<h4 className="text-2xl font-semibold mb-2">
									Ongoing Care
								</h4>
								<p className="text-gray-600">
									Receive your personalized treatment
									plan{" "}
								</p>
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

				<div className="px-8 md:px-24 py-40 text-center mb-30">
					<h2 className="text-4xl md:text-5xl font-bold text-center md:text-center leading-tight mb-30">
						By Canadians For Canadians
						<br />
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 w-full max-w-5xl mx-auto">
						{reviews
							.slice(0, showAllReviews ? 6 : 3)
							.map((review, idx) => (
								<div
									key={idx}
									className="bg-white text-black p-6 rounded-xl shadow border border-gray-200 flex flex-col justify-between min-h-[400px]"
								>
									<div className="mb-6 text-left text-base flex-grow">
										{review.text}
									</div>
									<div className="flex items-center justify-between mt-auto pt-2">
										<span className="font-semibold text-sm text-gray-700">
											{review.author}
										</span>
										<span className="flex flex-row gap-1">
											{Array.from({ length: 5 }).map(
												(_, i) => (
													<img
														key={i}
														src="/star-1.svg"
														alt="star"
														style={{
															width: 20,
															height: 20,
														}}
													/>
												),
											)}
										</span>
									</div>
								</div>
							))}
					</div>
					<div className="flex justify-center">
						<button
							className="mt-5 inline-block bg-gradient-to-r from-accent1 to-accent2 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition"
							onClick={() => setShowAllReviews((prev) => !prev)}
						>
							{showAllReviews ? "Show Less" : "Show More Reviews"}
						</button>
					</div>
				</div>

				<div className="w-full flex justify-center items-center py-30 bg-gradient-to-r from-[#ffeaea] to-[#ebc4f0]">
					<div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-2xl px-10 py-20 max-w-6xl min-h-[400px] w-full">
						{/* Doctor Avatar */}
						<div className="flex-shrink-0 flex flex-col items-center md:items-start">
							<div className="w-60 h-40 rounded-2xl border-4 border-accent1 shadow-lg overflow-hidden mb-4 bg-gradient-to-br from-accent1/30 to-accent2/30 flex items-center justify-center">
								{/* Replace with real doctor image if available */}
								<img
									src="/mock.png"
									alt="Dr. Nathan Roth"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex items-center gap-2 mt-2">
								<span className="font-bold text-lg text-accent1">
									Dr. Nathan Roth, MD LLM FRCSC
								</span>
							</div>
							<span className="text-gray-500 text-sm">
								Obstetrician, Gynecologist, Surgeon
							</span>
						</div>
						{/* Testimonial Content */}
						<div className="flex-1 flex flex-col justify-center items-start">
							<h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
								Real Experts. Real Care.
							</h3>
							<div className="mb-6">
								<p className="text-lg text-gray-700 leading-relaxed mb-10">
									Dr. Nathan Roth is a leading expert in
									women's health with over 30 years of
									experience in obstetrics, gynecology, and
									infertility. He is the current Chair of the
									American Congress of Obstetrics and
									Gynecology (ACOG) Section and Medical
									Director at Hope Fertility.
								</p>
								<p className="text-lg text-gray-700 leading-relaxed">
									Dr. Roth has served as a medical advisor,
									chaired national health committees, and held
									leadership roles at The Scarborough Hospital
									Network. He now leads cervical cancer
									screening for Cancer Care Ontario, advancing
									health equity both locally and
									internationally.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-25">
					<h3 className="mb-10 font-bold text-4xl text-center">
						Pricing
					</h3>
					<div className="flex flex-row gap-8 justify-center mb-20">
						<div className="w-[500px] border-2 border-[#E0E0E0] rounded-2xl p-8">
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
							<button className="w-full bg-gradient-to-r from-accent1 to-accent2 text-white  py-4 rounded-xl font-bold transition-all duration-200 hover:bg-opacity-90 hover:transform hover:scale-[1.02] active:scale-[0.98] active:bg-opacity-100">
								Get Started
							</button>
						</div>
					</div>
				</div>

				{/* FAQ Section - Menopause themed, styled to match */}
				<div className="w-full flex flex-col md:flex-row justify-center items-start gap-20 px-8 md:px-24 py-20">
					{/* Left: Heading/Intro */}
					<div className="md:w-1/3 w-full mb-10 md:mb-0">
						<h2 className="text-4xl md:text-6xl font-bold mb-6 text-left bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-700 mb-2 text-left">
							Everything you want to know about menopause care,
							HormoneFit, and how we support your journey.
						</p>
						<a
							href="#contact"
							className="inline-block mt-4 bg-gradient-to-r from-accent1 to-accent2 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition"
						>
							Contact Us
						</a>
					</div>
					{/* Right: Accordion */}
					<div className="md:w-2/3 w-full">
						<FAQAccordion />
					</div>
				</div>
			</main>

			<footer className="w-full flex justify-center items-center">
				<div className="w-full rounded-none bg-white px-50 py-12 flex flex-col items-center">
					<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-20 mb-10">
						{/* Logo */}
						<div className="flex-1 flex flex-col items-center md:items-start mb-20 md:mb-0">
							<div className="w-30 h-30 bg-[#F3E5F5] rounded-xl flex items-center justify-center mb-4">
								{/* Replace with your logo if available */}
							</div>
							<p className="text-sm text-gray-600 text-center md:text-left">
								Empowering women through personalized menopause
								care
							</p>
						</div>
						{/* Company */}
						<div className="flex-1">
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
						{/* Support */}
						<div className="flex-1">
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
						{/* Social */}
						<div className="flex-1">
							<h4 className="font-semibold mb-4">Social</h4>
							<div className="flex flex-row gap-4">
								<a href="#" className="text-gray-600">
									<i className="fab fa-instagram" />
								</a>
								<a href="#" className="text-gray-600">
									<i className="fab fa-facebook" />
								</a>
								<a href="#" className="text-gray-600">
									<i className="fab fa-twitter" />
								</a>
								<a href="#" className="text-gray-600">
									<i className="fab fa-linkedin" />
								</a>
							</div>
						</div>
					</div>
					<hr className="w-full border-t border-gray-100 my-3" />
					<div className="w-full text-center text-sm text-gray-500">
						© {new Date().getFullYear()} HormoneFit | All Rights
						Reserved
					</div>
				</div>
			</footer>
		</div>
	);
}

function FAQAccordion() {
	const [open, setOpen] = React.useState<number | null>(null);
	const faqs = [
		{
			q: "What symptoms can HormoneFit help with?",
			a: "HormoneFit supports a wide range of menopause symptoms, including hot flashes, sleep issues, mood changes, brain fog, weight changes, and more. Your care plan is tailored to your unique needs.",
		},
		{
			q: "Do I need a referral to join?",
			a: "No referral is needed. You can get started by taking our online quiz and booking your first consultation directly.",
		},
		{
			q: "Is HormoneFit available across Canada?",
			a: "Yes! Our virtual care platform is available to women in most provinces and territories across Canada.",
		},
		{
			q: "How are treatments personalized?",
			a: "Our clinicians review your symptoms, health history, and goals to create a plan just for you. We adjust your treatment as your needs change.",
		},
		{
			q: "Can I talk to a real doctor?",
			a: "Absolutely. All consultations are with licensed Canadian healthcare professionals who specialize in menopause care.",
		},
		{
			q: "What if my symptoms change?",
			a: "You can message your care team anytime and book follow-ups as needed. We're here to support you as your needs evolve.",
		},
	];
	return (
		<div className="flex flex-col">
			{faqs.map((item, idx) => (
				<div key={idx} className="border-b border-gray-200">
					<button
						className={`w-full text-left px-0 py-6 flex justify-between items-center focus:outline-none transition-all ease-in-out duration-300 ${open === idx ? "font-bold text-accent1 text-xl" : "font-semibold text-lg text-black"}`}
						onClick={() => setOpen(open === idx ? null : idx)}
						aria-expanded={open === idx}
					>
						<span className="text-left">{item.q}</span>
						<span
							className={`ml-4 transition-transform duration-200 text-2xl text-gray-400 ${open === idx ? "rotate-180 text-accent1" : ""}`}
						>
							⌄
						</span>
					</button>
					{open === idx && (
						<div className="pl-0 pr-8 pb-6 text-gray-700 text-base animate-fade-in">
							{item.a}
						</div>
					)}
				</div>
			))}
		</div>
	);
}