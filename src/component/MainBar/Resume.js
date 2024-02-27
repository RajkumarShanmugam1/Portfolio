import React from 'react';

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
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
              Government Higher Secondary School, (O.Siruvayal), Tamilnadu
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
            <span>June, 2023 — Present</span>
            <p className="timeline-text">
              Company &nbsp;: &nbsp;PALC Networks <br />
              Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
              &nbsp;Security Analyst
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Trainee</h4>
            <span>Feb, 2023 — June, 2023</span>
            <p className="timeline-text">
              Company &nbsp;: &nbsp;PALC Networks <br />
              Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
              &nbsp;Intern
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
