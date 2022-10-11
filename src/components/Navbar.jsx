import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header className="text-green-50 bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link to="/" className="mb-4 md:mb-0 cursor-pointer">
					<img src={Logo} alt="Logo" className="w-40" />
				</Link>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<Link
						to="/"
						className="mr-5 hover:text-green-500 cursor-pointer"
					>
						Home
					</Link>
					<Link
						to="/testimonial"
						className="mr-5 hover:text-green-500 cursor-pointer"
					>
						Testimonial
					</Link>
					<Link
						to="/pricing"
						className="mr-5 hover:text-green-500 cursor-pointer"
					>
						Pricing
					</Link>
					<Link
						to="/team"
						className="mr-5 hover:text-green-500 cursor-pointer"
					>
						Our Team
					</Link>
				</nav>
				<Link to="/contact">
					<button className="inline-flex items-center justify-center space-x-1 bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						<span>Contact</span>
					</button>
				</Link>
			</div>
		</header>
	);
}

export default Navbar;
