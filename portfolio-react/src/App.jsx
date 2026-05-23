import './App.css';

export default function App() {

  function handleClick() {
    alert("Hello Siddh 👋 Welcome to my Portfolio!");
  }

  return (
    <div>

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

        <img
         src="/images/myphoto.jpg" alt="myphoto" className="profile"
          alt="Siddh"
          className="profile"
        />

        <h1>Hi, I'm Siddh 👋</h1>
        <p>Web Developer & Learner</p>

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

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: siddh@example.com</p>
      </section>

    </div>
  );
}