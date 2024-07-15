import React, { useState } from "react";
import backgroundImg from "../assets/background/login-banner.jpg";

const Login = () => {
	const [isSigninForm, setIsSigninForm] = useState(true);
	const toggleSigninForm = () => {
		setIsSigninForm(!isSigninForm);
	};
	return (
		<div className="bg-yellow-200">
			<div className="absolute ">
				<img className="" src={backgroundImg} alt="netflix-logo" />
			</div>
			<form
				action=""
				className="absolute flex flex-col p-12 bg-black bg-opacity-75 w-3/12 mt-32 mx-auto right-0 left-0 text-white rounded-md"
			>
				<h1 className="font-bold text-3xl py-4">
					{isSigninForm ? "Sign In" : "Sign Up"}
				</h1>
                {!isSigninForm && <input
					type="text"
					name="name"
					id="name"
					placeholder="Full name"
					className="p-6 my-2 bg-inherit rounded-md"
				/>}
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Email"
					className="p-6 my-2 bg-inherit rounded-md"
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					className="p-6 my-2 bg-inherit rounded-md"
				/>
				<button className="p-4 my-6 bg-red-700 font-bold rounded-md">
                {isSigninForm ? "Sign In" : "Sign Up"}
				</button>
				<p
					className="text-lg text-gray-200 py-4 cursor-pointer"
					onClick={toggleSigninForm}
				>
					{isSigninForm ? <>New to Netflix? <b>Sign up now</b></>: <>Already a user? <b>Sign in now</b></>}.
				</p>
			</form>
		</div>
	);
};

export default Login;
