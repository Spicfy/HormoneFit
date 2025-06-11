"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [show, setShow] = useState(true); // Initial state is always true for SSR
	const lastScrollY = useRef(0); // Use useRef for scroll position
	const [isMounted, setIsMounted] = useState(false); // New state to track if component is mounted on client

	useEffect(() => {
		setIsMounted(true); // Component has mounted on client

		const handleScroll = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY > lastScrollY.current) {
					setShow(false);
				} else {
					setShow(true);
				}
				lastScrollY.current = window.scrollY; // Update ref
			}
		};

		if (typeof window !== "undefined") {
			// Initialize show based on current scroll position only after client-side mount
			if (window.scrollY > 0) {
				setShow(false);
			} else {
				setShow(true);
			}
			lastScrollY.current = window.scrollY; // Set initial lastScrollY

			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []); // Empty dependency array, runs once on client mount

	// Base classes always present on both server and client
	const baseClasses = `fixed w-full top-0 bg-whitetxt border-b border-accent1/20 text-blacktxt font-medium z-20`;

	// Dynamic classes for animation, only applied on client after mounting
	const dynamicAnimationClasses = isMounted ? 
		`transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}` : 
		"translate-y-0"; // Ensure consistent initial render: always visible and no transition on server/initial client

	return (
		<header
			className={`${baseClasses} ${dynamicAnimationClasses}`}
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
