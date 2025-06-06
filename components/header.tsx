"use client";

import { useEffect, useState } from "react";

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
			className={`top-0 w-full flex flex-row sticky h-20 bg-gradient-to-r from-[#ffeaea] to-[#ebc4f0] items-center justify-between text-black font-bold px-20 z-20 transition-transform duration-300 ${
				show ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<h1 className="bold">Hormone Fit</h1>
			<div className="flex flex-row items-center space-x-5 ">
				<h5>Login</h5>
				<a
					className="bg-accent1 px-3 rounded-xl py-2 text-whitetxt shadow-md hover:scale-105 transition"
					href=""
				>
					Get Started
				</a>
			</div>
		</header>
	);
}
