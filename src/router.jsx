import { Outlet, createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Navbar";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import TeamNav from "./TeamNav";

//takes in an array of routes and renders out in application

export const router = createBrowserRouter([
	//each object has many different properties but path and element are the most important
	{
		element: <NavLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/store", element: <Store /> },
			{ path: "/about", element: <About /> },
			{
				path: "/team",
				element: <TeamNavLayout />,
				children: [
					//when you want to directly match the path of the parent you can use the property index and the value true
					{ index: true, element: <Team /> },
					{ path: "joe", element: <TeamMember name="joe" /> },
					{ path: "sally", element: <TeamMember name="sally" /> },
				],
			},
		],
	},
]);

function NavLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
function TeamNavLayout() {
	return (
		<>
			<TeamNav />
			<Outlet context="Hi from outlet" />
		</>
	);
}
