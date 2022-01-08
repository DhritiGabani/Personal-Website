import diagnose from "../imgs/diagnose.png";
import extension from "../imgs/extension.png";
import bot from "../imgs/bot.png";

export const Projects = {
  ether: {
    name: "Project Ether",
    subTitle:
      "A web-application to diagnose critical diseases using machine learning principles.",
    img: diagnose,
    // path: "ether",
    description:
      "predicts respiratory disorders, heart diseases, and parkinson's disease with just an image, audio, or text inputs from users.",
    screenshot: "https://www.color-hex.com/palettes/7707.png",
    tools: "Python",
    motivation:
      "People in India lack financial resources to get a medical diagnosis. This motivated me to build project ether.",
  },
  getHomeSafe: {
    name: "Get home safe",
    subTitle:
      "A tool to share location to help university students get back to their dorms safely.",
    img:
      "https://professionals.tarkett.com/media/img/M/THH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
    // path: "gethomesafe",
    description: "",
    screenshot: "https://www.color-hex.com/palettes/7707.png",
    tools: "React js, React native",
    motivation:
      "During the first semester of university, I found myself and my female friends reaching out to our friend group to walk back to our dorms with us at night. This inspired me to create an app to share location with our friends.",
  },

  horizons: {
    name: "Extend your horizons",
    subTitle:
      "A multi-functional chrome extension for productivity and mental health.",
    img: extension,
    description:
      "multifaceted tool to assist in helping individuals with productivity, efficiency, and mental health/wellness",
    screenshot: "https://www.color-hex.com/palettes/7707.png",
    tools: "javascript",
    motivation:
      "As students who spend countless hours daily on the internet for the purposes of studying and working, we decided to create a simple yet effective chrome extension to help students increase their focus when working while also promoting sustainable study habits.",
  },
  bot: {
    name: "Discord Music Bot",
    subTitle: "this is 4th project",
    img: bot,
    // path: "xyz",
    description: "this is the project decription",
    screenshot: "https://www.color-hex.com/palettes/7707.png",
    tools: "python",
    motivation: "this was the project motivation",
  },
};
