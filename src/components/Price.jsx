import React from "react";

function Price({ name, value, highlights, isPopular }) {
	return (
		<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
			<div
				className={`h-full p-6 rounded-lg border-2 ${
					isPopular ? "border-green-500" : "border-gray-700"
				} flex flex-col relative overflow-hidden`}
			>
				{isPopular && (
					<span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
						POPULAR
					</span>
				)}
				<h2 className="text-sm uppercase tracking-widest text-gray-400 title-font mb-1 font-medium">
					{name}
				</h2>
				<h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
					<span>{value}</span>
				</h1>
				{highlights.map((highlight) => (
					<p
						key={highlight.key}
						className="flex items-center text-gray-400 mb-2"
					>
						<span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2.5"
								className="w-3 h-3 text-green-500"
								viewBox="0 0 24 24"
							>
								<path d="M20 6L9 17l-5-5"></path>
							</svg>
						</span>
						{highlight.name}
					</p>
				))}
			</div>
		</div>
	);
}

export default Price;
