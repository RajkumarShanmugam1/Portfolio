import React, { useState , useEffect } from 'react';
import { Col, Row, Nav, Button } from "react-bootstrap";
import About from "./About";
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

import "../../assets/css/main.css";

function MainBar(){
  
  const [activeTab, setActiveTab] = useState("About");
  
  return (
      // <div className="main-content">
      
      //   <nav className="navbar">
      //     <ul className="navbar-list">
      //       <li className="navbar-item">
      //         <button className="navbar-link  active" data-nav-link="">
      //           About
      //         </button>
      //       </li>
      //       <li className="navbar-item">
      //         <button className="navbar-link" data-nav-link="">
      //           Resume
      //         </button>
      //       </li>
      //       <li className="navbar-item">
      //         <button className="navbar-link" data-nav-link="">
      //           Portfolio
      //         </button>
      //       </li>
      //       <li className="navbar-item">
      //         <button className="navbar-link" data-nav-link="">
      //           Contact
      //         </button>
      //       </li>
      //     </ul>
      //   </nav>

      //   <About className="about active"/>

      //   <article className="resume" data-page="resume">
      //     <header>
      //       <h2 className="h2 article-title">Resume</h2>
      //     </header>
      //     <section className="timeline">
      //       <div className="title-wrapper">
      //         <div className="icon-box">
      //           <ion-icon name="book-outline" />
      //         </div>
      //         <h3 className="h3">Education</h3>
      //       </div>
      //       <ol className="timeline-list">
      //         <li className="timeline-item">
      //           <h4 className="h4 timeline-item-title">
      //             Mepco Schlenk Engineering College, Sivakasi, Tamilnadu
      //           </h4>
      //           <span>2019 — 2023</span>
      //           <p className="timeline-text">B.E. Computer Science</p>
      //         </li>
      //         <li className="timeline-item">
      //           <h4 className="h4 timeline-item-title">
      //             Government Higher Secondry School, (O.Siruvayal), Tamilnadu
      //           </h4>
      //           <span>2017 — 2019</span>
      //           <p className="timeline-text">HSC (11th and 12th Grade)</p>
      //         </li>
      //         <li className="timeline-item">
      //           <h4 className="h4 timeline-item-title">
      //             Government High School, (Thiruvelangudi), Tamilnadu
      //           </h4>
      //           <span>Until 2017</span>
      //           <p className="timeline-text">SSLC (Until 10th Grade)</p>
      //         </li>
      //       </ol>
      //     </section>
      //     <section className="timeline">
      //       <div className="title-wrapper">
      //         <div className="icon-box">
      //           <ion-icon name="book-outline" />
      //         </div>
      //         <h3 className="h3">Experience</h3>
      //       </div>
      //       <ol className="timeline-list">
      //         <li className="timeline-item">
      //           <h4 className="h4 timeline-item-title">Project Engineer</h4>
      //           <span>June,2023 — Present</span>
      //           <p className="timeline-text">
      //             Company &nbsp;: &nbsp;PALC Networks <br />
      //             Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
      //             &nbsp;Security Analyst
      //           </p>
      //         </li>
      //         <li className="timeline-item">
      //           <h4 className="h4 timeline-item-title">Software Trainee</h4>
      //           <span>Feb,2023 — June,2023</span>
      //           <p className="timeline-text">
      //             Company &nbsp;: &nbsp;PALC Networks <br />
      //             Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
      //             &nbsp;Intern
      //           </p>
      //         </li>
      //       </ol>
      //     </section>
      //     {/* <section class="skill">


      //     <h3 class="h3 skills-title">My skills</h3>

      //     <ul class="skills-list content-card">

      //       <li class="skills-item">

      //         <div class="title-wrapper">
      //           <h5 class="h5">Web design</h5>
      //           <data value="80">80%</data>
      //         </div>

      //         <div class="skill-progress-bg">
      //           <div class="skill-progress-fill" style="width: 80%;"></div>
      //         </div>

      //       </li>

      //       <li class="skills-item">

      //         <div class="title-wrapper">
      //           <h5 class="h5">Graphic design</h5>
      //           <data value="70">70%</data>
      //         </div>

      //         <div class="skill-progress-bg">
      //           <div class="skill-progress-fill" style="width: 70%;"></div>
      //         </div>

      //       </li>

      //       <li class="skills-item">

      //         <div class="title-wrapper">
      //           <h5 class="h5">Branding</h5>
      //           <data value="90">90%</data>
      //         </div>

      //         <div class="skill-progress-bg">
      //           <div class="skill-progress-fill" style="width: 90%;"></div>
      //         </div>

      //       </li>

      //       <li class="skills-item">

      //         <div class="title-wrapper">
      //           <h5 class="h5">WordPress</h5>
      //           <data value="50">50%</data>
      //         </div>

      //         <div class="skill-progress-bg">
      //           <div class="skill-progress-fill" style="width: 50%;"></div>
      //         </div>

      //       </li>

      //     </ul>

      //   </section> */}
      //   </article>

      //   <article className="portfolio" data-page="portfolio">
      //     <header>
      //       <h2 className="h2 article-title">Portfolio</h2>
      //     </header>
      //     <section className="projects">
      //       <ul className="filter-list">
      //         <li className="filter-item">
      //           <button className="active" data-filter-btn="">
      //             All
      //           </button>
      //         </li>
      //         <li className="filter-item">
      //           <button data-filter-btn="">Android</button>
      //         </li>
      //         <li className="filter-item">
      //           <button data-filter-btn="">Web development</button>
      //         </li>
      //       </ul>
      //       <div className="filter-select-box">
      //         <button className="filter-select" data-select="">
      //           <div className="select-value" data-selecct-value="">
      //             Select category
      //           </div>
      //           <div className="select-icon">
      //             <ion-icon name="chevron-down" />
      //           </div>
      //         </button>
      //         <ul className="select-list">
      //           <li className="select-item">
      //             <button data-select-item="">All</button>
      //           </li>
      //           <li className="select-item">
      //             <button data-select-item="">Android</button>
      //           </li>
      //           <li className="select-item">
      //             <button data-select-item="">Web development</button>
      //           </li>
      //         </ul>
      //       </div>
      //       <ul className="project-list">
      //         <li
      //           className="project-item  active"
      //           data-filter-item=""
      //           data-category="web development"
      //         >
      //           <a href="#">
      //             <figure className="project-img">
      //               <div className="project-item-icon-box">
      //                 <ion-icon name="eye-outline" />
      //               </div>
      //               <img
      //                 src="./assets/images/project-1.jpg"
      //                 alt="finance"
      //                 loading="lazy"
      //               />
      //             </figure>
      //             <h3 className="project-title">Finance</h3>
      //             <p className="project-category">Web development</p>
      //           </a>
      //         </li>
      //         <li
      //           className="project-item  active"
      //           data-filter-item=""
      //           data-category="Android"
      //         >
      //           <a href="#">
      //             <figure className="project-img">
      //               <div className="project-item-icon-box">
      //                 <ion-icon name="eye-outline" />
      //               </div>
      //               <img
      //                 src="./assets/images/project-8.jpg"
      //                 alt="task manager"
      //                 loading="lazy"
      //               />
      //             </figure>
      //             <h3 className="project-title">Task Manager</h3>
      //             <p className="project-category">Applications</p>
      //           </a>
      //         </li>
      //       </ul>
      //     </section>
      //   </article>

      //   <article className="contact" data-page="contact">
      //     <header>
      //       <h2 className="h2 article-title">Contact</h2>
      //     </header>
      //     <section className="mapbox" data-mapbox="">
      //       <figure>
      //         <iframe
      //           src="https://maps.google.com/maps?q=chennai&t=&z=10&ie=UTF8&iwloc=&output=embed"
      //           width={400}
      //           height={300}
      //           loading="lazy"
      //         />
      //       </figure>
      //     </section>
      //     <section className="contact-form">
      //       <h3 className="h3 form-title">Contact Form</h3>
      //       <form action="#" className="form" data-form="">
      //         <div className="input-wrapper">
      //           <input
      //             type="text"
      //             name="fullname"
      //             className="form-input"
      //             placeholder="Full name"
      //             required=""
      //             data-form-input=""
      //           />
      //           <input
      //             type="email"
      //             name="email"
      //             className="form-input"
      //             placeholder="Email address"
      //             required=""
      //             data-form-input=""
      //           />
      //         </div>
      //         <textarea
      //           name="message"
      //           className="form-input"
      //           placeholder="Your Message"
      //           required=""
      //           data-form-input=""
      //           defaultValue={""}
      //         />
      //         <button className="form-btn" type="submit" disabled="" data-form-btn="">
      //           <ion-icon name="paper-plane" />
      //           <span>Send Message</span>
      //         </button>
      //       </form>
      //     </section>
      //   </article>
      // </div>

      <div className="main-content">
        <Row className="navbar">
          <col xs={12} >
          </col>
            <Nav
              className="navbar-list"
              variant="tabs"
              activeKey={activeTab}
              onSelect={(key) => setActiveTab(key)}
            >
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="About" className="navbar-link">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="Resume" className="navbar-link">
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="Portfolio" className="navbar-link">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="Contact" className="navbar-link">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
        </Row>

        <Row className="mt-2 mb-3">
          <Col xs={12}>
            {activeTab === "About" && (
              <About/>
            )}
            {activeTab === 'Resume' && (
              <Resume/>
            )}
            {activeTab === 'Portfolio' && (
            <div>
              <Portfolio/>
            </div>
            )}
            {activeTab === 'Contact' && (
            <div>
              <Contact/>
            </div>
            )}
          </Col>
        </Row>
      </div>
    );
}

export default MainBar;