import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					{/**NavLink changes how you can set the className properties because now you can pass a function which takes in different props, isActive and is pending, which allows you to determine if this is the active link */}
					<NavLink to="/" end>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/store">Store</NavLink>
				</li>
				<li>
					<NavLink to="/team" end>
						Team
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
