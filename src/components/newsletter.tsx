"use client";
import React, { type ChangeEvent, useState } from "react";
import { Button } from "./ui/button";

export const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Symulacja opóźnienia i asynchronicznej operacji
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsSubscribed(true);
		}, 2000); // Symulacja opóźnienia 2 sekundy przed ustawieniem isSubscribed na true.
	};

	return (
		<div className={`relative py-16 ${isLoading ? "loading" : ""}`}>
			<div className="container mx-auto px-4">
				{!isSubscribed ? (
					<>
						<div className="flex flex-col items-center justify-center gap-y-5">
							<h2 className="gap-y-5 text-2xl font-semibold md:text-3xl">
								Zapisz się na nasz newsletter
							</h2>
							<p className="px-100 mb-5 text-sm text-gray-600">
								... a otrzymasz <span className="font-semibold text-sky-700">zniżkę</span> na nasze
								najnowsze kursy! Nie przegap okazji na rozwijanie swoich umiejętności za mniejszą
								cenę.
							</p>
						</div>
						<form onSubmit={handleSubmit} className="mx-auto max-w-md">
							<div className="flex items-center rounded border border-gray-300">
								<input
									type="email"
									placeholder="Twój adres email"
									className="w-full px-4 py-2 outline-none"
									value={email}
									onChange={handleInputChange}
									disabled={isLoading}
								/>
								<Button
									type="submit"
									className={`relative rounded-r bg-sky-700 px-6 py-2 text-white transition duration-300 hover:bg-primary/90 `}
									disabled={isLoading}
								>
									Subskrybuj
								</Button>
							</div>
						</form>
						{isLoading && (
							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
								<div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-700"></div>
							</div>
						)}
					</>
				) : (
					<p className="text-center text-2xl font-semibold text-sky-900">
						Udało ci się zapisać do naszego newslettera!
					</p>
				)}
			</div>
		</div>
	);
};
