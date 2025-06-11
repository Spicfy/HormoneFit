"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from 'next/link';

const reviews = [
	{
		text: "I never realized how much my hormone health was affecting my daily life until I started with HormoneFit. From the initial consultation to the personalized treatment plan, the entire process felt supportive and empowering. Within weeks, my energy levels improved, my mood stabilized, and I finally started feeling like myself again. The team is compassionate, professional, and truly committed to helping women thrive.",
		author: "Sarah M."
	},
	{
		text: "For years, I bounced between different doctors and treatments with no lasting relief. HormoneFit was a game changer. The clinicians took the time to really understand my symptoms and designed a plan tailored to my body and lifestyle. The regular check-ins made me feel seen and supported. I've never experienced such a holistic and patient-centered approach to care before — I only wish I found them sooner.",
		author: "Lisa R."
	},
	{
		text: "I was initially skeptical about trying virtual hormone care, but HormoneFit completely changed my mind. Booking appointments was easy, and every provider I spoke with was not only knowledgeable but incredibly kind. They walked me through every step, explained my lab results in plain language, and adjusted my plan as needed. It's rare to find a healthcare experience that feels this personal. I'm so grateful for the support and results I've seen.",
		author: "Jennifer K."
	},
	{
		text: "After being dismissed by so many providers in the past, HormoneFit was a breath of fresh air. They actually took my symptoms seriously and provided real solutions. I've seen improvements in my sleep, mood, and cycle regularity — and I finally feel in control of my health again.",
		author: "Maria P."
	},
	{
		text: "I was struggling with perimenopause symptoms and didn't know where to turn. HormoneFit made it easy to access expert care from the comfort of home. Their ongoing support and thoughtful treatment approach have made a huge difference in my quality of life.",
		author: "Rachel B."
	},
	{
		text: "I love how easy and accessible everything is with HormoneFit. No waiting rooms, no judgment — just real help when I needed it most. The team is incredibly knowledgeable and kind. I finally feel heard and supported on my health journey.",
		author: "Emma S."
	},
	//Add more reviews here if needed
];

