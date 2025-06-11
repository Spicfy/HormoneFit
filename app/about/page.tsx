// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react"; // Ensure React is imported if needed for useState, etc.

export default function AboutPage() {
	return (
		<main className="bg-whitetxt min-h-screen font-sans text-blacktxt">
			{/* About HormoneFit Section - Main Heading & Mission */}
			<section className="bg-gradient-to-r from-accent1 to-accent2 px-8 py-25 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold text-whitetxt leading-tight">
						About HormoneFit
					</h1>
					
				</div>
			</section>

			<section className="px-8 py-20 bg-whitetxt">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12 text-center">
						Our Mission
						</h2>
						<p className="text-lg text-black text-center font-normal mb-4 max-w-3xl mx-auto">
							At HormoneFit, our mission is to transform the menopause experience through personalized, evidence-based
							care that addresses the whole woman—not just her symptoms.
						</p>
						<p className="text-lg text-black text-center font-normal max-w-3xl mx-auto">
							We believe that menopause is not just a medical event but a significant life transition that deserves specialized care,
							compassion, and a comprehensive approach. Our goal is to empower women with the knowledge, support, and treatment
							options they need to thrive during this phase of life.
						</p>
				</div>
			</section> 

			{/* Our Approach Section */}
			<section className="px-8 py-10 bg-whitetxt">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12 text-center">
						Our Approach
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Personalized Care */}
						<div className="bg-accent1/10 rounded-lg p-8 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Personalized Care</h3>
							<p className="text-secondarytxt">
								We recognize that every woman's menopause experience is unique. Our approach begins with
								comprehensive assessment and continues with individualized treatment plans tailored to your
								specific symptoms, preferences, and health goals.
							</p>
						</div>
						{/* Evidence-Based Medicine */}
						<div className="bg-accent2/10 rounded-lg p-8 shadow-sm border border-accent2/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent2 mb-2">Evidence-Based Medicine</h3>
							<p className="text-secondarytxt">
								Our recommendations are grounded in the latest research and clinical guidelines. We stay current with
								emerging treatments and approaches to ensure you receive the most effective care available.
							</p>
						</div>
						{/* Holistic Perspective */}
						<div className="bg-accent2/10 rounded-lg p-8 shadow-sm border border-accent2/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent2 mb-2">Holistic Perspective</h3>
							<p className="text-secondarytxt">
								We address not just the physical symptoms of menopause but also its impact on your emotional
								wellbeing, relationships, work life, and overall quality of life. Our treatment plans often combine medical
								interventions with lifestyle approaches.
							</p>
						</div>
						{/* Ongoing Support */}
						<div className="bg-accent1/10 rounded-lg p-8 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Ongoing Support</h3>
							<p className="text-secondarytxt">
								Menopause is a journey, not a single event. We provide continuous support, regular check-ins, and
								adjustments to your care plan as your needs evolve over time.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Doctors Section */}
			<section className="px-8 py-20 bg-accent1/5">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12 text-center">
						Our Doctors
					</h2>
					<div className="bg-whitetxt rounded-lg p-8 shadow-md border border-accent1/20 flex flex-col md:flex-row items-center md:items-start gap-8">
						<div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-primary flex-shrink-0 flex items-center justify-center overflow-hidden">
							{/* Placeholder for Doctor Image */}
							<Image src="/doctor-placeholder.png" alt="Dr. Nathan Roth" width={240} height={240} className="object-cover" />
						</div>
						<div>
							<h3 className="text-2xl font-bold text-blacktxt mb-1">Dr. Nathan Roth, MD, NCMP</h3>
							<p className="text-accent1 font-semibold text-lg mb-4">Founder & Medical Director</p>
							<p className="text-secondarytxt mb-4">
								Dr. Johnson is a board-certified OB/GYN and North American Menopause Society (NAMS) Certified Menopause Practitioner with over 15 years of experience specializing in midlife women's health. After witnessing countless women struggling to find adequate care for their menopause symptoms, she founded HormoneFit to provide the specialized, comprehensive care that women deserve.
							</p>
							<p className="text-secondarytxt mb-4">
								Dr. Johnson completed her medical training at Harvard Medical School and her residency at Massachusetts General Hospital. She has published numerous research papers on hormone therapy and menopause management and is a frequent speaker at medical conferences.
							</p>
							<p className="text-secondarytxt italic">
								"My goal is to transform how we approach menopause care—moving from a fragmented, symptom-by-symptom approach to a comprehensive model that addresses the whole woman and empowers her to thrive during this transition."
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose HormoneFit Section */}
			<section className="px-8 py-20 bg-whitetxt">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12 text-center">
						Why Choose HormoneFit
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Specialized Expertise */}
						<div className="bg-accent1/10 rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-3xl md:text-4xl font-bold text-accent1 mb-2">Specialized Expertise</h3>
							<p className="text-secondarytxt text-lg">
								Our doctors are specifically trained in menopause management and stay current with the latest
								research and treatment options. This specialized focus means you receive care from practitioners who
								truly understand the complexities of menopause.
							</p>
						</div>
						{/* Comprehensive Care */}
						<div className="bg-accent2/10 rounded-lg p-6 shadow-sm border border-accent2/20">
							<h3 className="text-3xl md:text-4xl font-bold text-accent2 mb-2">Comprehensive Care</h3>
							<p className="text-secondarytxt text-lg">
								We address all aspects of menopause—from hot flashes and sleep disturbances to mood changes,
								sexual health, and long-term health considerations like bone and heart health. Our treatment plans are
								truly comprehensive.
							</p>
						</div>
						{/* Convenient Virtual Care */}
						<div className="bg-accent1/10 rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-3xl md:text-4xl font-bold text-accent1 mb-2">Convenient Virtual Care</h3>
							<p className="text-secondarytxt text-lg">
								Our virtual consultation model means you can access
								specialized menopause care from the comfort of your
								home. No more rushing to appointments or sitting in
								waiting rooms—quality care is just a click away.
							</p>
						</div>
						
						{/* Full Spectrum of Options */}
						<div className="bg-accent2/10 rounded-lg p-6 shadow-sm border border-accent2/20">
							<h3 className="text-3xl md:text-4xl font-bold text-accent2 mb-2">Full Spectrum of Options</h3>
							<p className="text-secondarytxt text-lg">
								We offer the complete range of treatment options—
								from hormone therapy and prescription medications
								to supplements, lifestyle approaches, and cutting-
								edge treatments. This ensures you have access to all
								possible solutions for your symptoms.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values Section */}
			<section className="px-8 py-20 bg-gradient-to-r from-accent1/5 to-accent2/10 ">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12 text-center">
						Our Values
					</h2>
					<div className="space-y-4">
						{/* Value 1 */}
						<div className="bg-whitetxt rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Evidence-Based Excellence</h3>
							<p className="text-secondarytxt">
								We are committed to providing care that is grounded in the latest scientific evidence while being tailored to each
								woman's unique needs and preferences.
							</p>
						</div>
						{/* Value 2 */}
						<div className="bg-whitetxt rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Empowerment Through Education</h3>
							<p className="text-secondarytxt">
								We believe that informed women make better health decisions. We prioritize education and clear communication so
								you understand your body, your options, and the rationale behind our recommendations.
							</p>
						</div>
						{/* Value 3 */}
						<div className="bg-whitetxt rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Compassionate Care</h3>
							<p className="text-secondarytxt">
								We recognize that menopause can be a challenging transition. We approach each woman with empathy, respect, and
								a genuine commitment to improving her quality of life.
							</p>
						</div>
						{/* Value 4 */}
						<div className="bg-whitetxt rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Innovation</h3>
							<p className="text-secondarytxt">
								We continuously seek out and evaluate new approaches to menopause care, ensuring our patients have access to the
								most effective treatments available.
							</p>
						</div>
						{/* Value 5 */}
						<div className="bg-whitetxt rounded-lg p-6 shadow-sm border border-accent1/20">
							<h3 className="text-2xl md:text-3xl font-bold text-accent1 mb-2">Inclusivity</h3>
							<p className="text-secondarytxt">
								We are committed to providing respectful, culturally sensitive care to women of all backgrounds, recognizing the
								diversity of menopause experiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Press & Media Section */}
			<section className="px-8 py-20 bg-whitetxt">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-12">
						Press & Media
					</h2>
					<p className="text-lg text-secondarytxt mb-12 max-w-3xl mx-auto">
						For press inquiries, please contact our media relations team at <a href="mailto:press@hormonefit.com" className="text-accent1 hover:underline">press@hormonefit.com</a>. We're happy to provide expert commentary on menopause-related topics, share our perspective on women's health issues, or discuss the changing landscape of menopause care.
					</p>
					<div className="flex flex-wrap justify-center gap-6">
						<button className="bg-primary/50 text-secondarytxt px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">Forbes</button>
						<button className="bg-primary/50 text-secondarytxt px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">Women's Health</button>
						<button className="bg-primary/50 text-secondarytxt px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">The New York Times</button>
						<button className="bg-primary/50 text-secondarytxt px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">CNN Health</button>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
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
	);
}
