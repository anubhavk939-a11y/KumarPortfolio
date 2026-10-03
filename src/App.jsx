import React, { useEffect, useState } from 'react'
import projecthubImg from './assets/projecthub.png'
import './App.css'

function App() {
  const [githubProjects, setGithubProjects] = useState([]);

useEffect(() => {
  const fetchGithubProjects = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/anubhavk939-a11y/repos?sort=updated&per_page=100"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories");
      }

      const data = await response.json();

      const projects = data.filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          repo.name.toLowerCase() !== "projecthub"
      );

      setGithubProjects(projects);
    } catch (error) {
      console.error("GitHub projects fetch error:", error);
    }
  };

  fetchGithubProjects();
}, []);
useEffect(() => {
  const githubProjects = document.querySelectorAll(".githubProjectReveal");

  if (!githubProjects.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showGithubProject");
        } else {
          entry.target.classList.remove("showGithubProject");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  githubProjects.forEach((project) => observer.observe(project));

  return () => observer.disconnect();
}, [githubProjects]);
  useEffect(() => {
  const cards = document.querySelectorAll(".revealSkill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("showSkill");
  } else {
    entry.target.classList.remove("showSkill");
  }
});
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const skillsIntro = document.querySelector(".skillsIntroReveal");

  if (!skillsIntro) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showSkillsIntro");
        } else {
          entry.target.classList.remove("showSkillsIntro");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(skillsIntro);

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const aboutElements = document.querySelectorAll(
    ".aboutTitle, .aboutReveal"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aboutVisible");
        } else {
          entry.target.classList.remove("aboutVisible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  aboutElements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const projectImage = document.querySelector(".projectReveal");

  if (!projectImage) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("projectVisible");
        } else {
          entry.target.classList.remove("projectVisible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  observer.observe(projectImage);

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const projectContent = document.querySelectorAll(
    ".projectContentReveal"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("projectContentVisible");
        } else {
          entry.target.classList.remove("projectContentVisible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  projectContent.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const comingSoon = document.querySelector(".projectComingSoon");

  if (!comingSoon) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("comingSoonVisible");
        } else {
          entry.target.classList.remove("comingSoonVisible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(comingSoon);

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("navbarScrolled");
    } else {
      navbar.classList.remove("navbarScrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navLinks a");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("activeNav");

            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("activeNav");
            }
          });
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const contactElements = document.querySelectorAll(
    ".contactTitle, .contactDescription, .contactReveal"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("contactVisible");
        } else {
          entry.target.classList.remove("contactVisible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  contactElements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const learningCards = document.querySelectorAll(".learningReveal");

  if (!learningCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showLearning");
        } else {
          entry.target.classList.remove("showLearning");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  learningCards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("lightTheme");
  }
}, []);
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key.toLowerCase() === "k") {
      document.body.classList.add("developerMode");

      setTimeout(() => {
        document.body.classList.remove("developerMode");
      }, 1200);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
useEffect(() => {
  const certifications = document.querySelectorAll(
    ".certificationReveal"
  );

  if (!certifications.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showCertification");
        } else {
          entry.target.classList.remove("showCertification");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  certifications.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">KA<span>.</span></div>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        <a
  href="https://www.linkedin.com/in/kumar-anubhava/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn ↗
</a>
        </div>
      
        <button
  className="themeToggle"
  onClick={() => {
    document.body.classList.toggle("lightTheme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("lightTheme")
        ? "light"
        : "dark"
    );
  }}
  aria-label="Toggle theme"
>
  ☼
</button>

        <a href="#contact" className="navButton">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroGlow"></div>

        <div className="heroContent">
          <p className="eyebrow heroReveal heroDelay1">COMPUTER SCIENCE • AI & DATA SCIENCE</p>

          <h1 className="heroReveal heroDelay2">
            Hi, I'm <span>Kumar Anubhava.</span>
            <br />
            I build real things with code.
          </h1>

         <p className="heroText heroReveal heroDelay3">
           A Computer Science student passionate about Python, AI/ML, and building
           practical software products.
          </p>
          <div className="heroButtons heroReveal heroDelay4">
            <a href="#projects" className="primaryButton">
              View My Work →
            </a>

            <a href="#contact" className="secondaryButton">
              Contact Me
            </a>
          </div>
          <div className="socialLinks">
  <a
    href="https://github.com/anubhavk939-a11y"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/kumar-anubhava/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a href="mailto:anubhavk939@gmail.com">
    Email ↗
  </a>
</div>

          <div className="heroStats">
            <div>
              <strong>Python</strong>
              <span>Core Focus</span>
            </div>

            <div>
              <strong>AI / ML</strong>
              <span>Learning & Building</span>
            </div>

            <div>
              <strong>ProjectHub</strong>
              <span>Live Product</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="sectionLabel">01 — ABOUT ME</p>
        <p className="aboutText aboutReveal"></p>
        <p className="aboutText aboutReveal"></p>
        <p className="aboutText aboutReveal"></p>

        <div className="aboutGrid">
          <div>
            <h2 className="aboutTitle">
             Learning by <span>building.</span>
           </h2>
          </div>

          <div>
            <p>
              I'm a Computer Science & Engineering student specializing
              in Artificial Intelligence and Data Science at KL University.
            </p>

            <p>
              I enjoy turning ideas into working products and learning
              new technologies through real-world projects.
            </p>

            <p>
              My current focus is Python, AI/ML, data science and
              full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section id="skills" className="section skillsSection">
  <p className="sectionLabel">02 — SKILLS</p>

  <div className="skillsIntro skillsIntroReveal">
    <h2>
      What I <span>build with.</span>
    </h2>

    <p>
      Technologies I use, explore and continue to build with.
    </p>
  </div>

  <div className="techMarquee">
    <div className="techTrack">
      <span>PYTHON</span>
      <b>•</b>
      <span>JAVASCRIPT</span>
      <b>•</b>
      <span>REACT</span>
      <b>•</b>
      <span>NODE.JS</span>
      <b>•</b>
      <span>EXPRESS</span>
      <b>•</b>
      <span>POSTGRESQL</span>
      <b>•</b>
      <span>PYTHON</span>
      <b>•</b>
      <span>JAVASCRIPT</span>
      <b>•</b>
      <span>REACT</span>
      <b>•</b>
      <span>NODE.JS</span>
      <b>•</b>
      <span>EXPRESS</span>
      <b>•</b>
      <span>POSTGRESQL</span>
      <b>•</b>
    </div>
  </div>

  <div className="techMarquee reverse">
    <div className="techTrack">
      <span>AI / ML</span>
      <b>•</b>
      <span>DATA SCIENCE</span>
      <b>•</b>
      <span>PRISMA</span>
      <b>•</b>
      <span>GIT</span>
      <b>•</b>
      <span>GITHUB</span>
      <b>•</b>
      <span>REST API</span>
      <b>•</b>
      <span>AI / ML</span>
      <b>•</b>
      <span>DATA SCIENCE</span>
      <b>•</b>
      <span>PRISMA</span>
      <b>•</b>
      <span>GIT</span>
      <b>•</b>
      <span>GITHUB</span>
      <b>•</b>
      <span>REST API</span>
      <b>•</b>
    </div>
  </div>

  <div className="skillCards">
    <div className="skillCard featuredSkill revealSkill">
      <span className="skillNumber">01</span>
      <h3>Python</h3>
      <p>
        My strongest programming language, used for development,
        automation, AI and data-focused projects.
      </p>
    </div>

    <div className="skillCard revealSkill">
      <span className="skillNumber">02</span>
      <h3>AI & Machine Learning</h3>
      <p>
        Exploring machine learning, generative AI and building
        intelligent applications with Python.
      </p>
    </div>

    <div className="skillCard revealSkill">
      <span className="skillNumber">03</span>
      <h3>Web Development</h3>
      <p>
        Building full-stack projects while developing my skills
        in React, JavaScript, Node.js and modern web technologies.
      </p>
    </div>

    <div className="skillCard revealSkill">
      <span className="skillNumber">04</span>
      <h3>Data Science</h3>
      <p>
        Learning statistics, data analysis and machine learning
        through academic work and practical projects.
      </p>
    </div>
  </div>
</section>
{/* CURRENTLY LEARNING */}
<section className="section learningSection">
  <p className="sectionLabel">03 — CURRENTLY LEARNING</p>

  <div className="learningIntro">
    <h2>
      Always <span>learning.</span>
    </h2>

    <p>
      Technologies and concepts I'm currently exploring,
      practicing and building with.
    </p>
  </div>

  <div className="learningGrid">
    <div className="learningCard learningReveal">
      <span>01</span>
      <h3>Python</h3>
      <p>Building projects and strengthening my programming skills.</p>
      <small>BUILDING</small>
    </div>

  <div className="learningCard learningReveal">
      <span>02</span>
      <h3>Java</h3>
      <p>Developing object-oriented programming and problem-solving skills.</p>
      <small>LEARNING</small>
    </div>

  <div className="learningCard learningReveal">
      <span>03</span>
      <h3>HTML</h3>
      <p>Creating structured and responsive web interfaces.</p>
      <small>BUILDING</small>
    </div>

    <div className="learningCard learningReveal">
      <span>04</span>
      <h3>AI & ML</h3>
      <p>Exploring machine learning concepts and intelligent applications.</p>
      <small>EXPLORING</small>
    </div>

    <div className="learningCard learningReveal">
      <span>05</span>
      <h3>Full Stack Development</h3>
      <p>Building complete applications across frontend and backend.</p>
      <small>BUILDING</small>
    </div>

    <div className="learningCard learningReveal">
      <span>06</span>
      <h3>Data Science</h3>
      <p>Learning data analysis, statistics and practical data workflows.</p>
      <small>EXPLORING</small>
    </div>

    <div className="learningCard learningReveal">
      <span>07</span>
      <h3>Data Structures</h3>
      <p>Strengthening algorithms, problem-solving and core DSA concepts.</p>
      <small>LEARNING</small>
    </div>
  </div>
</section>
{/* CERTIFICATIONS */}
<section id="certifications" className="section certificationsSection">
  <p className="sectionLabel">04 — CERTIFICATIONS</p>

  <div className="certificationsIntro">
    <h2>
      Learning I've <span>completed.</span>
    </h2>

    <p>
      Certifications and workshops that have contributed to my
      learning journey in AI, Python and technology.
    </p>
  </div>

  <div className="certificationsGrid">

    <article className="certificationCard certificationReveal">
      <span className="certNumber">01</span>

      <div className="certContent">
        <h3>AI Foundation Course</h3>
        <p>AI Classroom · Powered by JioPC · Designed by Jio Institute</p>
      </div>

      <span className="certStatus">COMPLETED</span>
    </article>

    <article className="certificationCard certificationReveal">
      <span className="certNumber">02</span>

      <div className="certContent">
        <h3>Introduction to Artificial Intelligence</h3>
        <p>Simplilearn SkillUp · 6 June 2026</p>
      </div>

      <span className="certStatus">COMPLETED</span>
    </article>

    <article className="certificationCard certificationReveal">
      <span className="certNumber">03</span>

      <div className="certContent">
        <h3>Generative AI Workshop</h3>
        <p>GrowthSchool</p>
      </div>

      <span className="certStatus">COMPLETED</span>
    </article>

    <article className="certificationCard certificationReveal">
      <span className="certNumber">04</span>

      <div className="certContent">
        <h3>Python Course for Beginners</h3>
        <p>Scaler Topics · Mastering the Essentials of Python</p>
      </div>

      <span className="certStatus">COMPLETED</span>
    </article>
    <article className="certificationCard certificationReveal">
  <span className="certNumber">05</span>

  <div className="certContent">
    <h3>Agentic AI Boot Camp</h3>
    <p>
      KLGUG · KL University · 24-hour intensive AI boot camp ·
      21–22 February 2026
    </p>
  </div>

  <span className="certStatus">PARTICIPATED</span>
</article>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section projectsSection">
        <p className="sectionLabel">05 — PROJECTS</p>

        <div className="sectionHeadingRow">
          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A selection of projects from my learning and
            development journey.
          </p>
        </div>

        {/* PROJECTHUB */}
        <article className="projectCard projectFeatured">

  <div className="projectTop">
    <span className="projectTag">FEATURED PROJECT</span>
    <span className="projectYear">2026</span>
  </div>

  <img
  src={projecthubImg}
  alt="ProjectHub website preview"
  className="projectImage projectReveal"
/>

  <div className="projectInfo projectInfoReveal">
   <h3 className="projectContentReveal">ProjectHub</h3>

    <p className="projectContentReveal">
      A student collaboration platform where students can
      discover projects, find teammates, apply to projects
      and collaborate with their teams.
    </p>

    <div className="techStack projectContentReveal">
      <span>React</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>PostgreSQL</span>
      <span>Prisma</span>
    
    </div>

    <div className="projectButtons projectContentReveal">
      <a
        href="https://projecthub-ashy.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Live Website ↗
      </a>

      <a
        href="https://github.com/anubhavk939-a11y/ProjectHub"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </div>

</article>
{/* GITHUB PROJECTS */}
{githubProjects.length > 0 && (
  <div className="githubProjects">
    {githubProjects.map((repo) => (
      <article className="githubProjectCard githubProjectReveal" key={repo.id}>
        <div className="githubProjectTop">
          <span>GITHUB PROJECT</span>
          <span>↗</span>
        </div>

        <h3>{repo.name.replace(/-/g, " ")}</h3>

        <p>
          {repo.description ||
            "A project built as part of my learning and development journey."}
        </p>

        <div className="githubProjectMeta">
          {repo.language && <span>{repo.language}</span>}
          <span>★ {repo.stargazers_count}</span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="githubProjectButton"
        >
          View on GitHub ↗
        </a>
      </article>
    ))}
  </div>
)}
<div className="projectComingSoon">
  <span>MORE PROJECTS COMING SOON</span>
  <p>
    I'm continuously building, experimenting and adding
    new projects to my portfolio.
  </p>
</div>
        

        
      </section>

      {/* CONTACT */}
<section id="contact" className="contactSection">
  <p className="sectionLabel">06 — CONTACT</p>

  <h2
     className="contactTitle">
  Let's build something <span>interesting.</span>
  </h2>

  <p
     className="contactDescription">
  I'm always open to learning, collaborating and working
  on interesting ideas.
  </p>

  <div className="contactLinks contactReveal">
    <a
      href="mailto:anubhavk939@gmail.com"
      className="contactButton"
    >
      Email Me ↗
    </a>

    <a
      href="https://github.com/anubhavk939-a11y"
      target="_blank"
      rel="noreferrer"
      className="contactLink"
    >
      GitHub ↗
    </a>

    <a
  href="https://www.linkedin.com/in/kumar-anubhava/"
  target="_blank"
  rel="noreferrer"
  className="contactLink"
>
  LinkedIn ↗
</a>
    <a
  href="https://www.instagram.com/k.anubhavv/"
  target="_blank"
  rel="noreferrer"
  className="contactLink"
>
  Instagram ↗
</a>
  </div>
</section>

      {/* FOOTER */}
<footer>
  {githubProjects.length === 0 && (
  <div className="projectComingSoon">
    <span>MORE PROJECTS COMING SOON</span>
    <p>
      I'm continuously building, experimenting and adding
      new projects to my portfolio.
    </p>
  </div>
)}

  <div className="footerRight">
    <span>© 2026 Kumar Anubhava</span>
    <a href="#home">Back to top ↑</a>
  </div>
</footer>
    </div>
  )
}

export default App