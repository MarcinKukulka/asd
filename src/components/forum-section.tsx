"use client";
import { type StaticImageData } from "next/image";
import { ForumCard } from "./ui/forum-card";
import { Button } from "@/ui/button";
import Handshake from "@/public/assets/icons/heart-handshake.svg";

const FORUM_CARDS = [
	{
		title: "Przyszłość sztucznej inteligencji",
		description: "Odkryj najnowsze trendy w AI i machine learningu.",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Energia odnawialna i ekologia",
		description: "Nowe technologie w produkcji energii zrównoważonej.",
		icon: Handshake as StaticImageData,
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
		icon: Handshake as StaticImageData,
		iconAlt: "network icon",
	},
	{
		title: "Medycyna przyszłości",
		description: "Nowe metody diagnostyki i leczenia w medycynie.",
		icon: Handshake as StaticImageData,
		iconAlt: "heart icon",
	},
	{
		title: "Autonomiczne pojazdy",
		description: "Rozwój technologii prowadzących do samochodów autonomicznych.",
		icon: Handshake as StaticImageData,
		iconAlt: "car icon",
	},
];
export const ForumSection = () => {
	return (
		<section className="flex w-full justify-center bg-sky-100 pb-8">
			<div className="flex max-w-7xl flex-col-reverse items-center md:flex-row md:content-between ">
				<div className="mt-16 flex flex-col items-start justify-center gap-y-12 px-8">
					<h2 className="self-center text-4xl font-bold">
						Znajdź pomoc na naszym dedykowanym forum
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
					<Button className="text-md self-center bg-sky-700">Wejdź na forum</Button>
				</div>
			</div>
		</section>
	);
};
