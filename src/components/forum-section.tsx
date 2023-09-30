"use client";
import { type StaticImageData } from "next/image";
import { ForumCard } from "./ui/forum-card";
import { Button } from "@/ui/button";
import Handshake from "@/public/assets/icons/heart-handshake.svg";

const FORUM_CARDS = [
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
	},
	{
		title: "Card1",
		description: "card description",
		icon: Handshake as StaticImageData,
		iconAlt: "handshake icon",
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
					<div className="mx-auto grid grid-cols-3 gap-8">
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
