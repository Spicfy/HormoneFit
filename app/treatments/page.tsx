"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function TreatmentsPage() {
	const [activeTab, setActiveTab] = useState("hormone-therapy");

	// Common styling for checkmark items
	const checkmarkItem = (text: string) => (
		<li className="flex items-start mb-2">
			<span className="text-accent1 mr-2 mt-1">✓</span>
			<p className="text-gray-700">{text}</p>
		</li>
	);

	return (
		<main className="bg-gradient-to-b from-white to-accent1/5 min-h-screen font-sans text-blacktxt">
			{/* Main Heading Section */}
			<section className="px-8 py-24 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-4 leading-tight">
						Comprehensive Menopause Treatments
					</h1>
					<p className="text-lg text-gray-700 font-normal max-w-2xl mx-auto">
						Evidence-based treatments tailored to your unique symptoms and health history.
					</p>
				</div>
			</section>

			{/* Tabs Navigation */}
			<section className="w-full bg-white py-4 border-b border-gray-200">
				<div className="max-w-5xl mx-auto flex justify-center space-x-2 md:space-x-4">
					<button
						className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-base font-semibold transition-colors ${
							activeTab === "hormone-therapy"
								? "bg-accent1 text-white shadow"
								: "text-gray-700 hover:text-accent1 hover:bg-gray-50"
						}`}
						onClick={() => setActiveTab("hormone-therapy")}
					>
						Hormone Therapy
					</button>
					<button
						className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-base font-semibold transition-colors ${
							activeTab === "non-hormonal"
								? "bg-accent1 text-white shadow"
								: "text-gray-700 hover:text-accent1 hover:bg-gray-50"
						}`}
						onClick={() => setActiveTab("non-hormonal")}
					>
						Non-Hormonal
					</button>
					<button
						className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-base font-semibold transition-colors ${
							activeTab === "lifestyle"
								? "bg-accent1 text-white shadow"
								: "text-gray-700 hover:text-accent1 hover:bg-gray-50"
						}`}
						onClick={() => setActiveTab("lifestyle")}
					>
						Lifestyle
					</button>
					<button
						className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-base font-semibold transition-colors ${
							activeTab === "products"
								? "bg-accent1 text-white shadow"
								: "text-gray-700 hover:text-accent1 hover:bg-gray-50"
						}`}
						onClick={() => setActiveTab("products")}
					>
						Products
					</button>
				</div>
			</section>

			{/* Tab Content */}
			<section className="px-8 py-20 bg-white">
				<div className="max-w-5xl mx-auto">
					{/* Hormone Therapy Tab */}
					{activeTab === "hormone-therapy" && (
						<div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
								<div>
									<h2 className="text-3xl font-bold text-accent1 mb-4">Hormone Replacement Therapy</h2>
									<p className="text-gray-700 mb-6">
										Hormone replacement therapy (HRT) is one of the most effective treatments for
										managing menopause symptoms. Our specialists create personalized HRT plans based
										on your specific needs, symptoms, and health history.
									</p>
									<ul className="list-none p-0">
										{checkmarkItem("Estrogen therapy for hot flashes, night sweats, and vaginal dryness")}
										{checkmarkItem("Progesterone to protect the uterine lining")}
										{checkmarkItem("Testosterone for energy, libido, and mood")}
										{checkmarkItem("Available in various forms: pills, patches, creams, and more")}
									</ul>
								</div>
								<div className="flex justify-center">
									<Image
										src="/treatment-mock.png" // Placeholder image
										alt="Woman discussing hormone therapy options with doctor"
										width={500}
										height={300}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
							{/* Is Hormone Therapy Right For You? Section */}
							<div className="bg-accent1/10 p-8 rounded-lg mt-16 text-center">
								<h3 className="text-2xl font-bold text-accent1 mb-4">Is Hormone Therapy Right for You?</h3>
								<p className="text-gray-700 mb-6 max-w-2xl mx-auto">
									Hormone therapy is generally safe and effective for most women, but it's not right for everyone. Our specialists will carefully review your medical history to determine if HRT is appropriate for you.
								</p>
								<Link
									href="/quiz"
									className="bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
								>
									Take the Quiz to Find Out
								</Link>
							</div>
						</div>
					)}

					{/* Non-Hormonal Tab */}
					{activeTab === "non-hormonal" && (
						<div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
								<div>
									<h2 className="text-3xl font-bold text-accent1 mb-4">Non-Hormonal Treatments</h2>
									<p className="text-gray-700 mb-6">
										For women who cannot or prefer not to use hormone therapy, we offer effective non-hormonal alternatives that target specific menopause symptoms.
									</p>
									<ul className="list-none p-0">
										{checkmarkItem("Prescription medications for hot flashes and night sweats")}
										{checkmarkItem("Treatments for mood changes and anxiety")}
										{checkmarkItem("Solutions for sleep disturbances")}
										{checkmarkItem("Vaginal moisturizers and lubricants for dryness")}
									</ul>
								</div>
								<div className="flex justify-center">
									<Image
										src="/treatment-mock-2.png" // Placeholder image
										alt="Woman discussing non-hormonal treatment options"
										width={500}
										height={300}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
							{/* Non-Hormonal Options We Prescribe Section */}
							<div className="bg-accent1/10 p-8 rounded-lg mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-bold text-accent1 mb-4">For Hot Flashes & Night Sweats</h3>
									<ul className="list-disc list-inside space-y-2 text-gray-700">
										<li>Low-dose antidepressants</li>
										<li>Gabapentin</li>
										<li>Clonidine</li>
										<li>Oxybutynin</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-bold text-accent1 mb-4">For Mood & Sleep</h3>
									<ul className="list-disc list-inside space-y-2 text-gray-700">
										<li>Selective serotonin reuptake inhibitors (SSRIs)</li>
										<li>Serotonin-norepinephrine reuptake inhibitors (SNRIs)</li>
										<li>Sleep aids</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* Lifestyle Tab */}
					{activeTab === "lifestyle" && (
						<div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
								<div>
									<h2 className="text-3xl font-bold text-accent1 mb-4">Lifestyle Modifications</h2>
									<p className="text-gray-700 mb-6">
										Lifestyle changes can significantly improve menopause symptoms and overall health.
										Our specialists provide personalized recommendations based on your specific needs
										and lifestyle.
									</p>
									<ul className="list-none p-0">
										{checkmarkItem("Nutrition plans tailored for menopause")}
										{checkmarkItem("Exercise recommendations for bone and heart health")}
										{checkmarkItem("Sleep hygiene techniques")}
										{checkmarkItem("Stress management strategies")}
									</ul>
								</div>
								<div className="flex justify-center">
									<Image
										src="/treatment-mock-3.png" // Placeholder image
										alt="Woman exercising outdoors"
										width={500}
										height={300}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
							{/* Lifestyle Cards */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
								<div className="bg-accent1/10 p-6 rounded-lg text-center">
									<h3 className="text-xl font-bold text-accent1 mb-2">Nutrition</h3>
									<p className="text-gray-700 text-sm">
										Our nutrition plans focus on foods that can help manage menopause symptoms, support bone health, and maintain a healthy weight. We provide meal plans, recipes, and guidance on supplements.
									</p>
								</div>
								<div className="bg-accent2/10 p-6 rounded-lg text-center">
									<h3 className="text-xl font-bold text-accent2 mb-2">Exercise</h3>
									<p className="text-gray-700 text-sm">
										Regular physical activity can help reduce hot flashes, improve sleep, boost mood, and maintain bone density. We create exercise plans that fit your lifestyle and fitness level.
									</p>
								</div>
								<div className="bg-accent1/10 p-6 rounded-lg text-center">
									<h3 className="text-xl font-bold text-accent1 mb-2">Stress Management</h3>
									<p className="text-gray-700 text-sm">
										Stress can worsen menopause symptoms. We teach techniques like mindfulness, meditation, and breathing exercises to help you manage stress and improve your overall well-being.
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Products Tab */}
					{activeTab === "products" && (
						<div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
								<div>
									<h2 className="text-3xl font-bold text-accent1 mb-4">Premium Products</h2>
									<p className="text-gray-700 mb-6">
										We offer a curated selection of high-quality supplements and products designed
										specifically for menopause symptom relief. All products are carefully vetted by our
										medical team for safety and efficacy.
									</p>
									<ul className="list-none p-0">
										{checkmarkItem("Supplements for hot flashes and night sweats")}
										{checkmarkItem("Sleep support formulas")}
										{checkmarkItem("Vaginal moisturizers and lubricants")}
										{checkmarkItem("Cooling products for hot flash relief")}
									</ul>
								</div>
								<div className="flex justify-center">
									<Image
										src="/treatment-mock-4.png" // Placeholder image
										alt="Premium menopause products"
										width={500}
										height={300}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
							{/* Product Cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
								<div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow">
									<h3 className="text-lg font-bold text-blacktxt mb-2">Hormone Balance</h3>
									<p className="text-gray-700 text-sm mb-4">
										Natural supplements designed to help balance hormones and reduce hot flashes.
									</p>
									<span className="font-semibold text-accent1">$49.99</span>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow">
									<h3 className="text-lg font-bold text-blacktxt mb-2">Sleep Support</h3>
									<p className="text-gray-700 text-sm mb-4">
										Specially formulated to improve sleep quality during menopause.
									</p>
									<span className="font-semibold text-accent1">$39.99</span>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow">
									<h3 className="text-lg font-bold text-blacktxt mb-2">Cooling Spray</h3>
									<p className="text-gray-700 text-sm mb-4">
										Instant cooling relief for hot flashes and night sweats.
									</p>
									<span className="font-semibold text-accent1">$24.99</span>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow">
									<h3 className="text-lg font-bold text-blacktxt mb-2">Intimate Moisture</h3>
									<p className="text-gray-700 text-sm mb-4">
										Relieves vaginal dryness and discomfort associated with menopause.
									</p>
									<span className="font-semibold text-accent1">$29.99</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}
