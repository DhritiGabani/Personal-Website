import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import { FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: "rgb(252 252 252)",
  color: "rgb(28 28 29)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "rgb(252 252 252)",
  color: "rgb(28 28 29)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
};
const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 0.5,
};

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    subtitle: "go to home",
    section: "NAVIGATION",
    icon: (
      <i className="fa-home social-media">
        <FaHome />
      </i>
    ),
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "projects",
    name: "Projects",
    shortcut: ["p"],
    keywords: "project",
    perform: () => (window.location.pathname = "projects"),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
  },
];

ReactDOM.render(
  <KBarProvider actions={actions}>
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={animatorStyle}>
          <KBarSearch style={searchStyle} />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
    <App />
  </KBarProvider>,
  document.getElementById("root")
);

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="length" style={groupNameStyle}>
            {item}
          </div>
        ) : (
          <div className="result-style">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon && item.icon}
              <div style={{ marginLeft: "0.5rem" }}>
                <div>{item.name}</div>
                <div>{item.subtitle}</div>
              </div>
            </div>
            <div>
              <kbd>{item.shortcut}</kbd>
            </div>
          </div>
        )
      }
    />
  );
}
