import React from "react";
import Body from "../components/Body";

function HomePage(props) {
  return (
    <Body title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}
export default HomePage;
