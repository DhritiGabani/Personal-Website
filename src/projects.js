// export const Projects = {
//     ether: {
//         name: "Project Ether",
//         description: ""
//         url: "/projects/ether"
//         dkjhf: [dfoiahdf,]
//     },
//     findme: {
//         name: "Find me",
//         url: "/projects/findme"
//     }
// }

// const filterName = (projectInfo) => {
//     return projectInfo.name
// }

// Object.values(Projects).(filterName)

// <Project projectKey={"ether"}>

// class Project {

//     state = {
//         name: Projects[this.props.projectKey].name,
//         description: Projects[this.props.projectKey].description,

//     }
// }

// tile
// componentDidMount() {
//     console.log("Project page loaded");
//   }

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {
//     console.log("Project page will disappear");
//   }

//   handleClick = () => {
//     let text = null;

//     if (this.state.buttonText == "Dhriti") {
//       text = "Millin";
//     } else {
//       text = "Dhriti";
//     }

//     this.setState({ buttonText: text });
//   };

// render() {
//     return (
//       <div className="project-gallery">
//        <button onClick={this.handleClick}>{this.state.buttonText}</button>
//       </div>
//     );
//   }
// }
// class ProjectsPage extends React.Component {
//   state = {
//     buttonText: "Dhriti",
//   };

//   iterateProjects = () => {
//     Object.values(Projects).forEach((project) => console.log(project));
//   };

//   render() {
//     return <div className="project-gallery">{iterateProjects}</div>;
//   }
// }
