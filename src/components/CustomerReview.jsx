import React from "react";

function CustomerReview({ imgUrl, comment, name, designation }) {
	return (
		<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
			<div className="h-full text-center">
				<img
					alt="testimonial"
					className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
					src="https://dummyimage.com/302x302"
				/>
				<p className="leading-relaxed">{comment}</p>
				<span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
				<h2 className="text-white font-semibold title-font tracking-wider text-lg">
					{name}
				</h2>
				<p className="text-gray-500 text-md">{designation}</p>
			</div>
		</div>
	);
}

export default CustomerReview;
