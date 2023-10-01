"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export const Navbar = () => {
	const [navState, setNavState] = useState(false);
	const navbarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (navbarRef.current && !navbarRef.current.contains(event.target as HTMLDivElement)) {
				setNavState(false);
			}
		}

		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [navbarRef]);

	const navbarPaths = [
		{ title: "Home", path: "/" },
		{ title: "Kursy", path: "http://192.166.217.253" },
		{ title: "Forum", path: "http://192.166.217.253:8000" },
		{ title: "Kontakt", path: "/kontakt" },
		{ title: "Stocznia startupów", path: "/stocznia-startupow" },
	];

	return (
		<nav className="fixed left-0 top-0 z-10 h-24 w-full border-b-2 bg-sky-100 ">
			<div className="mx-auto mt-4 max-w-screen-xl items-center md:mt-2  md:flex" ref={navbarRef}>
				<div className="flex items-center justify-between py-3 md:block md:py-5">
					<Link href="/" onClick={() => setNavState(false)}>
						<h1 className="pl-4 text-3xl font-bold text-sky-900">Bryza Innowacji</h1>
					</Link>
					<div className="md:hidden">
						<button
							className="mr-4 rounded-md p-2 text-gray-700 outline-none focus:border focus:border-slate-700"
							onClick={() => setNavState(!navState)}
						>
							<Menu />
						</button>
					</div>
				</div>
				<div
					className={`flex-1 justify-self-center bg-sky-100 pb-6 pt-8 transition-all md:mt-0 md:block md:pb-0 md:pt-0 ${
						navState ? "block transition-all" : "hidden transition-all"
					}`}
				>
					<ul className="mr-4 place-items-center items-center space-y-8 md:flex md:justify-end md:space-x-6 md:space-y-0">
						{navbarPaths.map(({ path, title }, idx) => (
							<li
								key={idx}
								className="text-center text-2xl text-black underline-offset-4 hover:underline  md:text-lg"
							>
								<Link onClick={() => setNavState(false)} href={path}>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
