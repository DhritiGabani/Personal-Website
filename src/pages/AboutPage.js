import React from "react";
import Body from "../components/Body";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <div>
        <Body title={props.title}></Body>
        <Content>
          <p>
            Growing up, I have involved myself with learning new skills and
            participating in numerous activities. Whether it was learning a new
            sport, language or creating DIY arts & craft projects, I found
            myself spending countless hours on it.
          </p>
          <p>
            My "avid learner" personality reflected even more in high school
            when I took part in science competitions and decided to pick all the
            core STEM courses.
          </p>
          <p>
            Furthermore, at the end of 2019, I decided to teach myself to code,
            and hence my coding journey began. As someone who loves to create
            new things, programming piqued my interest, and I found it to be the
            perfect skill to add to my toolbox.
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
            Additionally, I chose Biomedical Engineering because it aligns with
            my "wanting to learn new things" nature, and it enables me to create
            solutions by integrating different fields.
          </p>
          <p>
            <span> Why I create</span>
          </p>
          <p>To solve issues faced by me or by people around me</p>
          <p>To learn different programming languages and skills</p>
        </Content>
        <div className="Image"></div>
      </div>
    </div>
  );
}
export default AboutPage;
