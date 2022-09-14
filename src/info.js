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
        <span style={{ fontSize: "1.2rem" }}> Prev Software Engineering Intern @Rundoo </span>
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
          sport, language or creating DIY arts & craft projects, I found myself
          spending countless hours on it.
          <br />
          <br />
          My coding journey began with self learning programming at the end of{" "}
          <span>2019</span>. As someone who loves to create new things,
          programming piqued my interest, and I found it to be the perfect skill
          to add to my toolbox.
          <br />
          <br />
          So far, my coding journey has had its ups and downs from not wanting
          to code ever again when my code had errors to "I love coding" when my
          code worked. But being able to create tools like{" "}
          <span>
            Diagnose me, Get home safe, Extend your horizons,
          </span> and <span>Ambient </span> with the code I write has made me
          enjoy every part of learning to code. I worked as an Software Engineering Intern @Rundoo for my first co-op term in the summer 2022 and during my time there, I realised that software was something I wanted to explore more.
          <br />
          <br />
        </p>
        <p>
          <div className="content-section">Why I create</div>
        </p>
        <li>
          To <span>solve </span> issues faced by me or people around me
        </li>
        <li className="list-item">
          To <span>learn </span>different programming languages and skills
        </li>
      </div>
    ),
  },
};
