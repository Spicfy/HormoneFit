// app/about/page.tsx
"use client";

export default function AboutPage() {
	return (
		<main className="bg-white min-h-screen font-sans pb-0">
			{/* Mission Statement */}
			<section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4 md:px-24 py-20">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 mb-6 leading-tight">We're on a mission to help women thrive through every stage of menopause.</h1>
					<p className="text-xl text-center text-gray-700 font-light mb-4 mx-auto">Living your best life starts with your health. At Hormone Fit, we believe every woman deserves personalized, stigma-free care—so you can feel your best, every day.</p>
				</div>
			</section>

			{/* Problem & Solution */}
			<section className="px-4 md:px-24 py-16 max-w-4xl mx-auto">
				<div className="space-y-6">
                    <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent text-2xl font-bold">
                        But that's easier said than done
                    </span>
					<p className="text-lg text-gray-700 font-light">For many women, the path to good health is filled with obstacles: lack of specialized care, long wait times, stigma, and a "one size fits all" approach that doesn't fit anyone.</p>
					<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent text-2xl font-bold">
                        We think it's time for a better way.
                    </span>
					<p className="text-lg text-gray-700 font-light">Hormone Fit is here to change the story—offering expert, compassionate menopause care that's tailored to you, whenever and wherever you need it.</p>
				</div>
			</section>

			{/* What We Offer */}
			<section className="px-4 md:px-24 py-16 bg-gradient-to-r from-white via-pink-50 to-white">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
					{[
						{
							icon: '/lightbulb.svg',
							title: 'Personalized Care',
							desc: 'No two journeys are the same. We create tailored plans for your unique needs.'
						},
						{
							icon: '/net.svg',
							title: 'Virtual Access',
							desc: 'Expert care and support, accessible from the comfort of your home.'
						},
						{
							icon: '/heart.svg',
							title: 'Stigma-Free',
							desc: 'A safe, supportive space—always free from judgment.'
						},
					].map((item) => (
						<div key={item.title} className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center border border-pink-100 hover:shadow-xl transition-shadow duration-300">
							<img src={item.icon} alt="icon" className="mb-4 w-12 h-12" />
							<h3 className="text-lg font-semibold mb-2 text-gray-900 text-center">{item.title}</h3>
							<p className="text-gray-700 text-center text-sm">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Company Overview */}
			<section className="px-4 md:px-24 py-16 max-w-4xl mx-auto">
				<span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent text-2xl font-bold">
					A new approach to women's health
				</span>
				<p className="text-lg text-gray-700 font-light mb-4">Hormone Fit is Canada's first truly integrated menopause care platform. Founded by clinicians and technologists, our digital-first approach includes everything from diagnosis to personalized treatment—accessible from anywhere, at any time.</p>
				<p className="text-lg text-gray-700 font-light">We're building a new kind of healthcare for women. If you're passionate about making a difference, we'd love to meet you.</p>
			</section>

			{/* Stats Section */}
			<section className="px-4 md:px-24 py-12 max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[
						{ icon: '/patient.svg', label: 'Patients Served', value: '1M+' },
						{ icon: '/medicine.svg', label: 'Prescriptions Filled', value: '1M+' },
						{ icon: '/stethoscope.svg', label: 'Clinicians', value: '120' },
					].map((stat) => (
						<div key={stat.label} className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow-md flex flex-col items-center py-8">
							<img src={stat.icon} alt="icon" className="mb-2 w-10 h-10" />
							<div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
							<div className="text-sm text-gray-600 mt-1">{stat.label}</div>
						</div>
					))}
				</div>
			</section>

			{/* Leadership/Medical Team Section */}
			<section className="px-4 md:px-24 py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Leadership & Medical Team</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{[
							{ name: 'Dr. Nathan Roth', role: 'Co-Founder, CEO' },
							{ name: 'Dr. Emily Chen', role: 'Medical Director' },
							{ name: 'Sarah Lee', role: 'Chief Product Officer' },
							{ name: 'Dr. Priya Patel', role: 'Clinical Lead' },
							{ name: 'Olivia Brown', role: 'Pharmacy Director' },
							{ name: 'Dr. Laura Kim', role: 'Menopause Specialist' },
						].map((member) => (
							<div key={member.name} className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center border border-pink-100 hover:shadow-xl transition-shadow duration-300">
								<div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 mb-4 flex items-center justify-center text-3xl text-white font-bold">
									{member.name.split(' ').map(n => n[0]).join('')}
								</div>
								<h3 className="text-lg font-semibold mb-1 text-gray-900 text-center">{member.name}</h3>
								<p className="text-pink-700 text-center text-sm">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
