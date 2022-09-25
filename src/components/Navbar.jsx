import "../styles/main.css";
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
        <span>fahri</span>
        akbaba
      </div>
      <div className="toggle-icon">
        <BsToggles onClick={toggleIcon} />
      </div>
      <ul className={`${isShown ? "show" : "hidden"}`}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#service">service</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
