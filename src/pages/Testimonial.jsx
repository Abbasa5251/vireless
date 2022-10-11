import React from "react";
import { Helmet } from "react-helmet";

function Testimonial() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<Helmet>
				<title>Vireless | Testimonials</title>
			</Helmet>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap">
					<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
						<div className="h-full text-center">
							<img
								alt="testimonial"
								className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
								src="https://dummyimage.com/302x302"
							/>
							<p className="leading-relaxed">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Explicabo recusandae ratione
								repellendus? Corporis aperiam impedit nihil nam
								quidem totam corrupti excepturi, perspiciatis
								id, nulla dolorem natus voluptatem facere illum
								accusantium.
							</p>
							<span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
							<h2 className="text-white font-semibold title-font tracking-wider text-lg">
								Abbas Anandwala
							</h2>
							<p className="text-gray-500 text-md">
								Software Engineer
							</p>
						</div>
					</div>
					<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
						<div className="h-full text-center">
							<img
								alt="testimonial"
								className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
								src="https://dummyimage.com/300x300"
							/>
							<p className="leading-relaxed">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quisquam officia voluptatem
								suscipit, quis perferendis error voluptatibus
								odit, adipisci delectus animi illum excepturi
								eum optio quos earum in praesentium laudantium.
							</p>
							<span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
							<h2 className="text-white font-semibold title-font tracking-wider text-lg">
								Shrenik Borana
							</h2>
							<p className="text-gray-500 text-md">
								Chartered Accountant
							</p>
						</div>
					</div>
					<div className="lg:w-1/3 lg:mb-0 p-4">
						<div className="h-full text-center">
							<img
								alt="testimonial"
								className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
								src="https://dummyimage.com/305x305"
							/>
							<p className="leading-relaxed">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Obcaecati porro architecto
								recusandae adipisci animi, explicabo asperiores
								nam modi molestiae facilis, nobis mollitia
								dolor, labore unde autem magnam nemo numquam
								eaque!
							</p>
							<span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
							<h2 className="text-white font-semibold title-font tracking-wider text-lg">
								Jainam Oswal
							</h2>
							<p className="text-gray-500 text-md">
								Entrepreneur
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
