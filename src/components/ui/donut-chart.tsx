import { Card, Title, DonutChart } from "@tremor/react";

const projects = [
	{
		name: "Project 1",
		sales: 9800,
	},
	{
		name: "Project 2",
		sales: 4567,
	},
	{
		name: "Project 3",
		sales: 3908,
	},
	{
		name: "Project 4",
		sales: 2400,
	},
	{
		name: "Project 5",
		sales: 1908,
	},
	{
		name: "Project 6",
		sales: 1398,
	},
];

const valueFormatter = (number: number) =>
	`${Intl.NumberFormat("us").format(number).toString()} głosów`;

export const Chart = () => (
	<Card className="max-w-lg">
		<Title>Wyniki głosowania</Title>
		<DonutChart
			className="mt-6"
			data={projects}
			category="sales"
			index="name"
			valueFormatter={valueFormatter}
			colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
		/>
	</Card>
);
