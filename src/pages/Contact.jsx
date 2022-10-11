import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Contact() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: "",
		message: "",
	});
	const [status, setStatus] = useState({
		error: false,
		success: false,
		message: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleClose = (e) => {
		setStatus({
			success: false,
			error: false,
			message: "",
		});
	};

	const validatePhoneNumber = (str_number) => {
		var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return re.test(str_number.toLowerCase().trim());
	};

	const validateEmail = (str_email) => {
		var re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(str_email.toLowerCase().trim());
	};

	const handleSubmit = (e) => {
		if (data.firstName.trim().length == 0) {
			setStatus({
				success: false,
				error: true,
				message: "Please enter first name",
			});
			return;
		}
		if (data.lastName.trim().length == 0) {
			setStatus({
				success: false,
				error: true,
				message: "Please enter last name",
			});
			return;
		}
		if (data.email.trim().length == 0) {
			setStatus({
				success: false,
				error: true,
				message: "Please enter email",
			});
			return;
		}
		if (data.message.trim().length == 0) {
			setStatus({
				success: false,
				message: "Please enter message",
				error: true,
			});
			return;
		}
		if (data.number.trim().length != 0) {
			// if the user enters number
			if (!validatePhoneNumber(data.number)) {
				setStatus({
					success: false,
					message: "Please enter valid phone number",
					error: true,
				});
				return;
			}
		}
		if (!validateEmail(data.email)) {
			setStatus({
				success: false,
				message: "Please enter valid email",
				error: true,
			});
			return;
		}
		// Submit form
		console.log("Form Submitted");
		setData({
			firstName: "",
			lastName: "",
			email: "",
			number: "",
			message: "",
		});
		setStatus({
			error: false,
			success: true,
			message: "Form has been submitted successfully",
		});
	};

	return (
		<section className="text-green-50 bg-gray-900 body-font relative">
			<Helmet>
				<title>Vireless | Contact</title>
			</Helmet>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						For any further information or queries please feel free
						to fill the below form and we will reach out to you as
						sson as possible
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									for="firstName"
									className="leading-7 text-sm text-gray-400"
								>
									First Name
									<span className="text-xs text-gray-500">
										*
									</span>
								</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									value={data.firstName}
									onChange={handleInput}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									for="lastName"
									className="leading-7 text-sm text-gray-400"
								>
									Last Name
									<span className="text-xs text-gray-500">
										*
									</span>
								</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									value={data.lastName}
									onChange={handleInput}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									for="email"
									className="leading-7 text-sm text-gray-400"
								>
									Email
									<span className="text-xs text-gray-500">
										*
									</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={data.email}
									onChange={handleInput}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									for="number"
									className="leading-7 text-sm text-gray-400"
								>
									Phone Number
								</label>
								<input
									type="text"
									id="number"
									name="number"
									value={data.number}
									onChange={handleInput}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									for="message"
									className="leading-7 text-sm text-gray-400"
								>
									Message
									<span className="text-xs text-gray-500">
										*
									</span>
								</label>
								<textarea
									id="message"
									name="message"
									value={data.message}
									onChange={handleInput}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
						</div>
						{status.error && (
							<div className="container px-4 mx-auto">
								<div className="mx-auto p-6 bg-gray-900 border border-gray-700 rounded-md shadow-dashboard">
									<div className="flex flex-wrap justify-center -m-2">
										<div className="flex-1 p-2">
											<div className="flex flex-wrap">
												<div className="flex-1 p-1">
													<p className="font-medium text-sm text-orange-600">
														{status.message}
													</p>
												</div>
											</div>
										</div>
										<div className="w-auto p-2">
											<span
												className="cursor-pointer"
												onClick={handleClose}
											>
												<svg
													width="16"
													height="16"
													viewbox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M8.93999 8L13.14 3.80667C13.2655 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2655 2.98554 13.14 2.86C13.0145 2.73446 12.8442 2.66394 12.6667 2.66394C12.4891 2.66394 12.3189 2.73446 12.1933 2.86L8 7.06L3.80666 2.86C3.68113 2.73446 3.51086 2.66394 3.33333 2.66394C3.15579 2.66394 2.98553 2.73446 2.85999 2.86C2.73446 2.98554 2.66393 3.1558 2.66393 3.33333C2.66393 3.51087 2.73446 3.68113 2.85999 3.80667L7.06 8L2.85999 12.1933C2.79751 12.2553 2.74791 12.329 2.71407 12.4103C2.68022 12.4915 2.6628 12.5787 2.6628 12.6667C2.6628 12.7547 2.68022 12.8418 2.71407 12.9231C2.74791 13.0043 2.79751 13.078 2.85999 13.14C2.92197 13.2025 2.9957 13.2521 3.07694 13.2859C3.15818 13.3198 3.24532 13.3372 3.33333 13.3372C3.42134 13.3372 3.50847 13.3198 3.58971 13.2859C3.67095 13.2521 3.74469 13.2025 3.80666 13.14L8 8.94L12.1933 13.14C12.2553 13.2025 12.329 13.2521 12.4103 13.2859C12.4915 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8418 13.3198 12.923 13.2859C13.0043 13.2521 13.078 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.2859 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.2859 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.93999 8Z"
														fill="#8896AB"
													></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
						{status.success && (
							<div className="container px-4 mx-auto">
								<div className="mx-auto p-6 bg-gray-900 border border-gray-700 rounded-md">
									<div className="flex flex-wrap justify-center -m-2">
										<div className="flex-1 p-2">
											<div className="flex flex-wrap">
												<div className="flex-1 p-1">
													<p className="font-medium text-sm text-green-500">
														{status.message}
													</p>
												</div>
											</div>
										</div>
										<div className="w-auto p-2">
											<span
												className="cursor-pointer"
												onClick={handleClose}
											>
												<svg
													width="16"
													height="16"
													viewbox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M8.93999 8L13.14 3.80667C13.2655 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2655 2.98554 13.14 2.86C13.0145 2.73446 12.8442 2.66394 12.6667 2.66394C12.4891 2.66394 12.3189 2.73446 12.1933 2.86L8 7.06L3.80666 2.86C3.68113 2.73446 3.51086 2.66394 3.33333 2.66394C3.15579 2.66394 2.98553 2.73446 2.85999 2.86C2.73446 2.98554 2.66393 3.1558 2.66393 3.33333C2.66393 3.51087 2.73446 3.68113 2.85999 3.80667L7.06 8L2.85999 12.1933C2.79751 12.2553 2.74791 12.329 2.71407 12.4103C2.68022 12.4915 2.6628 12.5787 2.6628 12.6667C2.6628 12.7547 2.68022 12.8418 2.71407 12.9231C2.74791 13.0043 2.79751 13.078 2.85999 13.14C2.92197 13.2025 2.9957 13.2521 3.07694 13.2859C3.15818 13.3198 3.24532 13.3372 3.33333 13.3372C3.42134 13.3372 3.50847 13.3198 3.58971 13.2859C3.67095 13.2521 3.74469 13.2025 3.80666 13.14L8 8.94L12.1933 13.14C12.2553 13.2025 12.329 13.2521 12.4103 13.2859C12.4915 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8418 13.3198 12.923 13.2859C13.0043 13.2521 13.078 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.2859 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.2859 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.93999 8Z"
														fill="#8896AB"
													></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
						<div className="p-2 w-full">
							<button
								className="flex mx-auto text-green-50 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
