import "../styles/main.css";
import { FaRocket } from 'react-icons/fa';

function Service() {
  return (
    <section id="service" className="service-container">
      <h2 className="service-title">Skills <FaRocket className="service-icon" /></h2>
      <div>
        <h3>Frontend</h3>
        <p>HTML, CSS, SAAS, JavaScript (+ES6), ReactJS, React Router, Redux, Redux Toolkit, Bootstrap, JSON Server</p>
      </div>
      <div>
        <h3>General Knowledge</h3>
        <p>Git and Github</p>
      </div>
      <div>
        <h3>I'm currently learning...</h3>
        <p>ReactJs in depth and Vue JS</p>
      </div>
    </section>
  );
}

export default Service;
