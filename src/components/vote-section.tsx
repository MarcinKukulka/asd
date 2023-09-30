"use client";

import { useState } from "react";
import { VoteInput } from "./ui/vote-input";
import { Button } from "./ui/button";
import { Chart } from "./ui/donut-chart";

const PROJECTS = [
	{ id: 1, title: "Projekt 1" },
	{ id: 2, title: "Projekt 2" },
	{ id: 3, title: "Projekt 3" },
	{ id: 4, title: "Projekt 4" },
	{ id: 5, title: "Projekt 5" },
	{ id: 6, title: "Projekt 6" },
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
				By information about design the world to the best instructors, heatc helping By information
			</p>
			{!isButtonClicked ? (
				<form className="flex flex-col items-center" onSubmit={handleVoting}>
					<div className="gird-cols-1 grid gap-6 md:grid-cols-2">
						{PROJECTS.map(({ id, title }) => (
							<VoteInput key={id} title={title} onChange={handleInputChange} />
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
