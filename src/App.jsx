import "./App.css";

function App() {
const skills = [
"React",
"Node.js",
"Java",
"Python",
"Git & GitHub",
];

const projects = [
{
title: "Food Website",
desc: "Responsive food ordering and restaurant showcase website.",
link: "https://vemullapallivedanth.github.io/food/",
},
{
title: "iBomma Clone",
desc: "Movie browsing website inspired by iBomma.",
link: "https://vemullapallivedanth.github.io/Ibomma/",
},
{
title: "AI Learning Management System",
desc: "Smart platform for personalized learning using AI.",
link: "#",
},
];

return ( <div className="app"> <section className="hero"> <div className="hero-content"> <h1>
Hi, I'm <span>Vedanth</span> </h1>

```
      <h2>Developer • Reader </h2>

      <p>
        Passionate about technology, leadership,
        problem-solving, and building impactful projects.
      </p>

      <div className="buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a href="#contact">
          <button className="secondary">Contact Me</button>
        </a>
      </div>
    </div>
  </section>

  <section className="section">
    <h2>About Me</h2>

    <p>
      I am Vedanth, a technology enthusiast who enjoys building
      web applications, participating in MUNs, reading novels,
      and exploring modern technologies.
    </p>
  </section>

  <section className="section">
    <h2>Skills</h2>

    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          {skill}
        </div>
      ))}
    </div>
  </section>

  <section className="section" id="projects">
    <h2>Projects</h2>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>

          <p>{project.desc}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>

  <section className="section">
    <h2>Achievements</h2>

    <div className="achievement-box">
      🏆 Active MUN Participant
    </div>

    <div className="achievement-box">
      📚 Passionate Reader
    </div>

    <div className="achievement-box">
      💻 Web Developer & Problem Solver
    </div>
  </section>

  <section className="section contact" id="contact">
    <h2>Contact Me</h2>

    <p>Email: vemullapallivedanth@gmail.com</p>

    <div className="socials">
      <button>GitHub</button>
      <button>LinkedIn</button>
      <button>Instagram</button>
    </div>
  </section>

  <footer>
    © 2026 Vedanth Portfolio | Built with React
  </footer>
</div>


);
}

export default App;
