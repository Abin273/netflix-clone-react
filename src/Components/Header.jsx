import React from "react";
import netflixLogo from "../assets/logo/Netflix_Logo_PMS.png";

const Header = () => {
	return (
		<div className="fixed px-10 py-5 bg-gradient-to-b from-black z-10">
			<img className="h-24" src={netflixLogo} alt="netflix-logo" />
		</div>
	);
};

export default Header;
