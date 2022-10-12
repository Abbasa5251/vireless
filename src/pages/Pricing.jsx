import React from "react";
import { Helmet } from "react-helmet";
import Price from "../components/Price";

const prices = [
	{
		id: 1,
		name: "1 bhk basic",
		value: "₹13,499",
		isPopular: false,
		highlights: [
			{
				id: 1,
				name: "Control upto 14 appliances",
			},
			{
				id: 2,
				name: "Usage monitor",
			},
			{
				id: 3,
				name: "Schedule ON/OFF",
			},
		],
	},
	{
		id: 2,
		name: "1 bhk premium",
		value: "₹14,999",
		isPopular: true,
		highlights: [
			{
				id: 1,
				name: "Control upto 14 appliances",
			},
			{
				id: 2,
				name: "Usage monitor",
			},
			{
				id: 3,
				name: "Glass finish",
			},
			{
				id: 4,
				name: "Touch Enabled Premium",
			},
			{
				id: 5,
				name: "Schedule ON/OFF",
			},
		],
	},
	{
		id: 3,
		name: "2 bhk basic",
		value: "₹17,999",
		isPopular: false,
		highlights: [
			{
				id: 1,
				name: "Control upto 22 appliances",
			},
			{
				id: 2,
				name: "Usage monitor",
			},
			{
				id: 3,
				name: "Schedule ON/OFF",
			},
		],
	},
	{
		id: 4,
		name: "2 bhk premium",
		value: "₹20,999",
		isPopular: false,
		highlights: [
			{
				id: 1,
				name: "Control upto 22 appliances",
			},
			{
				id: 2,
				name: "Usage monitor",
			},
			{
				id: 3,
				name: "Glass finish",
			},
			{
				id: 4,
				name: "Touch Enabled Premium",
			},
			{
				id: 5,
				name: "Schedule ON/OFF",
			},
		],
	},
];

function Pricing() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
			<Helmet>
				<title>Vireless | Pricing</title>
			</Helmet>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-green-500">
						Pricing
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Start your Home automation Journey at as low as{" "}
						<span className="text-green-700">₹3,499/-</span>
						only.
					</p>
				</div>
				<div className="flex flex-wrap justify-center">
					{prices &&
						prices.map((price) => (
							<Price
								key={price.id}
								name={price.name}
								value={price.value}
								highlights={price.highlights}
								isPopular={price.isPopular}
							/>
						))}
				</div>
			</div>
		</section>
	);
}

export default Pricing;
