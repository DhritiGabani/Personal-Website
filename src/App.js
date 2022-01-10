import React from "react";
import Container from "react-bootstrap/Container";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";
import { useNavigate } from "react-router-dom";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

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

const App = () => {
  const navigate = useNavigate();
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
      perform: () => navigate("/", { replace: true }),
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
      perform: () => navigate("/projects", { replace: true }),
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
      perform: () => navigate("/about", { replace: true }),
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
      perform: () => window.open("mailto:dhritigabani@gmail.com", "_blank"),
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
      perform: () => window.open("https://github.com/DhritiGabani/", "_blank"),
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
      perform: () =>
        window.open(
          "https://www.linkedin.com/in/dhriti-gabani-0658611ba/",
          "_blank"
        ),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <BrowserRouter>
        <Container
          className="p-0 wrapper"
          fluid={true}
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Navigation />
          <AppRouter />
          <Footer />
        </Container>
      </BrowserRouter>
    </KBarProvider>
  );
};

export default App;

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
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              {item.icon && (
                <div style={{ backgroundColor: "white" }}>{item.icon}</div>
              )}
              <div className="kbar-name-group">
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
