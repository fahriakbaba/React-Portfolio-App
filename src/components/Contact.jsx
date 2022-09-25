import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <footer id="contact" className="contact-container">
      <h3>Get in touch</h3>
      <div className="social-icon">
        <AiFillInstagram />
        <SiTwitter />
        <ImLinkedin />
        <BsFacebook />
        <MdEmail />
      </div>
      <p>Fahri Akbaba &copy; 2022 || All Rights Reserved</p>
    </footer>
  );
}

export default Contact;
