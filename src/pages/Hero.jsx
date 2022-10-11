import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";

function Hero() {
	return (
		<section className="text-gray-400 bg-gray-900">
			<Helmet>
				<title>Vireless | Home</title>
			</Helmet>
			<div className="container mx-auto flex px-24 py-12 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
						Vireless
						<br className="inline-block" />
						<span className="sm:text-xl text-lg text-white">
							Home Automation
						</span>
					</h3>
					<p className="mb-8 leading-relaxed">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Saepe enim consequatur dolorem itaque nobis vero,
						dolore maxime facilis necessitatibus natus mollitia est
						laborum dolores quidem eveniet labore quae magni. Eaque!
					</p>
					<div className="flex justify-center">
						<Link to="/pricing">
							<button className="inline-flex text-green-50 border-2 border-green-500 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
								Know more
							</button>
						</Link>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img className="object-cover" alt="hero" src={HeroImage} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
