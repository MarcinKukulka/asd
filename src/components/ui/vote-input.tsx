export const VoteInput = ({
	title,
	description,
	onChange,
}: {
	title: string;
	description: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<label
		title={description}
			htmlFor={title}
			className="flex items-center justify-between cursor-pointer whitespace-nowrap rounded-md  border border-sky-500 p-3 text-sm px-3 checked:outline-none hover:bg-sky-100"
		>
			{title}
			<input
				id={title}
				className="h-5 w-5 appearance-none rounded-full border border-sky-500 accent-sky-500 checked:border-none checked:bg-sky-500 checked:outline-none"
				type="radio"
				name="project"
				value={title}
				onChange={onChange}
			/>
		</label>
	);
};
