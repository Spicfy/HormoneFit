"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY > lastScrollY) {
					// if scroll down hide the navbar
					setShow(false);
				} else {
					// if scroll up show the navbar
					setShow(true);
				}
				setLastScrollY(window.scrollY);
			}
		};

		// add event listener
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);

			// clean up function
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [lastScrollY]);

	return (
		<header
			className={`fixed w-full top-0 bg-whitetxt border-b border-accent1/20 text-blacktxt font-medium z-20 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}
			}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					
					<span className="text-xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">HormoneFit</span>
				</Link>

				{/* Right-aligned navigation and buttons */}
				<div className="flex items-center space-x-6">
					<nav className="hidden md:flex space-x-6">
						<Link href="/about" className="hover:text-accent1 transition-colors">About</Link>
						<Link href="/treatments" className="hover:text-accent1 transition-colors">Treatments</Link>
						<Link href="/pricing" className="hover:text-accent1 transition-colors">Pricing</Link>
						<Link href="/faq" className="hover:text-accent1 transition-colors">FAQ</Link>
						<Link href="/contact" className="hover:text-accent1 transition-colors">Contact</Link>
					</nav>
					<div className="flex space-x-4">
						<Link href="/login" className="px-4 py-2 border border-accent1 text-accent1 rounded-lg hover:bg-accent1 hover:text-white transition">Sign in</Link>
						<Link href="/get-started" className="px-4 py-2 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-lg hover:opacity-90 transition">Get Started</Link>
					</div>

					{/* Mobile menu button */}
					<button className="md:hidden text-blacktxt focus:outline-none">
						{/* Icon for mobile menu, e.g., a hamburger icon */}
						☰
					</button>
				</div>
			</div>
		</header>
	);
}
