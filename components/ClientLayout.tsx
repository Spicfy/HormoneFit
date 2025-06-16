"use client";

import Header from "./header";
import Footer from "./footer";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
