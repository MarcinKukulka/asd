export const VoteInput = ({
	title,
	onChange,
}: {
	title: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<label
			htmlFor={title}
			className="flex items-center gap-x-56 whitespace-nowrap rounded-md  border border-sky-500 p-3 px-3 checked:outline-none hover:bg-sky-100"
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
