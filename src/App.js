import React, { useEffect } from "react";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/redux/userSlice";

function App() {
	const dispatch = useDispatch();

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	// Firebase auth api
	// This is a kind of like an event listener.
	useEffect(() => {
		//  This event is triggered when a user is sign in, sign up or sign out
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName, photoURL } = user; 
				console.log(user);
				dispatch(addUser({ uid, email, displayName, photoURL }));
		
			} else {
				// User is signed out
				dispatch(removeUser());
			}
		});
	}, [dispatch]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
