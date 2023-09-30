import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: "400" });

export const metadata: Metadata = {
	title: "Hack Kołobrzeg",
	description: "Hacking Kołobrzeg chances",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={poppins.className}>
				<Navbar />
				<div className="overflow-hidden pt-24">{children}</div>
			</body>
		</html>
	);
}
