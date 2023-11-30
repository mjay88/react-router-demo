import React from "react";
import { Link } from "react-router-dom";

export default function TeamMember({ name }) {
	return (
		<>
			<h1>Team Member - {name}</h1>
			<Link to="..">.. From Sally</Link>
		</>
	);
}
