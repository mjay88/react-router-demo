import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Team() {
	const value = useOutletContext();

	return <div>Team. Context = {value}</div>;
}
