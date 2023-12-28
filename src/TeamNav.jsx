import React from "react";
import { Link, useLoaderData } from "react-router-dom";
export default function TeamNav() {
	const teamMembers = useLoaderData();
	return (
		<nav>
			<ul>
				{teamMembers.map((member) => (
					<li key={member.id}>
						<Link to={member.id.toString()}>Team - {member.name}</Link>
					</li>
				))}

				<li>
					<Link to="new">New Member</Link>
				</li>

				{/* <li>
					{Link adds a class of active to whatever route your on }
					<Link to="joe">Team - Joe</Link>
				</li>
				<li>
					<Link to="sally">Team - Sally</Link>
				</li>
				<li>
					<Link to="..">.. Route</Link>
				</li>
				<li>
				current url "." <-single dot
					<Link to="." relative="path" end>
						. Path
					</Link>
				</li> */}
			</ul>
		</nav>
	);
}
