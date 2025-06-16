import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Domine } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
		<html lang="en">
			<head></head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${domine.variable} antialiased bg-whitetxt text-blacktxt`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
