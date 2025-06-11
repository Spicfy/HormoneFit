"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// Scrolling down
				setShow(false);
			} else {
				// Scrolling up
				setShow(true);
			}
			setLastScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header
			className={`top-0 w-full flex items-center justify-between h-20 px-4 md:px-10 lg:px-24
				bg-white border-b border-gray-200 text-blacktxt font-medium z-20 transition-transform duration-300 ${
				show ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<Link href="/" className="flex items-center">
				
				<span className="text-xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
					HormoneFit
				</span>
			</Link>

			<div className="flex items-center space-x-8">
				<nav className="hidden md:flex flex-row items-center space-x-8">
					<Link href="/how-it-works" className="hover:text-accent1 transition-colors">How It Works</Link>
					<Link href="/treatments" className="hover:text-accent1 transition-colors">Treatments</Link>
					<Link href="/pricing" className="hover:text-accent1 transition-colors">Pricing</Link>
					<Link href="/about" className="hover:text-accent1 transition-colors">About</Link>
					<Link href="/faq" className="hover:text-accent1 transition-colors">FAQ</Link>
				</nav>

				<div className="flex items-center space-x-4">
					<Link
						href="/login"
						className="border border-accent1 text-accent1 px-4 py-2 rounded-lg font-semibold hover:bg-accent1 hover:text-white transition"
					>
						Sign in
					</Link>
					<Link
						href="/get-started"
						className="bg-gradient-to-r from-accent1 to-accent2 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}
