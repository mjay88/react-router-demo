import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import teamMembers from "../teamMembers.json";
export default function TeamMember({ name }) {
	// const { memberId } = useParams();
	// const member = teamMembers.find((m) => m.id === memberId);
	const member = useLoaderData();
	console.log(member, "member");
	return (
		<>
			<h1>Team Member - {member.name}</h1>
			<Link to="..">.. From {member.name}</Link>
		</>
	);
}
