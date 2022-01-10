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
import { HashRouter } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

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
    section: "NAVIGATION",
    keywords: "project",
    subtitle: "take a look at my projects",
    icon: (
      <i className="fa-laptop-code social-media">
        <FaLaptopCode />
      </i>
    ),
    perform: () => (window.location.pathname = "projects"),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    section: "NAVIGATION",
    keywords: "about",
    subtitle: "find out more about me",
    icon: (
      <i className="fa-user social-media">
        <FaUser />
      </i>
    ),
    perform: () => (window.location.pathname = "about"),
  },
  {
    id: "email",
    name: "Email",
    shortcut: ["m"],
    section: "CONTACT",
    keywords: "mail",
    subtitle: "dhritigabani@gmail.com",
    icon: (
      <i className="fa-envelope social-media">
        <FaEnvelope />
      </i>
    ),
    perform: () => (window.location.pathname = "about"),
  },

  {
    id: "github",
    name: "Github",
    shortcut: ["g"],
    section: "CONTACT",
    keywords: "github",
    subtitle: "DhritiGabani",
    icon: (
      <i className="fa-github social-media">
        <FaGithub />
      </i>
    ),
    perform: () => (window.location.pathname = "about"),
  },
  {
    id: "linkedin",
    name: "Linkedin",
    shortcut: ["l"],
    section: "CONTACT",
    keywords: "linkedin",
    subtitle: "dhritigabani",
    icon: (
      <i className="fa-linkedin social-media">
        <FaLinkedin />
      </i>
    ),
    perform: () => (window.location.pathname = "about"),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {/* <HashRouter> */}
      <App />
      {/* </HashRouter> */}
    </KBarProvider>
  </React.StrictMode>,

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
              <kbd className="code">{item.shortcut}</kbd>
            </div>
          </div>
        )
      }
    />
  );
}
