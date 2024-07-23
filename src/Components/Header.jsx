import React, { useEffect } from "react";
import netflixLogo from "../assets/logo/Netflix_Logo_PMS.png";
import userImg from "../assets/user/user-image.png";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleGptSearchView } from "../utils/redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constants/language";
import { changeLanguage } from "../utils/redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGptSearchPage = useSelector(store => store.gpt.showGptSearch)

  // Firebase auth api
  // This will check whether the user is logged in. if loggedin redirect to browse else to login page
  // 'onAuthStateChanged' is a kind of like an event listener.
  useEffect(() => {
    //  This event is triggered when a user is sign in, sign up or sign out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignout = async () => {
    try {
      await signOut(auth);
      // Navigate to login page is written in 'onAuthStateChanged' fn
    } catch (error) {
      //   console.log(error);
      navigate("/error");
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-screen px-10 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="h-24" src={netflixLogo} alt="netflix-logo" />
      {user && (
        <div className="flex gap-3 p-2 items-center">
          {isGptSearchPage && <select
            className="p-2 bg-gray-800  text-gray-50 m-2"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => {
              return (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              );
            })}
          </select>}
          <button
            className="py-2 px-4 m-2 text-white font-bold bg-purple-800 rounded-lg hover:bg-purple-900"
            onClick={handleGptSearchClick}
          >
           {isGptSearchPage?"Homepage":"GPT Search"} 
          </button>
          <img
            className="h-12 rounded-lg"
            src={user ? user.photoURL : userImg}
            alt="user-img"
          />
          <button onClick={handleSignout} className=" font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
