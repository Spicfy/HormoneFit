"use client";

export default function ContactPage() {
	return (
		<main className="bg-white min-h-screen font-sans pb-0">
			{/* Hero Contact Section */}
			<section className="w-full bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4 md:px-24 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
				{/* Left: Image + Chat Bubble + Icon */}
				<div className="relative flex flex-col items-center w-full max-w-xs md:max-w-xs mb-8 md:mb-0">
					<div className="rounded-2xl overflow-hidden shadow-lg w-full h-72 md:w-72 md:h-96 flex items-center justify-center bg-white">
						<img src="/mock.png" alt="Contact" className="object-cover w-full h-full" />
					</div>
					<img src="/logo.svg" alt="icon" className="absolute -top-8 -left-8 w-12 h-12 md:w-16 md:h-16" />
					<div className="absolute top-60 md:top-85 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow px-3 py-2 md:px-4 md:py-3 text-gray-700 text-xs md:text-sm w-48 md:w-56">
						Thank you for contacting customer support!<br />How can we help?
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch with us!</h2>
					<p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">If you need help, you can chat with our virtual assistant anytime or visit our FAQ page for quick answers. Still have questions? Our Customer Support team is here daily from 7am to 10pm EST — just send us an email or connect with a live agent in minutes!</p>
					<a href="#" className="bg-gradient-to-r from-accent1 to-accent2 text-white font-bold px-6 py-3 md:px-8 md:py-3 rounded-xl shadow hover:scale-105 hover:shadow-lg transition text-base md:text-lg">Chat now</a>
				</div>
			</section>

			{/* Contact Options */}
			<section className="px-4 md:px-24 py-10 md:py-16 bg-white">
				<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
					{/* Customer Support */}
					<div className="bg-pink-100 rounded-2xl p-6 md:p-8 shadow flex flex-col items-start">
						<h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Customer Support</h2>
						<p className="text-gray-700 mb-2 text-sm md:text-base">Visit our <a href="/faq" className="text-accent1 underline">FAQs</a> for quick answers, or reach out to our support team below.</p>
					</div>

					{/* Email */}
					<div className="bg-pink-100 rounded-2xl p-6 md:p-8 shadow flex flex-col items-start">
						<h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Email</h2>
						<p className="text-gray-700 mb-2 text-sm md:text-base">support@hormonefit.com</p>
						<a href="mailto:support@hormonefit.com" className="text-accent1 underline text-sm md:text-base">Send us an email</a>
					</div>

					{/* Mailing Address */}
					<div className="bg-pink-100 rounded-2xl p-6 md:p-8 shadow flex flex-col items-start md:col-span-2">
						<h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Mailing Address</h2>
						<p className="text-gray-700 text-sm md:text-base">Hope Fertility & Reproductive Centre
                        <br />2330 Kennedy Rd.<br />Suite 317<br />Scarborough, ON M1T 0A2<br />Canada</p>
					</div>
				</div>
			</section>
		</main>
	);
}
