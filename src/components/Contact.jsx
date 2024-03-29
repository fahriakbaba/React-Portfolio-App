import React from "react";
import "../styles/main.css";
import { AiFillInstagram } from "react-icons/ai";
// import { SiTwitter } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
// import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  const updatedHsitory = new Date().getFullYear();
  return (
    <footer id="contact" className="contact-container">
      <h3>Get in touch</h3>
      <div className="social-icon">
        <a
          href="https://www.instagram.com/fahriakbaba/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillInstagram className="icon" />
        </a>
        {/* <SiTwitter className="icon" /> */}
        <a
          href="https://tr.linkedin.com/in/fahri-akbaba-949b65b9"
          target={"_blank"}
          rel="noreferrer"
        >
          <ImLinkedin className="icon" />
        </a>
        {/* <BsFacebook className="icon" /> */}
        <a href="mailto: fahriakbaba@gmail.com">
          <MdEmail className="icon" />
        </a>
      </div>
      <p>Fahri Akbaba &copy; {updatedHsitory} || All Rights Reserved</p>
    </footer>
  );
}

export default Contact;
