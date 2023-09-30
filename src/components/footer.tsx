import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const Footer = () => {
	return (
		<footer className="bg-sky-800 text-center text-white">
			<div className="flex items-center justify-center p-6">
				<Link href="https://instagram.com/kolobrzeg.eu" target="_blank">
					<div className="mr-4 rounded-full bg-sky-500 p-2">
						<Icon name={"instagram"} />
					</div>
				</Link>
				<Link href="https://facebook.com/kolobrzeg" target="_blank">
					<div className="mr-4 rounded-full bg-sky-500 p-2">
						<Icon name={"facebook"} />
					</div>
				</Link>
				<Link href="https://twitter.com/hackyeah" target="_blank">
					<div className="mr-4 rounded-full bg-sky-500 p-2">
						<Icon name={"twitter"} />
					</div>
				</Link>
			</div>
			<div className="pb-5">© HackYeah 2023 - All Rights Reserved</div>
		</footer>
	);
};
