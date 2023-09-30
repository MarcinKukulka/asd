import Image from "next/image";
import { Button } from "@/ui/button";
import Lantern from "@/public/assets/lantern.png";

export const HeroSection = () => {
	return (
		<section className="flex w-full justify-center bg-sky-100">
			<div className="flex max-w-7xl flex-col-reverse items-center md:flex-row md:content-between ">
				<div className="justify-left mt-5 flex flex-col  items-start gap-y-8 px-8 pb-8">
					<h1 className="break-words text-5xl md:text-7xl">
						Pomagamy w znalezieniu <span className="font-light">życiowej szansy</span>{" "}
					</h1>
					<p>
						Nasza misja polega na dostarczaniu informacji i narzędzi, które pomogą Ci w znalezieniu
						wymarzonej pracy.
					</p>
					<Button className="text-md bg-sky-700">Napisz do nas</Button>
				</div>
				<Image width={500} height={400} src={Lantern} alt="Latarnia" />
			</div>
		</section>
	);
};
