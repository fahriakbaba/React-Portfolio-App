import React from "react";
import webImage from "../web.jpg";


function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-main">
        <h1>Hi, I’m Fahri!</h1>
        <p>
          I’m a frontend developer focused on learning new technologies and
          building web applications. I’m detail-oriented and passionate about
          problem-solving.
        </p>
        <button type="button">Get in touch</button>
      </div>
      <div className="home-image">
        <img src={webImage} alt="web" />
      </div>
    </section>
  );
}

export default Home;
