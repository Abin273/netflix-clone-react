import React, { useRef, useState } from "react";
import backgroundImg from "../../assets/background/login-banner.jpg";
import { validateFormData } from "../../utils/validateForm";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice";
import { PHOTO_URL } from "../../utils/Constants/urls";

const Login = () => {
	const [isSigninForm, setIsSigninForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSigninForm = () => {
		setIsSigninForm(!isSigninForm);
	};
	// To get the valur of email and password we can either use state variables or useRef hook.
	const handleButtonClick = async (event) => {
		event.preventDefault();

		const message = validateFormData(
			email.current.value,
			password.current.value,
			isSigninForm,
			name?.current?.value
		);
		setErrorMessage(message);

		if (message) return;

		// signup/Signin
		try {
			let user;
			setLoading(true);
			if (!isSigninForm) {
				// signup Logic

				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email.current.value,
					password.current.value
				);

				user = userCredential.user;
				await updateProfile(user, {
					displayName: name?.current?.value,
					photoURL: PHOTO_URL,
				});
                // auth.currentUser will contail most recent updated data of a user
				const { uid, displayName, photoURL } = auth.currentUser;
				dispatch(
					addUser({
						uid,
						email: email.current.value,
						displayName,
						photoURL,
					})
				);
			} else {
				// signin Logic
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email.current.value,
					password.current.value
				);
				user = userCredential.user;
			}
			email.current.value = "";
			password.current.value = "";
			// redux user setting logic is written in Header.jsx file

		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			setErrorMessage(errorCode + " : " + errorMessage);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="bg-yellow-200">
			<div className="absolute">
				<img className="h-screen md:h-full object-cover" src={backgroundImg} alt="netflix-logo" />
			</div>
			<form
				action=""
				className="absolute flex flex-col p-12 bg-black bg-opacity-75 w-10/12 md:w-3/12 mt-32 mx-auto right-0 left-0 text-white rounded-md"
			>
				<h1 className="font-bold text-3xl py-4">
					{isSigninForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSigninForm && (
					<input
						type="text"
						name="name"
						ref={name}
						placeholder="Full name"
						className="p-6 my-2 bg-inherit rounded-md"
					/>
				)}
				<input
					type="text"
					name="email"
					ref={email}
					placeholder="Email"
					className="p-6 my-2 bg-inherit rounded-md"
				/>
				<input
					type="password"
					name="password"
					ref={password}
					placeholder="Password"
					className="p-6 my-2 bg-inherit rounded-md"
				/>
				<p className="text-red-700 font-bold text-md">{errorMessage}</p>
				<button
					className={`p-4 my-6 bg-red-700 font-bold rounded-md ${
						loading
							? "bg-red-500 cursor-not-allowed"
							: "bg-red-700 hover:bg-red-600"
					}`}
					onClick={handleButtonClick}
				>
					{loading
						? "Loading...."
						: isSigninForm
						? "Sign In"
						: "Sign Up"}
				</button>
				<p
					className="text-lg text-gray-200 py-4 cursor-pointer"
					onClick={toggleSigninForm}
				>
					{isSigninForm ? (
						<>
							New to Netflix? <b>Sign up now</b>
						</>
					) : (
						<>
							Already a user? <b>Sign in now</b>
						</>
					)}
					.
				</p>
			</form>
		</div>
	);
};

export default Login;
