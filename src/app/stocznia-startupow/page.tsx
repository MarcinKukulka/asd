"use client";
import React, { type ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/ui/button";

const ideas = [
	{
		category: "Web Development",
		title: "Interactive Portfolio Website",
		description:
			"Stwórz interaktywną stronę portfolio, która wyróżni Twoje projekty i umiejętności.",
	},
	{
		category: "App Concept",
		title: "Recipe Sharing App",
		description:
			"Opracuj aplikację do dzielenia się przepisami kulinarnymi z innymi pasjonatami gotowania.",
	},
	{
		category: "Design Project",
		title: "Eco-Friendly Product Packaging",
		description:
			"Zaprojektuj ekologiczne opakowania dla produktów, które są przyjazne dla środowiska.",
	},
	{
		category: "Mobile App",
		title: "Mindfulness Meditation App",
		description:
			"Stwórz aplikację do medytacji i relaksacji, która pomaga użytkownikom zredukować stres i poprawić samopoczucie.",
	},
	{
		category: "Community Project",
		title: "Neighborhood Watch App",
		description:
			"Opracuj aplikację dla lokalnych społeczności, która umożliwia mieszkańcom zgłaszanie i monitorowanie incydentów bezpieczeństwa.",
	},
	{
		category: "Game Development",
		title: "Educational Quiz Game",
		description:
			"Zbuduj grę edukacyjną, która pomaga uczniom w nauce różnych przedmiotów poprzez interaktywne quizy.",
	},
	{
		category: "Social Impact",
		title: "Community Clean-up Initiative",
		description:
			"Zorganizuj akcję sprzątania dla społeczności lokalnej w celu poprawy czystości i estetyki okolicy.",
	},
	{
		category: "Educational Initiative",
		title: "Online Language Learning Platform",
		description:
			"Rozpocznij platformę edukacyjną oferującą kursy języków obcych dla osób chcących rozwijać swoje umiejętności lingwistyczne.",
	},
	{
		category: "Tech Innovation",
		title: "Smart Home Automation System",
		description:
			"Opracuj system automatyzacji domu, który umożliwia użytkownikom zdalne sterowanie urządzeniami elektronicznymi i poprawę efektywności energetycznej.",
	},
];
const Talents: React.FC = () => {
	const [formData1, setFormData1] = useState({
		imie: "",
		nazwisko: "",
		pytanie: "",
		email: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData1({ ...formData1, [name]: value });
	};

	const handleInputChange2 = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData1({ ...formData1, [name]: value });
	};
	const [selectedTile, setSelectedTile] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setSelectedTile(selectedTile === index ? null : index);
	};

	useEffect(() => {
		const handleBodyClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			// Sprawdź czy kliknięto na element body lub jego dzieci
			if (target.tagName.toLowerCase() === "body" || target.closest(".modal-container") === null) {
				setSelectedTile(null);
			}
		};

		// Dodaj event listener do body
		document.body.addEventListener("click", handleBodyClick);

		// Oczyść event listener po zniszczeniu komponentu
		return () => {
			document.body.removeEventListener("click", handleBodyClick);
		};
	}, []);

	return (
		<div className="bg-sky-blue flex flex-col items-center justify-between p-8">
			<div className="mb-4 flex flex-col items-center justify-between">
				<h1 className="text-3xl font-bold">Stocznia startupów</h1>
				<p className="text-xl font-semibold">Znajdź swoją szansę</p>
			</div>

			{selectedTile !== null && (
				<div className="modal-container">
					<div className="modal-content flex flex-col rounded-lg bg-white p-8 shadow-md">
						<h2 className="mb-4 text-2xl font-bold text-sky-900">{ideas[selectedTile].title}</h2>
						<p className="mb-4 text-base font-semibold text-gray-600">
							{ideas[selectedTile].category}
						</p>
						<p className="mb-4 text-base text-gray-600">{ideas[selectedTile].description}</p>
					</div>
					<h2 className="flex flex-col items-center pt-10 text-3xl font-bold">
						Dodaj swoj pomysł!
					</h2>
					<div className="flex flex-col p-5">
						<div className="flex flex-grow flex-col items-center justify-between">
							<form className="mx-2 grid justify-center rounded-md bg-white p-1 pb-10 md:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl">
								<div className="grid grid-rows-1 gap-4 md:grid-cols-3">
									<label className="block text-sm font-medium text-gray-700">
										Imię:
										<input
											className="mt-1 w-full rounded border border-sky-500 p-2"
											type="text"
											name="imie"
											value={formData1.imie}
											onChange={handleInputChange}
											required
										/>
									</label>
									<label className="block text-sm font-medium text-gray-700">
										Nazwisko:
										<input
											className="mt-1 w-full rounded border border-sky-500 p-2"
											type="text"
											name="nazwisko"
											value={formData1.nazwisko}
											onChange={handleInputChange}
											required
										/>
									</label>
									<label className="block text-sm font-medium text-gray-700">
										E-mail:
										<input
											className="mt-1 w-full rounded border border-sky-500 p-2"
											type="email"
											name="email"
											value={formData1.email}
											onChange={handleInputChange}
											required
										/>
									</label>
									<div className="md:col-span-3">
										<label className="block text-sm font-medium text-gray-700">
											Twój pomysł:
											<textarea
												className="md:w-[calc(100% - 4rem)] mt-1 w-full rounded border border-sky-500 p-2"
												name="pytanie"
												value={formData1.pytanie}
												required
												onChange={handleInputChange2}
												rows={5}
											/>
										</label>
									</div>
								</div>
								<Button
									type="submit"
									className="hover:primary/90 mx-auto mt-4 min-w-[15ch] rounded-md bg-sky-700 px-4 py-2 text-white"
								>
									Aplikuj
								</Button>
							</form>
						</div>
					</div>
				</div>
			)}

			<div
				className={`grid w-full max-w-4xl cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
					selectedTile !== null ? "hidden" : ""
				}`}
			>
				{ideas.map((idea, index) => (
					<div
						key={index}
						className="rounded-lg bg-white p-4 shadow-md shadow-sky-100 transition-all hover:bg-sky-100"
						onClick={() => handleClick(index)}
					>
						<h2 className="mb-2 text-xl font-bold text-sky-900">{idea.title}</h2>
						<p className="mb-2 text-xs font-semibold text-gray-600">{idea.category}</p>
						<p className="mb-2 line-clamp-3 text-gray-600">{idea.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Talents;
