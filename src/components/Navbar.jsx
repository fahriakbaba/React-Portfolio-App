import "../styles/main.css";
import { CgWebsite } from "react-icons/cg";
import { BsToggles } from "react-icons/bs";
import React from "react";

function Navbar() {
  const [isShown, setIsShown] = React.useState(false);
  const toggleIcon = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <CgWebsite className="navbar-icon" />
        website
      </div>
      <div className="toggle-icon">
        <BsToggles onClick={toggleIcon} />
      </div>
      <ul className={`${isShown ? "show" : "hidden"}`}>
        <li>
          <a href="/#">home</a>
        </li>
        <li>
          <a href="/#">about</a>
        </li>
        <li>
          <a href="/#">service</a>
        </li>
        <li>
          <a href="/#">portfolio</a>
        </li>
        <li>
          <a href="/#">blog</a>
        </li>
        <li>
          <a href="/#">contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