export default function Home() {
	const [isYearly, setIsYearly] = useState(false);
	const [showAllReviews, setShowAllReviews] = useState(false);
	const reviewsToShow = showAllReviews ? reviews.length : 3;

	return (
		<div className="font-[family-name:var(--font-geist-sans)] items-center justify-items-center min-h-screen  text-blacktxt bg-whitetxt">
			<main className="font-sans text-blacktxt flex flex-col items-center w-full">
				{/* Modern Hero Section Start */}
				<section className="w-full bg-gradient-to-r from-accent1 to-accent2 py-30 px-8 flex flex-col md:flex-row items-center justify-between gap-12">
					
				<div className="max-w-xl space-y-10 md:ml-30 lg:ml-30">

						<div className="flex items-center text-accent1 text-2xl">
							<span className="flex flex-row gap-1">
								{Array.from({ length: 5 }).map((_, i) => (
									<img key={i} src="/star-1.svg" alt="star" style={{ width: 28, height: 28, filter: 'invert(50%) sepia(80%) saturate(400%) hue-rotate(250deg)' }} />
								))}
							</span>
							<p className="ml-3 text-lg text-whitetxt font-medium">
								25,000+ Reviews
							</p>
						</div>
						<h1 className="font-bold text-whitetxt text-5xl md:text-6xl leading-tight">
							Personalized <br /> Menopause <br /> Care for Canadians
						</h1>
						<h2 className="font-medium text-lg text-whitetxt opacity-75">
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
					<div className="backdrop-blur-md bg-whitetxt/80 border border-accent1/30 rounded-3xl shadow-xl px-12 py-3 flex flex-col md:flex-row items-center justify-around gap-6 w-11/12 md:w-4/5">
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
							<h2 className="text-4xl md:text-6xl font-bold text-center md:text-right leading-tight">
								Your Hormones, Your<br />
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Health, Your Power
								</span>
							</h2>
						</div>
						

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 mb-8">
						{[
							{ title: "Brain Fog", icon: "/fog.svg", description: "Difficulty concentrating and memory lapses" },
							{ title: "Brittle Nails", icon: "/scissors.svg", description: "Weakened, easily broken nails" },
							{ title: "Sleep Issues", icon: "/sleep.svg", description: "Difficulty falling or staying asleep" },
							{ title: "Dry Skin", icon: "/tear.svg", description: "Decreased skin elasticity and moisture" },
							{ title: "Feeling Anxious", icon: "/pulse.svg", description: "Increased anxiety and worry" },
							{ title: "Feeling Down", icon: "/sad.svg", description: "Mood changes including sadness" },
							{ title: "Fatigue", icon: "/eye.svg", description: "Persistent tiredness and low energy" },
							{ title: "Headaches", icon: "/bolt.svg", description: "New or changing headache patterns" },
							{ title: "Hot Flashes", icon: "/sun.svg", description: "Sudden feelings of intense warmth" },
							{ title: "Irritability", icon: "/caution.svg", description: "Increased sensitivity and reactivity" },
						].map((item, idx) => (
							<div
								key={idx}
								className={`rounded-2xl shadow border border-accent2/30 p-6 flex flex-col items-center justify-center min-h-[170px] ${
									idx % 2 === 0 ? "bg-primary" : "bg-accent2/10"
								}`}
							>
								<div className="mb-4">
									<img src={item.icon} alt={item.title} className="w-10 h-10" style={{ filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(230deg)' }} />
								</div>
								<h3 className="text-lg font-bold text-blacktxt mb-1">{item.title}</h3>
								<p className="text-sm text-secondarytxt text-center">{item.description}</p>
							</div>
						))}
					</div>
					<div className="flex justify-center mt-4">
						<a
							href="/symptoms"
							className="bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-lg px-8 py-3 shadow hover:scale-105 transition"
						>
							View All Symptoms
						</a>
					</div>
				</div>

				<div className="pt-5 w-full">
					
			{/* How HormoneFit Works - Purple Themed */}
			<section className="w-full py-20 px-4 bg-gradient-to-r from-accent1/5 to-accent2/10 flex flex-col items-center">
				<h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
					How HormoneFit Works
				</h2>
				<p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
					Your journey to better menopause care in three simple steps.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl mb-10">
						{/* Step 1 */}
					<div className="flex flex-col items-center text-center">
						<div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent2/20 text-accent1 font-bold text-xl mb-4">
							1
						</div>
						<h3 className="text-xl font-bold text-blacktxt mb-2">Take the Quiz</h3>
						<p className="text-gray-700">
							Complete our comprehensive assessment to help us understand your unique symptoms and health history.
						</p>
					</div>
					{/* Step 2 */}
					<div className="flex flex-col items-center text-center">
						<div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent1/20 text-accent2 font-bold text-xl mb-4">
							2
						</div>
						<h3 className="text-xl font-bold text-blacktxt mb-2">Connect with Specialists</h3>
						<p className="text-gray-700">
							Meet with Canadian menopause specialists via secure video call to discuss your personalized care plan.
						</p>
					</div>
					{/* Step 3 */}
					<div className="flex flex-col items-center text-center">
						<div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent2/20 text-accent1 font-bold text-xl mb-4">
							3
						</div>
						<h3 className="text-xl font-bold text-blacktxt mb-2">Ongoing Care</h3>
						<p className="text-gray-700">
							Receive your personalized treatment plan, with medications delivered to your door and continuous support.
						</p>
					</div>
				</div>
				<a
					href="/quiz"
					className="bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-lg px-8 py-3 shadow hover:scale-105 transition"
				>
					Start Your Journey
				</a>
			</section>
			</div>

					{/* Comprehensive Treatment Options Section */}
					<section className="w-full px-4 md:px-24 py-20">
					<div className="max-w-7xl mx-auto flex flex-col items-center">
						<span className="mb-4 inline-block px-5 py-1 rounded-full bg-accent2/20 text-accent2 font-semibold text-base">
							Our Approach
								</span>
						<h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
							Comprehensive Treatment Options
						</h2>
						<p className="text-lg text-secondarytxt text-center mb-12 max-w-2xl">
							We offer a range of evidence-based treatments tailored to your specific needs.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
							{/* Card 1 */}
							<div className="bg-whitetxt rounded-2xl border border-accent2/30 shadow p-8 flex flex-col">
								<div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent1/10 mb-4">
									<img src="/leaf.svg" alt="" className="w-7 h-7" />
								</div>
								<h3 className="text-xl font-bold text-blacktxt mb-2">Hormone Therapy</h3>
								<p className="text-secondarytxt">
									Personalized hormone replacement therapy (HRT) to balance your hormones and relieve symptoms. Available in various forms including pills, patches, and creams.
								</p>
							</div>
							{/* Card 2 */}
							<div className="bg-whitetxt rounded-2xl border border-accent2/30 shadow p-8 flex flex-col">
								<div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent2/10 mb-4">
									<img src="/pill.svg" alt="" className="w-7 h-7" />
								</div>
								<h3 className="text-xl font-bold text-blacktxt mb-2">Non-Hormonal Medications</h3>
								<p className="text-secondarytxt">
									Effective alternatives for women who cannot or prefer not to use hormone therapy, targeting specific symptoms like hot flashes and mood changes.
								</p>
							</div>
							{/* Card 3 */}
							<div className="bg-whitetxt rounded-2xl border border-accent2/30 shadow p-8 flex flex-col">
								<div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent1/10 mb-4">
									<img src="/lifestyle.svg" alt="" className="w-7 h-7" />
						</div>
								<h3 className="text-xl font-bold text-blacktxt mb-2">Lifestyle Modifications</h3>
								<p className="text-secondarytxt">
									Expert guidance on nutrition, exercise, sleep hygiene, and stress management techniques specifically designed for menopause symptom relief.
								</p>
							</div>
							{/* Card 4 */}
							<div className="bg-whitetxt rounded-2xl border border-accent2/30 shadow p-8 flex flex-col">
								<div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent2/10 mb-4">
									<img src="/supplement.svg" alt="" className="w-7 h-7" />
								</div>
								<h3 className="text-xl font-bold text-blacktxt mb-2">Supplements & Products</h3>
								<p className="text-secondarytxt">
									Carefully selected, high-quality supplements and products that have been clinically shown to help manage menopause symptoms.
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* END Comprehensive Treatment Options Section */}


				{/* Pricing Section */}
				<section className="w-full py-24 px-4 md:px-0 bg-gradient-to-b from-white via-[#f8f6fa] to-[#d3bdff]">
					<div className="max-w-5xl mx-auto flex flex-col items-center">
						<h2 className="text-3xl md:text-6xl bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent font-bold text-center mb-2 text-blacktxt">Personalized Care for Your Menopause Journey</h2>
						<p className="text-lg text-secondarytxt text-center mb-8">Choose the option that best supports your wellness needs</p>
						{/* Toggle */}
						<div className="flex items-center justify-center mb-10">
							<button
								className={`px-6 py-2 rounded-full font-semibold text-base transition-all ${
									!isYearly ? "bg-whitetxt text-accent1 shadow" : "bg-transparent text-secondarytxt"
								}`}
								onClick={() => setIsYearly(false)}
							>
								Monthly
							</button>
							<button
								className={`px-6 py-2 rounded-full font-semibold text-base transition-all ml-2 ${
									isYearly ? "bg-whitetxt text-accent1 shadow" : "bg-transparent text-secondarytxt"
								}`}
								onClick={() => setIsYearly(true)}
							>
								Annual <span className="ml-1 text-accent1 font-medium">{isYearly && "Save 15%"}</span>
							</button>
						</div>
						{/* Pricing Cards */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
							{/* Pay Per Visit */}
							<div className="bg-whitetxt rounded-2xl shadow p-8 flex flex-col items-center border border-accent2/30">
								<h3 className="text-xl font-bold text-blacktxt mb-2">HormoneFit</h3>
								<p className="text-secondarytxt mb-4">For occasional care needs</p>
								<div className="text-4xl font-bold text-blacktxt mb-1">$125 <span className="text-base font-normal text-secondarytxt">per visit</span></div>
								<ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full">
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>One-time virtual consultation</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Personalized treatment plan</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Prescription if needed</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>24-hour follow-up support</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Nutritional counselling</li>
								</ul>
								<button className="border border-accent2 text-accent1 font-semibold rounded-lg px-6 py-2 mt-auto hover:bg-accent2/10 transition">Book a Visit</button>
							</div>
							{/* Membership */}
							<div className="bg-whitetxt rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-accent2 relative scale-105 z-10">
								<span className="absolute top-4 right-4 bg-accent1 text-white text-xs font-bold px-3 py-0.9 rounded-full">★ Most Popular</span>
								<h3 className="text-xl font-bold text-blacktxt mb-2">HormoneFit+</h3>
								<p className="text-secondarytxt mb-4">Comprehensive ongoing care</p>
								<div className="text-4xl font-bold text-blacktxt mb-1">
									{isYearly ? "$499" : "$49"}
									<span className="text-base font-normal text-secondarytxt">{isYearly ? " per year" : " per month"}</span>
								</div>
								{isYearly && (
									<div className="text-xs text-accent1 font-semibold mb-2">2 months free</div>
								)}
								<ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Unlimited virtual consultations</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Ongoing treatment adjustments</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Prescription renewals</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Priority scheduling</li>
									<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>{isYearly ? "15% off all products" : "10% off all products"}</li>
									{isYearly && (
										<>
											<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Free shipping on all products</li>
											<li className="flex items-center"><span className="text-accent1 mr-2">✓</span>Annual comprehensive review</li>
										</>
									)}
								</ul>
								<button className="w-full bg-gradient-to-r from-accent1 to-accent2 text-white font-bold rounded-lg px-6 py-3 mt-auto hover:opacity-90 transition">
									{isYearly ? "Start Annual Membership" : "Start Monthly Membership"}
								</button>
							</div>
							{/* Individual Services */}
							<div className="bg-whitetxt rounded-2xl shadow p-8 flex flex-col items-center border border-accent2/30">
								<h3 className="text-xl font-bold text-blacktxt mb-2">Individual Services</h3>
								<p className="text-secondarytxt mb-4">Pay only for what you need</p>
								<ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full">
									<li className="flex justify-between"><span>Initial Consultation</span><span className="font-semibold">$149</span></li>
									<li className="flex justify-between"><span>Follow-up</span><span className="font-semibold">$89</span></li>
									<li className="flex justify-between"><span>Urgent Care</span><span className="font-semibold">$199</span></li>
									<li className="flex justify-between"><span>Prescription Renewal</span><span className="font-semibold">$49</span></li>
									<li className="flex justify-between"><span>Lab Work Review</span><span className="font-semibold">$69</span></li>
								</ul>
								<button className="border border-accent2 text-accent1 font-semibold rounded-lg px-6 py-2 mt-auto hover:bg-accent2/10 transition">Book a Service</button>
							</div>
						</div>
						{/* Footer Note */}
						<div className="mt-12 text-center text-secondarytxt text-base">
							<div className="flex flex-col md:flex-row items-center justify-center gap-4">
								<span>All plans include access to our secure patient portal and educational resources</span>
								<span className="flex items-center gap-2 text-accent1 text-sm">
									✓ No hidden fees
									<span className="text-secondarytxt/50">|</span>
									Cancel anytime
									<span className="text-secondarytxt/50">|</span>
									Insurance receipts provided
								</span>
						</div>
					</div>
				</div>
			</section>


				<div className="px-8 md:px-24 py-30 text-center mb-12">
					<h2 className="text-4xl md:text-7xl font-bold text-center md:text-center leading-tight mb-4 text-blacktxt">
						By <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">Canadians</span> For <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">Canadians</span><br/>
					</h2>
					<p className="text-lg text-secondarytxt text-center mb-10">Hear from women across Canada who have transformed their menopause experience with HormoneFit.</p>


					
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 w-full max-w-5xl mx-auto">
						{reviews.slice(0, showAllReviews ? 6 : 3).map((review, idx) => (
							<div
								key={idx}
								className="bg-whitetxt text-blacktxt p-6 rounded-xl shadow border border-accent1/20 flex flex-col justify-between min-h-[400px]"
							>
								<div className="mb-6 text-left text-base flex-grow">{review.text}</div>
								<div className="flex items-center justify-between mt-auto pt-2">
									<span className="font-semibold text-sm text-secondarytxt">{review.author}</span>
									<span className="flex flex-row gap-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<img key={i} src="/star-1.svg" alt="star" style={{ width: 20, height: 20, filter: 'invert(50%) sepia(80%) saturate(400%) hue-rotate(250deg)' }} />
										))}
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

				
				{/* CTA Section - Existing */}
				<section
					className="w-full py-24 px-4 flex flex-col items-center justify-center"
					style={{
						background: "linear-gradient(90deg, #e040fb 0%, #a259e6 100%)"
					}}
				>
					<h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
						Ready to Transform Your Menopause Experience?
					</h2>
					<p className="text-lg text-white text-center mb-8 max-w-2xl">
						Schedule a consultation with one of our menopause specialists today and take the first step
						toward comprehensive, personalized menopause care
					</p>
					<Link
						href="/consultation" // Placeholder link
						className="bg-whitetxt text-accent1 font-semibold rounded-lg px-8 py-3 shadow hover:bg-accent2 hover:text-white transition"
					>
						Book a Consultation
					</Link>
				</section>



			</main>
		</div>
	);
}

interface FAQItemProps {
	question: string;
	answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
			<button
				className="flex justify-between items-center w-full text-left font-semibold text-lg py-3 text-primary hover:text-accent1 transition-colors duration-200"
				onClick={() => setIsOpen(!isOpen)}
			>
				{question}
				<svg
					className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
					></path>
				</svg>
			</button>
			{isOpen && (
				<p className="text-secondarytxt text-base pt-2 pb-3 pr-6">
					{answer}
				</p>
			)}
		</div>
	);
};
