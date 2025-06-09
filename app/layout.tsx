import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Domine } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LocomotiveScrollProvider from "./components/LocomotiveScrollProvider";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const domine = Domine({
	variable: "--font-domine",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "HormoneFit",
	description: "Personalized menopause care for Canadians",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="has-scroll-smooth">
			<head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${domine.variable} antialiased bg-whitetxt text-blacktxt`}>
				<LocomotiveScrollProvider>
					<Header />
					<main data-scroll>{children}</main>
					<Footer />
				</LocomotiveScrollProvider>
			</body>
		</html>
	);
}
