import React from "react";

function TeamMember({ name, designation, info, instaUrl, fbUrl }) {
	return (
		<div className="p-4 lg:w-1/2">
			<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
				<img
					alt="team"
					className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
					src="https://dummyimage.com/200x200"
				/>
				<div className="flex-grow sm:pl-8">
					<h2 className="title-font font-medium text-lg text-white">
						{name}
					</h2>
					<h3 className="text-gray-500 mb-3">{designation}</h3>
					<p className="mb-4">{info}</p>
					<span className="inline-flex">
						<a className="text-gray-500" href={fbUrl}>
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a className="ml-2 text-gray-500" href={instaUrl}>
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
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
	);
}

export default TeamMember;
