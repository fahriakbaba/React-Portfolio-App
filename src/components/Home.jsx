import React from "react";



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
        <a href="mailto: fahriakbaba@gmail.com"> <button type="button">Get in touch</button> </a>
      </div>
      <div className="home-image">
        <img src="https://avatars.githubusercontent.com/u/96592272?v=4" alt="web" />
      </div>
    </section>
  );
}

export default Home;
