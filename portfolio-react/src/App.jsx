import './App.css';
import { useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  function handleClick() {
    alert("Hello Siddh 👋 Welcome to my Portfolio!");
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button
       onClick={() => setDarkMode(!darkMode)}
       className="toggle-btn"
       >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
       </button>

      {/* NAVBAR */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* HOME */}
      <section id="home">

       <h1 className="hero-text">Hi I'm Siddh</h1>
        <p>Web Developer & Learner</p>

      <img 
        src="/download.jpg"
        alt="profile"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "25px auto",
          border: "5px solid orange",
          boxShadow: "0 0 20px orange"
        }}
        />
      
        <button onClick={handleClick}>
          Click Me
        </button>

      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am Siddh, a web developer learning React and building modern websites.
        </p>
      </section>
      <a herf="/resume.pdf" download>
       <button className="resume-btn">
        download resume
       </button>
      </a>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>My Projects</h2>

        <div className="card">
          <h3>☕ Coffee Cafe Website</h3>
          <p>React + CSS modern café project</p>

          <a href="#" target="_blank">
            View Project
          </a>
        </div>

      </section>
      {/* Projects Section */}
<section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <h3>Coffee Time Cafe Website ☕</h3>

    <p>
      Modern responsive coffee cafe website made using React and CSS.
    </p>

    <a
      href="https://coffee-time-cafe.vercel.app"
      target="_blank"
    >
      Live Demo
    </a>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: siddhp1717@gmail.com</p>
      </section>

      <section id="contact" className="contact">
  <h2>Contact Me</h2>

  <p>Email: siddhp1717@gmail.com</p>

</section>

<div className="social-links">

  <a
    href="https://github.com/siddhp1717-pixel"
    target="_blank"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
  >
    LinkedIn
  </a>

</div>

    </div>
  );
}