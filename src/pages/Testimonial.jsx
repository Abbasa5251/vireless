import React from "react";
import { Helmet } from "react-helmet";
import CustomerReview from "../components/CustomerReview";

const CustomerReviews = [
	{
		name: "Abbas Anandwala",
		designation: "Software Engineer",
		comment:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consequuntur voluptates facere dolorum unde, atque, odio voluptatem eveniet id dolorem placeat iste sint porro dolores enim quibusdam iure recusandae assumenda",
		imgUrl: "",
	},
	{
		name: "Shrenik Borana",
		designation: "Chartered Accountant",
		comment:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consequuntur voluptates facere dolorum unde, atque, odio voluptatem eveniet id dolorem placeat iste sint porro dolores enim quibusdam iure recusandae assumenda",
		imgUrl: "",
	},
	{
		name: "Jainam Oswal",
		designation: "Entrepreneur",
		comment:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consequuntur voluptates facere dolorum unde, atque, odio voluptatem eveniet id dolorem placeat iste sint porro dolores enim quibusdam iure recusandae assumenda",
		imgUrl: "",
	},
];

function Testimonial() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<Helmet>
				<title>Vireless | Testimonials</title>
			</Helmet>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex justify-center flex-wrap">
					{CustomerReviews.map((review) => (
						<CustomerReview
							key={review.id}
							comment={review.comment}
							designation={review.designation}
							name={review.name}
							imgUrl={review.imgUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
