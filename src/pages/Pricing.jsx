import React from "react";
import { Helmet } from "react-helmet";

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
				<div className="flex flex-wrap -m-4">
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
							<h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
								1 BHK BASIC
							</h2>
							<h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
								₹12,999
							</h1>
							<p className="flex items-center text-gray-400 mb-2">
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
								Control upto 14 appliances
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Best for existing setup
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Overload Protection
							</p>
							<p className="flex items-center text-gray-400 mb-6">
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
								Monitor usage
							</p>
						</div>
					</div>
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
							<span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
								POPULAR
							</span>
							<h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
								1 BHK PREMIUM
							</h2>
							<h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
								<span>₹13,999</span>
							</h1>
							<p className="flex items-center text-gray-400 mb-2">
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
								Control upto 14 appliances
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Touch Enabled Premium
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Glass Finish
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Monitor usage
							</p>
							<p className="flex items-center text-gray-400 mb-6">
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
								Schedule ON/OFF
							</p>
						</div>
					</div>
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
							<h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
								2 BHK BASIC
							</h2>
							<h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
								<span>₹18,999</span>
							</h1>
							<p className="flex items-center text-gray-400 mb-2">
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
								Control upto 22 appliances
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Best for existing setup
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Overload Protection
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Monitor Usage
							</p>
							<p className="flex items-center text-gray-400 mb-6">
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
								Schedule ON/OFF
							</p>
						</div>
					</div>
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
							<h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
								2 BHK PREMIUM
							</h2>
							<h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
								<span>₹20,999</span>
							</h1>
							<p className="flex items-center text-gray-400 mb-2">
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
								Control upto 22 appliances
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Touch Enabled Premium
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Glass Finish
							</p>
							<p className="flex items-center text-gray-400 mb-2">
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
								Monitor usage
							</p>
							<p className="flex items-center text-gray-400 mb-6">
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
								Schedule ON/OFF
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
