import React from "react";
import "../styles/main.css";

function About() {
  return (
    <section id="about" className="about-container">
      <h2>About Fahri AKBABA</h2>
      <p>
        I am a Front-end Developer. I create successful websites that are fast,
        easy to use, and built with best practices. My main experience is in
        front-end development but I also have a passion for design.
      </p>
      <p>
        My clients have found that hiring me has saved them time and money, made
        it easier to grow their website alongside their business, and made for a
        product that is consistently of high quality.
      </p>
      <p>
        I use HTML, CSS,,Saas, Bootstrap, JavaScript and React to produce
        responsive websites and web apps that provide users the best and most
        appropriate experience suited to their device and browser.
      </p>
      <p>
        I write standards based code that is semantic, accessible, search-engine
        friendly, easy to maintain, cross browser compatible, and performant.
      </p>
      <p>
        <span style={{ fontWeight: 600 }}> My education: </span>
        <ul>
          <li>Konak Anatolian High School - 2008</li>
          <li>
            Trakya University - Physiotherapy and Rehabilitation (2009-2013)
          </li>
          <li>
            Dokuz Eylül University - Geriatric Rehabilitation M.Sc. (2014-2016)
          </li>
          <li>Anadolu University - Computer Programming (2021 - )</li>
        </ul>
      </p>
    </section>
  );
}

export default About;
