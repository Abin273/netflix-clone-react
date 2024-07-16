import React from "react";
import netflixLogo from "../assets/logo/Netflix_Logo_PMS.png";
import userImg from "../assets/user/user-image.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store)=> store.user)
	const handleSignout = async () => {
		try {
			await signOut(auth);
            navigate("/")
		} catch (error) {
            console.log(error);
        }
	};

	return (
		<div className="fixed w-screen px-10 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="h-24" src={netflixLogo} alt="netflix-logo" />
			{user&&<div className="flex gap-3 p-2 items-center">
				<img className="h-12 rounded-lg" src={user?user.photoURL:userImg} alt="user-img" />
				<button
					onClick={handleSignout}
					className=" font-bold text-white"
				>
					(Sign out)
				</button>
			</div>}
		</div>
	);
};

export default Header;
