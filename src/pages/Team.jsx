import React from "react";
import { Helmet } from "react-helmet";
import TeamMember from "../components/TeamMember";

const TeamMembers = [
	{
		id: 1,
		name: "Vrushabh Modi",
		designation: "Founder",
		info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam excepturi culpa necessitatibus! Qui natus tenetur dolorem, repudiandae accusamus odio. Perferendis corporis numquam debitis eos quasi pariatur error, architecto nostrum.",
		instaUrl: "",
		fbUrl: "",
	},
	{
		id: 2,
		name: "Siddharth Mutha",
		designation: "Co-Founder",
		info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam excepturi culpa necessitatibus! Qui natus tenetur dolorem, repudiandae accusamus odio. Perferendis corporis numquam debitis eos quasi pariatur error, architecto nostrum.",
		instaUrl: "",
		fbUrl: "",
	},
];

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
				<div className="flex justify-center flex-wrap">
					{TeamMembers.map((member) => (
						<TeamMember
							key={member.id}
							name={member.name}
							designation={member.designation}
							info={member.info}
							fbUrl={member.fbUrl}
							instaUrl={member.instaUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Team;
