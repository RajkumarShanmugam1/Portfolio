import "../../assets/css/main.css";

function MainBar(){
    return (
        <div className="main-content">
          
  {/*
  - #NAVBAR
*/}
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <button className="navbar-link  active" data-nav-link="">
          About
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
          Resume
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
          Portfolio
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
          Contact
        </button>
      </li>
    </ul>
  </nav>
  {/*
    - #ABOUT
  */}
  <article className="about active" data-page="about">
    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text">
      <p style={{ textAlign: "justify" }}>
        Computer Science Engineering graduated in MSEC, Sivakasi, Tamilnadu.
        Currently engaged as a Project Engineer at Palc Networks, Chennai.
        Contributing to GUI development for network tools.
      </p>
      <p style={{ textAlign: "justify" }}>
        Passionate about cybersecurity and bug bounty programs. Enthusiastic
        about identifying vulnerabilities and enhancing the digital security.
        Committed to continuous learning and contributing to evolving landscape
        of online safety.
      </p>
      <p className="title">Project Engineer</p>
      <p className="title">Cyber Security Researcher</p>
      <p className="title">Web Developer</p>
    </section>
    {/*
    - service
  */}
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src="./assets/images/icon-design.svg
          "
              alt="Security"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Security analysis</h4>
            <p className="service-item-text" />
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src="./assets/images/icon-dev.svg"
              alt="Web development icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web Development</h4>
            <p className="service-item-text"></p>
          </div>
        </li>
      </ul>
    </section>
    {/*
    - testimonials modal
  */}
    <div className="modal-container" data-modal-container="">
      <div className="overlay" data-overlay="" />
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn="">
          <ion-icon name="close-outline" />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src="./assets/images/avatar-1.png"
              alt="Daniel lewis"
              width={80}
              data-modal-img=""
            />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title="">
            Daniel lewis
          </h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div data-modal-text="">
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>
  {/*
  - #RESUME
*/}
  <article className="resume" data-page="resume">
    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            Mepco Schlenk Engineering College, Sivakasi, Tamilnadu
          </h4>
          <span>2019 — 2023</span>
          <p className="timeline-text">B.E. Computer Science</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            Government Higher Secondry School, (O.Siruvayal), Tamilnadu
          </h4>
          <span>2017 — 2019</span>
          <p className="timeline-text">HSC (11th and 12th Grade)</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            Government High School, (Thiruvelangudi), Tamilnadu
          </h4>
          <span>Until 2017</span>
          <p className="timeline-text">SSLC (Until 10th Grade)</p>
        </li>
      </ol>
    </section>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Project Engineer</h4>
          <span>June,2023 — Present</span>
          <p className="timeline-text">
            Company &nbsp;: &nbsp;PALC Networks <br />
            Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            &nbsp;Security Analyst
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Software Trainee</h4>
          <span>Feb,2023 — June,2023</span>
          <p className="timeline-text">
            Company &nbsp;: &nbsp;PALC Networks <br />
            Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            &nbsp;Intern
          </p>
        </li>
      </ol>
    </section>
    {/* <section class="skill">


    <h3 class="h3 skills-title">My skills</h3>

    <ul class="skills-list content-card">

      <li class="skills-item">

        <div class="title-wrapper">
          <h5 class="h5">Web design</h5>
          <data value="80">80%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: 80%;"></div>
        </div>

      </li>

      <li class="skills-item">

        <div class="title-wrapper">
          <h5 class="h5">Graphic design</h5>
          <data value="70">70%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: 70%;"></div>
        </div>

      </li>

      <li class="skills-item">

        <div class="title-wrapper">
          <h5 class="h5">Branding</h5>
          <data value="90">90%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: 90%;"></div>
        </div>

      </li>

      <li class="skills-item">

        <div class="title-wrapper">
          <h5 class="h5">WordPress</h5>
          <data value="50">50%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: 50%;"></div>
        </div>

      </li>

    </ul>

  </section> */}
  </article>
  {/*
  - #PORTFOLIO
*/}
  <article className="portfolio" data-page="portfolio">
    <header>
      <h2 className="h2 article-title">Portfolio</h2>
    </header>
    <section className="projects">
      <ul className="filter-list">
        <li className="filter-item">
          <button className="active" data-filter-btn="">
            All
          </button>
        </li>
        <li className="filter-item">
          <button data-filter-btn="">Android</button>
        </li>
        <li className="filter-item">
          <button data-filter-btn="">Web development</button>
        </li>
      </ul>
      <div className="filter-select-box">
        <button className="filter-select" data-select="">
          <div className="select-value" data-selecct-value="">
            Select category
          </div>
          <div className="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>
        <ul className="select-list">
          <li className="select-item">
            <button data-select-item="">All</button>
          </li>
          <li className="select-item">
            <button data-select-item="">Android</button>
          </li>
          <li className="select-item">
            <button data-select-item="">Web development</button>
          </li>
        </ul>
      </div>
      <ul className="project-list">
        <li
          className="project-item  active"
          data-filter-item=""
          data-category="web development"
        >
          <a href="#">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>
              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>
            <h3 className="project-title">Finance</h3>
            <p className="project-category">Web development</p>
          </a>
        </li>
        <li
          className="project-item  active"
          data-filter-item=""
          data-category="Android"
        >
          <a href="#">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>
              <img
                src="./assets/images/project-8.jpg"
                alt="task manager"
                loading="lazy"
              />
            </figure>
            <h3 className="project-title">Task Manager</h3>
            <p className="project-category">Applications</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
  {/*
  - #CONTACT
*/}
  <article className="contact" data-page="contact">
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>
    <section className="mapbox" data-mapbox="">
      <figure>
        <iframe
          src="https://maps.google.com/maps?q=chennai&t=&z=10&ie=UTF8&iwloc=&output=embed"
          width={400}
          height={300}
          loading="lazy"
        />
      </figure>
    </section>
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form action="#" className="form" data-form="">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required=""
            data-form-input=""
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required=""
            data-form-input=""
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required=""
          data-form-input=""
          defaultValue={""}
        />
        <button className="form-btn" type="submit" disabled="" data-form-btn="">
          <ion-icon name="paper-plane" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</div>

    );
}

export default MainBar;