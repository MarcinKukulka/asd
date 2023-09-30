"use client";
import React, { type ChangeEvent, useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		imie: "",
		nazwisko: "",
		pytanie: "",
		email: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleInputChange2 = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="">
			<div className="my-8 grid justify-center text-center">
				<h1 className="mb-2 text-3xl font-bold">Masz Pytanie?</h1>
				<h1 className="text-xl font-semibold">Skontaktuj się z Urzędem Miasta</h1>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-grow flex-col items-center justify-between">
					<form className="mx-2 grid justify-center rounded-md bg-white p-1 pb-10 md:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl">
						<div className="grid grid-rows-1 gap-4 md:grid-cols-3">
							<label className="block text-sm font-medium text-gray-700">
								Imię:
								<input
									className="mt-1 w-full rounded border border-sky-500 p-2"
									type="text"
									name="imie"
									value={formData.imie}
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
									value={formData.nazwisko}
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
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</label>
							<div className="md:col-span-3">
								<label className="block text-sm font-medium text-gray-700">
									Pytanie:
									<textarea
										className="md:w-[calc(100% - 4rem)] mt-1 w-full rounded border border-sky-500 p-2"
										name="pytanie"
										value={formData.pytanie}
										required
										onChange={handleInputChange2}
										rows={5}
									/>
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="mx-auto mt-4 min-w-[15ch] rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
						>
							Wyślij
						</button>
					</form>

					<iframe
						className={"block"}
						title="Mapa Google"
						width="100%"
						height="250px"
						src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.18699155631!2d15.573750777037388!3d54.17676411226628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1332915aaa9ddba6!2sUrz%C4%85d%20Miasta%20Ko%C5%82obrzeg!5e0!3m2!1spl!2spl!4v1696093032229!5m2!1spl!2spl`}
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}
