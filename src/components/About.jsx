import React from "react";
import "../styles/main.css";
import { FcAbout } from "react-icons/fc";

function About() {
  return (
    <section id="about" className="about-container">
      <h2>
        About Fahri AKBABA <FcAbout className="about-icon" />{" "}
      </h2>
      <article>
        I am a Front-end Developer. I create successful websites that are fast,
        easy to use, and built with best practices. My main experience is in
        front-end development but I also have a passion for design.
      </article>
      <article>
        My clients have found that hiring me has saved them time and money, made
        it easier to grow their website alongside their business, and made for a
        product that is consistently of high quality.
      </article>
      <article>
        I use HTML, CSS,,Saas, Bootstrap, JavaScript and React to produce
        responsive websites and web apps that provide users the best and most
        appropriate experience suited to their device and browser.
      </article>
      <article>
        I write standards based code that is semantic, accessible, search-engine
        friendly, easy to maintain, cross browser compatible, and performant.
      </article>
      <article>
        <span style={{ fontWeight: 600 }}> My education: </span>
        <ul style={{ fontSize: ".8rem" }}>
          <li>Konak Anatolian High School 88.40/100 (2008)</li>
          <li>
            Trakya University - Physiotherapy and Rehabilitation 3.22/4.00
            (2009-2013)
          </li>
          <li>
            Dokuz Eylül University - Geriatric Rehabilitation M.Sc. 3.92/4.00
            (2014-2016)
          </li>
          <li>Anadolu University - Computer Programming (2021 - )</li>
        </ul>
      </article>
      <article>
        <span style={{ fontWeight: 600 }}> My courses: </span>
        <ul style={{ fontSize: ".8rem" }}>
          <li>
            Responsive Web Design{" "}
            <a
              href="https://www.freecodecamp.org/certification/fccb68ffce7-6e52-4dd2-a672-0f2f3c947088/responsive-web-design"
              target={"_blank"}
              rel="noreferrer"
            >
              freeCodeCamp
            </a>{" "}
            - May 2022
          </li>
          <li>
            Interactivity with JavaScript University of Michigan{" "}
            <a
              href="https://www.coursera.org/account/accomplishments/verify/SKMUDWVA6NCG"
              target={"_blank"}
              rel="noreferrer"
            >
              Coursera
            </a>{" "}
            - August 2021
          </li>
          <li>
            Sıfırdan İleri Seviye Modern JavaScript Dersler ES7+{" "}
            <a
              href="https://www.udemy.com/certificate/UC-f333633d-ced2-4fed-9b8f-e17ccf3bda3a/"
              target={"_blank"}
              rel="noreferrer"
            >
              Udemy
            </a>{" "}
            - August 2021
          </li>
          <li>JavaScript Orta Doğu Teknik Üniversitesi - July 2021</li>
          <li>
            Introduction to HTML5 University of Michigan{" "}
            <a
              href="https://www.coursera.org/account/accomplishments/verify/H5MFYGZMWVDY"
              target={"_blank"}
              rel="noreferrer"
            >
              Coursera
            </a>{" "}
            - June 2021
          </li>
          <li>
            HTML5-CSS3-JAVASCRİPT-JQUERY-BOOTSTRAP4{" "}
            <a
              href="https://www.udemy.com/certificate/UC-c1bbde4b-5633-4e51-9400-13f38fb065db/"
              target={"_blank"}
              rel="noreferrer"
            >
              Udemy
            </a>{" "}
            - May 2021
          </li>
          <li>
            Introduction to CSS3 University of Michigan{" "}
            <a
              href="https://www.coursera.org/account/accomplishments/verify/NDMTS7VH3GX5"
              target={"_blank"}
              rel="noreferrer"
            >
              Coursera
            </a>{" "}
            - May 2021
          </li>
          <li>
            Modern ReactJS{" "}
            <a
              href="https://www.udemy.com/certificate/UC-06c6bb3f-f419-44f1-838b-6da2fbaac352/"
              target={"_blank"}
              rel="noreferrer"
            >
              Udemy
            </a>{" "}
            - November 2021
          </li>
          <li>
          Sıfırdan React ve Context Api{" "}
            <a
              href="https://www.udemy.com/certificate/UC-37e49552-4217-4e36-b03f-f65f965d6fee/"
              target={"_blank"}
              rel="noreferrer"
            >
              Udemy
            </a>{" "}
            - October 2021
          </li>
        </ul>
      </article>
    </section>
  );
}

export default About;
