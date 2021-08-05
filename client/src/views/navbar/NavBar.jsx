import { NavLink, useHistory } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { FaFileExcel } from "react-icons/fa";
import { signOut } from "../../services/user";
// import Layout from "../../components/Layout/Layout";

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
  const history = useHistory();
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = (e) => {
      setWindowDimension(window.innerWidth);
      // if (windowDimension <= 700) {
      //   setHamburger(true);
      //   setVisible(true);
      // } else {
      //   setHamburger(false);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobile = windowDimension <= 700;

  const handleSignOut = () => {
    signOut();
    props.setUser(null);
    history.push("/");
    console.log("signed out");
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  return (
    <nav>
      {isMobile ? (
        <div className="mobileClass">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            className="bars"
            alt="hamburger"
            onClick={handleClick}
          />
          <div
            className="nav-items"
            style={{ display: hamburger && visible ? "flex" : "none" }}
          >
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="desktopClass">
            <div className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">
              <NavLink to="/">Homepage</NavLink>
              <NavLink to="/sign-in">Sign In</NavLink>
              <NavLink to="/sign-up">Sign Up</NavLink>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
