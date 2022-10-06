import "../styles/main.css";
import { MdLegendToggle } from "react-icons/md";
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

  const links = [
    { linkName: "home", href: "#home" },
    { linkName: "skills", href: "#service" },
    { linkName: "projects", href: "#projects" },
    { linkName: "about", href: "#about" },
    { linkName: "contact", href: "#contact" },
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <span>fahri</span>
        akbaba
      </div>
      <div className="toggle-icon">
        <MdLegendToggle onClick={toggleIcon} />
      </div>
      <ul className={`${isShown ? "show" : "hidden"}`}>
        {links.map((link, i) => (
          <li key={i}>
            <a href={`${link.href}`} onClick={handleClick}>
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
