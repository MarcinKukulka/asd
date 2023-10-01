"use client";
import { type StaticImageData } from "next/image";
import Link from "next/link";
import { ForumCard } from "./ui/forum-card";
import { Button } from "@/ui/button";
import Handshake from "@/public/assets/icons/heart-handshake.svg";
import Car from "@/public/assets/icons/car-front.svg";
import Flower from "@/public/assets/icons/flower-2.svg";
import HeartPulse from "@/public/assets/icons/heart-pulse.svg";
import Memory from "@/public/assets/icons/memory-stick.svg";
import Terminal from "@/public/assets/icons/terminal-square.svg";

const FORUM_CARDS = [
	{
		title: "Przyszłość sztucznej inteligencji",
		description: "Odkryj najnowsze trendy w AI i machine learningu.",
		icon: Terminal as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Energia odnawialna i ekologia",
		description: "Nowe technologie w produkcji energii zrównoważonej.",
		icon: Flower as StaticImageData,
		iconAlt: "eco icon",
	},
	{
		title: "Blockchain i kryptowaluty",
		description: "Rozważania nad przyszłością finansów i technologii blockchain.",
		icon: Handshake as StaticImageData,
		iconAlt: "link icon",
	},
	{
		title: "Internet rzeczy (IoT)",
		description: "Najnowsze osiągnięcia w dziedzinie IoT i automatyzacji.",
		icon: Memory as StaticImageData,
		iconAlt: "network icon",
	},
	{
		title: "Medycyna przyszłości",
		description: "Nowe metody diagnostyki i leczenia w medycynie.",
		icon: HeartPulse as StaticImageData,
		iconAlt: "heart icon",
	},
	{
		title: "Autonomiczne pojazdy",
		description: "Rozwój technologii prowadzących do samochodów autonomicznych.",
		icon: Car as StaticImageData,
		iconAlt: "car icon",
	},
];
export const ForumSection = () => {
	return (
		<>
			<section className="flex w-full justify-center bg-sky-100 pb-8">
				<div className="flex max-w-7xl flex-col-reverse items-center md:flex-row md:content-between ">
					<div className="mt-16 flex flex-col items-start justify-center gap-y-12 px-8">
						<h2 className="self-center text-4xl font-bold">
							Budujemy społeczność!
						</h2>
						<div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-3">
							{FORUM_CARDS.map(({ title, description, iconAlt, icon }) => (
								<ForumCard
									title={title}
									description={description}
									icon={icon}
									iconAlt={iconAlt}
									key={title}
								/>
							))}
						</div>
						<Link href="http://192.166.217.253:8000" className="self-center" target={"_blank"}>
							<Button className="text-md self-center bg-sky-700">Wejdź na forum</Button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
