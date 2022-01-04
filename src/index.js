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
import "bootstrap/dist/css/bootstrap.css";

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
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
        <KBarAnimator>
          <KBarSearch />
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
      className="type"
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div
            className="length"
            style={{ "box-shadow": "0 5px 15px rgba(0, 0, 0, 0.3)" }}
          >
            {item}
          </div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "white",
              padding: "1.2rem",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}
