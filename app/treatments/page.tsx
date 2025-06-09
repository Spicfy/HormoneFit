"use client";

import Image from "next/image";

export default function TreatmentsPage() {
	return (
		<main className="bg-white min-h-screen font-sans">
			{/* Hero */}
			<section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 px-8 py-24 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
						Reclaim Your Health. Redefine Your Menopause.
					</h1>
					<p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
						From hot flashes to hormonal imbalances, our tailored treatments adapt to you — not the other way around.
					</p>
				</div>
			</section>
            
            

			{/* Step-by-Step Workflow (Felix-style) */}
			<section className="px-8 py-25 bg-white">
				<div className="max-w-6xl mx-auto">
                <div className="max-w-6xl mx-auto flex flex-col gap-20">
						{/* Step 1 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-65 items-center">
							<div>
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Step 1
								</span>
								<h4 className="text-4xl md:text-4xl text-blacktxt font-semibold mb-2">Take the Quiz</h4>
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
								<h4 className="text-4xl md:text-4xl text-blacktxt font-semibold mb-2">Take the Quiz</h4>
								<p className="text-gray-600">Meet with Canadian menopause specialists via secure video call to discuss your personalized care plan</p>
							</div>
						</div>
						{/* Step 3 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-65 items-center">
							<div>
								<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
									Step 3
								</span>
								<h4 className="text-4xl md:text-4xl text-blacktxt font-semibold mb-2">Take the Quiz</h4>
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
			</section>

			{/* Treatments List Section */}
			<section className="px-8 py-20 bg-gradient-to-r from-white via-pink-50 to-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
						Our Treatments
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{[
							{
								symptom: "Hot Flashes",
								icon: "/sun.svg",
								treatment: "Bioidentical hormone therapy, cooling protocols, herbal support"
							},
							{
								symptom: "Brain Fog",
								icon: "/fog.svg",
								treatment: "Cognitive support supplements, lab-based hormone balance plans"
							},
							{
								symptom: "Low Libido",
								icon: "/heart.svg",
								treatment: "Sexual wellness coaching, testosterone therapy, vaginal health care"
							},
							{
								symptom: "Anxiety & Mood",
								icon: "/sad.svg",
								treatment: "Mind-body programs, adaptogens, integrative therapy referrals"
							},
							{
								symptom: "Weight Fluctuations",
								icon: "/scale.svg",
								treatment: "Metabolic tracking, GLP-1 support, lifestyle precision coaching"
							},
							{
								symptom: "Sleep Disruption",
								icon: "/sleep.svg",
								treatment: "Melatonin regulation, cognitive behavioural sleep therapy, HRT"
							}
						].map(({ symptom, treatment, icon }, idx) => (
							<div
								key={idx}
								className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
							>
								<img src={icon} alt={symptom} className="w-12 h-12 mb-4" />
								<h3 className="text-xl font-bold text-accent1 mb-2">{symptom}</h3>
								<p className="text-sm text-gray-700">{treatment}</p>
							</div>
						))}
					</div>
				</div>
			</section>

		

			{/* Testimonials */}
			<section className="px-8 py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-6xl text-blacktxt font-bold mb-12">What Our Patients Say</h2>
					<div className="space-y-10">
						{[
							{ name: "Aisha B.", quote: "HormoneFit gave me my life back. The sleep, the focus, the calm — it's not magic, it's just the right care." },
							{ name: "Janet L.", quote: "After years of being dismissed, I finally felt seen. Their clinicians actually listen and adapt." },
							{ name: "Maya R.", quote: "I love how easy it is. Everything from lab reviews to prescription delivery just... works." }
						].map((t, i) => (
							<div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
								<p className="text-gray-800 italic mb-2">"{t.quote}"</p>
								<p className="text-sm text-pink-700 font-semibold">— {t.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="px-8 py-24 bg-gradient-to-r from-accent1 to-accent2 text-white text-center">
				<div className="max-w-3xl mx-auto space-y-6">
					<h2 className="text-4xl md:text-6xl font-bold">Ready for Personalized care?</h2>
					<p className="text-lg font-light">Your hormones deserve better. Start your journey with HormoneFit today.</p>
					<a
						href="/get-started"
						className="bg-white text-accent1 font-bold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition"
					>
						Start Free Assessment
					</a>
				</div>
			</section>
		</main>
	);
}
