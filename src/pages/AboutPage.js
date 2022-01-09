import React from "react";
import Body from "../components/Body";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Body title={props.title}></Body>
        <Content>
          <p>
            Growing up, I have involved myself with{" "}
            <span style={{ color: "#b1c8ff" }}>learning new skills </span>and
            participating in various extracurricular activities. Whether it was
            learning a new sport, language or creating DIY arts & craft
            projects, I found myself spending countless hours on it.
          </p>
          <p>
            My "avid learner" personality reflected even more in high school
            when I took part in science competitions and decided to pick all the
            core STEM courses.
          </p>
          <p>
            Furthermore, at the end of{" "}
            <span style={{ color: "#b1c8ff" }}>2019</span> , I decided to teach
            myself to code, and hence my coding journey began. As someone who
            loves to create new things, programming piqued my interest, and I
            found it to be the perfect skill to add to my toolbox.
          </p>
          <p>
            So far, my coding journey has had its ups and downs from not wanting
            to code ever again when I was unable to debug my code to "I love
            coding" when my code worked. But being able to create something with
            the code I write has made me enjoy every part of learning to code.
          </p>
          <p>
            In retrospect, I believe that integrating my knowledge from
            different areas has helped me better understand concepts and find
            solutions. For instance, I was able to solve a healthcare-related
            problem with the help of calculus and programming principles in my
            first "big" coding project - project ether.
          </p>
          <p>
            Additionally, I chose{" "}
            <span style={{ color: "#b1c8ff" }}> Biomedical Engineering </span>
            because it aligns with my "wanting to learn new things" nature, and
            it enables me to create solutions by integrating different fields.
          </p>
          <p>
            <span style={{ "font-size": "25px", fontWeight: "500" }}>
              {" "}
              Why I create
            </span>
          </p>
          <p>
            To <span style={{ color: "#b1c8ff" }}>oslve </span> issues faced by
            me or by people around me
          </p>
          <p>
            To <span style={{ color: "#b1c8ff" }}>learn </span>different
            programming languages and skills
          </p>
        </Content>
        <div className="Image"></div>
      </div>
    </div>
  );
}
export default AboutPage;
