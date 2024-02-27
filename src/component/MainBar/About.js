import React from 'react';

const About = () => {
  return (
    <article className="about active">
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
          about identifying vulnerabilities and enhancing digital security.
          Committed to continuous learning and contributing to the evolving landscape
          of online safety.
        </p>
        <p className="title">Project Engineer</p>
        <p className="title">Cyber Security Researcher</p>
        <p className="title">Web Developer</p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg"
                alt="Security"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Security analysis</h4>
              <p className="service-item-text"></p>
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
                very concerned about the needs of the client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default About;
