import React from 'react';

const Portfolio = () => {
  return (
    <article className="portfolio active" data-page="portfolio">
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
  );
};

export default Portfolio;
