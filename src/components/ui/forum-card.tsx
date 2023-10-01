import Image, { type StaticImageData } from "next/image";

export const ForumCard = ({
	title,
	description,
	icon,
	iconAlt,
}: {
	title: string;
	description: string;
	icon: StaticImageData;
	iconAlt: string;
}) => {
	return (
		<div className="flex gap-x-4">
			<Image
				src={icon}
				width={50}
				height={50}
				alt={iconAlt}
				className="h-14 w-14 rounded-md bg-white p-2"
			/>
			<div>
				<p className="font-bold">{title}</p>
				<p className="mt-2 pr-8 text-sm">{description}</p>
			</div>
		</div>
	);
};
