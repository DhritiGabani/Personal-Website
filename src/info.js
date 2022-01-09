export const info = {
  headerLinks: [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
  ],
  home: {
    title: (
      <div
        style={{
          "font-size": "3.5rem",
          "font-weight": "600",
          color: "white",
        }}
      >
        Hi, I'm <span style={{ color: "#B1C8FF" }}>Dhriti</span>
      </div>
    ),
    subTitle: (
      <div style={{ color: "white" }}>
        <span style={{ fontSize: "20px" }}> I'm a </span>
        <span style={{ fontWeight: "700" }}>Biomedical Engineering </span>
        <span style={{ fontSize: "20px" }}>student at the </span>
        <span style={{ fontWeight: "700" }}>University of Waterloo</span>
      </div>
    ),
    typewriter: true,
    text: (
      <div style={{ color: "white" }}>
        press cmd k/ ctrl k to learn more about me
      </div>
    ),
  },
  projects: {
    title: (
      <div style={{ color: "white" }}>
        Some of the projects that I have worked on
      </div>
    ),
  },
  about: {
    title: (
      <div
        style={{ "font-size": "3rem", "font-weight": "400", color: "white" }}
      >
        More about me
      </div>
    ),
    text: "content",
  },
};
