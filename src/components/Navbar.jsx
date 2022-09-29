import "../styles/main.css";
import { BsToggles } from "react-icons/bs";
import React from "react";

function Navbar() {
  const [isShown, setIsShown] = React.useState(false);
  const toggleIcon = () => {
    setIsShown((prevState) => !prevState);
  };

  /* 
  -- when responsive navbar li elemant is clicked. Using Vanilla JS --
    document.querySelectorAll("li").forEach(item => item.addEventListener("click", () => {
    setIsShown(false);
  }));
  */

  const handleClick = () => {
    setIsShown(false);
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
          <a href="#home" onClick={handleClick}>
            home
          </a>
        </li>
        <li>
          <a href="#service" onClick={handleClick}>
            skills
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>
            projects
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>
            about
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick}>
            contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
