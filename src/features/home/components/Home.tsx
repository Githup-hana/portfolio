import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hi, I'm Hana</h1>
        <p>Your Fullstack Web Developer</p>
        <p>
          I'm passionate about building clean, efficient, and scalable web
          applications. Let's build something amazing together!
        </p>
        <div className="cta-buttons">
          <Link to="/about-me" className="cta-button button-common">
            Learn More About Me
          </Link>
          <Link to="/projects" className="cta-button button-common">
            Check Out My Projects
          </Link>
          <Link to="/skills" className="cta-button button-common">
            My Skills
          </Link>
        </div>
      </header>

      <section className="home-contact">
        <h2>Get In Touch</h2>
        <p>If you're interested in working with me, feel free to reach out!</p>
        <a href="mailto:hana.abrham@dci-student.org" className="contact-button button-common">
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default Home;
