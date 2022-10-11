import React from "react";
import NotFoundImage from "../assets/Empty-bro.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
	return (
		<section class="text-gray-400 bg-gray-900 body-font">
			<Helmet>
				<title>Vireless | Not Found</title>
			</Helmet>
			<div class="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
				<img
					class="lg:w-2/6 md:w-3/6 w-5/6 mb-5 rounded"
					alt="Not Found Image"
					src={NotFoundImage}
				/>
				<div class="text-center lg:w-2/3 w-full">
					<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Page Not Found
					</h1>
					<p class="leading-relaxed mb-3">
						The page you are looking for doesn't exist
					</p>
					<div class="flex justify-center">
						<Link
							to="/"
							className="text-green-500 my-2 mx-6 text-xl"
						>
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
