import React from "react";

export const info = {
  home: {
    title: (
      <span style={{ fontSize: "3rem" }}>
        Hi, I'm <span className="header-name">Dhriti</span>
      </span>
    ),
    subTitle: (
      <div className="header-subtitle">
        I'm a <strong>Biomedical Engineering </strong>
        student at the&nbsp;
        <b>University of Waterloo</b>
        <br />
        <span style={{ fontSize: "1.2rem" }}> Prev <span style={{ color:"#b1c8ff"}}>Software Engineering Intern </span> @PointClickCare @League @Rundoo </span>
      </div>
    ),
    typewriter: true,
    text: true,
  },
  projects: {
    title: <div className="projects-h1">Projects I have worked on</div>,
  },
  about: {
    title: <div className="about-h1">More about me</div>,
    content: (
      <div className="about-content">
        <p>
          Growing up, I have involved myself with{" "}
          <span>learning new skills </span>. Whether it was learning a new
          sport, a new language or creating DIY arts & craft projects, I found myself
          spending countless hours on it.
          <br />
          <br />
          My tech journey began by teaching myself to code in high school.{" "}
          As someone who loves to <span>create new things</span>,
          programming piqued my interest, and I found it to be the perfect skill
          to add to my toolbox.
          <br />
          <br />
          So far, my coding journey has had its ups and downs from not wanting
          to code ever again when my code had errors to "I love coding" when my
          code worked. But being able to create tools like{" "}
          <span>
            Diagnose me, Get home safe, Extend your horizons,
          </span> and <span>Ambient </span> with the code I write and the impact I was able to make with it has made me
          enjoy every part of my learning journey. Through internships and side projects, I have explored different areas 
          of software engineering like <span>frontend, backend, machine learning, data, infra, cloud, and security.</span> I plan on continuing to explore more fields within software engineering through my future co-ops.
          <br />
          <br />
        </p>
        <p>
          <div className="content-section">Why I create</div>
        </p>
        <li>
          To <span>solve </span> issues faced by me or communities around me
        </li>
        <li className="list-item">
          To <span>learn </span>different programming languages and skills 
        </li>
      </div>
    ),
  },
};
