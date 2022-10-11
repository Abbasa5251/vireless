import React from "react";
import { Helmet } from "react-helmet";

function Team() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<Helmet>
				<title>Vireless | Our Team</title>
			</Helmet>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
						Our Team
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn
						asymmetrical gentrify, subway tile poke farm-to-table.
						Franzen you probably haven't heard of them.
					</p>
				</div>
				<div className="flex flex-wrap">
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="team"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src="https://dummyimage.com/200x200"
							/>
							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-white">
									Vrushabh Modi
								</h2>
								<h3 className="text-gray-500 mb-3">Founder</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut
									adaptogen squid fanny pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="team"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src="https://dummyimage.com/201x201"
							/>
							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-white">
									Siddharth Mutha
								</h2>
								<h3 className="text-gray-500 mb-3">Founder</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut
									adaptogen squid fanny pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
