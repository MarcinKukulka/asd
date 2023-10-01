"use client";

import { useState } from "react";
import { VoteInput } from "./ui/vote-input";
import { Button } from "./ui/button";
import { Chart } from "./ui/donut-chart";

const PROJECTS = [
	{
		id: 1,
		title: "EkoDron: Monitorowanie Ekologii",
		description:
			"Projekt EkoDron wykorzystuje drony i sztuczną inteligencję do monitorowania i ochrony środowiska naturalnego.",
	},
	{
		id: 2,
		title: "MedTech 2.0: Opieka Zdrowotna Przyszłości",
		description:
			"MedTech 2.0 to projekt, który zmienia dostarczanie opieki zdrowotnej, wykorzystując zaawansowane technologie i analizę danych.",
	},
	{
		id: 3,
		title: "AquaFarm: Produkcja Żywności Morskiej",
		description:
			"Projekt AquaFarm skupia się na zrównoważonej produkcji żywności morskiej z wykorzystaniem nowoczesnych technologii hodowli.",
	},
	{
		id: 4,
		title: "GreenTech+: Ekologiczna Energetyka",
		description:
			"Projekt GreenTech+ rozwija ekologiczne technologie energetyczne w celu zmniejszenia emisji CO2.",
	},
	{
		id: 5,
		title: "EduAI: Nauczanie Maszynowe dla Wszystkich",
		description:
			"Projekt EduAI bada nowe metody nauczania maszynowego i sztucznej inteligencji, aby uczynić je bardziej dostępnymi.",
	},
	{
		id: 6,
		title: "SmartCity 2030: Transformacja Infrastruktur",
		description:
			"SmartCity 2030 wykorzystuje IoT i analizę danych do transformacji miejskich infrastruktur i poprawy jakości życia mieszkańców.",
	},
];

export const VoteSection = () => {
	const [isInputSelected, setIsInputSelected] = useState(false);
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	const handleInputChange = () => {
		setIsInputSelected(true);
	};

	const handleVoting = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const selectedProject = (target.elements.namedItem("project") as HTMLInputElement).value;
		console.log(selectedProject);
		setIsButtonClicked(true);
		// Handle form submission
	};

	return (
		<section className="mb-16 w-full max-w-5xl bg-white">
			<h2 className="mt-16 text-center text-4xl font-bold">
				Zagłosuj na projekt, który może dać Ci szansę
			</h2>
			<p className="mb-10 mt-4 text-center">
				Głosuj na przyszłość! Wybierz najbardziej innowacyjne i wartościowe projekty, które
				kształtują jutro. Twój głos ma moc zmiany!
			</p>
			{!isButtonClicked ? (
				<form className="flex flex-col items-center" onSubmit={handleVoting}>
					<div className="gird-cols-1 grid gap-6 md:grid-cols-2">
						{PROJECTS.map(({ id, title, description }) => (
							<VoteInput
								key={id}
								title={title}
								onChange={handleInputChange}
								description={description}
							/>
						))}
					</div>

					<Button
						className="focus:shadow-outline my-2 mt-16 transform rounded-lg bg-sky-700 px-4 py-2 text-base text-white transition duration-500 ease-in-out hover:bg-sky-600 focus:outline-none focus:ring-2"
						disabled={!isInputSelected}
					>
						Zagłosuj
					</Button>
				</form>
			) : (
				<div className="mx-auto flex items-center justify-center">
					<Chart />
				</div>
			)}
		</section>
	);
};
