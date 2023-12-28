import {
	Navigate,
	Outlet,
	createBrowserRouter,
	redirect,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Navbar";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import TeamNav from "./TeamNav";
import NewTeamMember from "./pages/NewTeamMember";

//takes in an array of routes and renders out in application
export const router = createBrowserRouter([
	//each object has many different properties but path and element are the most important
	{
		//NavLayout route has no path at all, all we are doing is specifying an element
		element: <NavLayout />,
		children: [
			// { path: "*", element: <h1>404 route does not exist</h1> },
			{ path: "*", element: <Navigate to="/" /> },
			{ path: "/", element: <Home /> },
			//* is used for "wild card" routing
			{ path: "/test/*", element: <h1>Test</h1> },
			{ path: "/store", element: <Store /> },
			{ path: "/about", element: <About /> },
			{
				path: "/team",
				element: <TeamNavLayout />,
				// {essentially use a loader instead of a useEffect inside of router, then use useLoaderData hook inside the component that we want to use the data we are fetching here. Loader automatically converts json data for us}
				loader: ({ request: { signal } }) => {
					return fetch("https://jsonplaceholder.typicode.com/users", {
						signal,
					});
				},
				children: [
					//when you want to directly match the path of the parent you can use the property index and the value true
					{ index: true, element: <Team /> },
					//Anything you prefix with a colon is a dynamic route.What ever you call the dynamic route, ie memberId, is going to be what you destructure from useParams when passing the info to a component.
					{
						path: ":memberId",
						loader: async ({ params, request: { signal } }) => {
							const res = await fetch(
								`https://jsonplaceholder.typicode.com/users/${params.memberId}`,
								{ signal }
							);
							//this is returning the data we access in TeamMember.jsx from useLoaderData()
							if (res.status === 200) return res.json();
							throw redirect("/team");
						},
						element: <TeamMember />,
					},
					//A hardcoded path of new is more specific than a dynamic route
					{ path: "new", element: <NewTeamMember /> },
				],
			},
		],
	},
]);

function NavLayout() {
	const { state } = useNavigation();

	return (
		<>
			<Navbar />
			{/**Outlet renders whatever child route is matched */}
			{state === "loading" ? <h1>Loading</h1> : <Outlet />}
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
