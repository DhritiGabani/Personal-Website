import React from "react";
import Body from "../components/Body";

function HomePage(props) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Body
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        name={props.name}
        typewriter={props.typewriter}
      />
    </div>
  );
}
export default HomePage;
