import diagnose from "../imgs/diagnose.png";
import extension from "../imgs/extension.png";
import bot from "../imgs/bot.png";
import etherhome from "../imgs/homepage.png";
import ether from "../imgs/Frame 1.png";
import homesafe from "../imgs/Frame 2.png";
import chrome from "../imgs/Frame 3.png";
import site from "../imgs/Site.png";
import discord from "../imgs/Frame 4.png";
import ambient from "../imgs/ambient.png";
import signin from "../imgs/signin.png";
import track from "../imgs/track.png";

export const Projects = {
  ether: {
    name: (
      <span style={{ fontWeight: "800", fontSize: "24px" }}>Diagnose me</span>
    ),
    subTitle: (
      <div style={{ fontSize: "19px" }}>
        A{" "}
        <span
          style={{ "font-weight": "bold", fontSize: "21px", color: "#b1c8ff" }}
        >
          web-application{" "}
        </span>
        to diagnose critical diseases using machine learning principles.
      </div>
    ),
    img: diagnose,
    // path: "ether",
    description:
      "predicts respiratory disorders, heart diseases, and parkinson's disease with just an image, audio, or text inputs from users.",
    screenshotMain: etherhome,
    screenshotSecondary: ether,
    tools: ["Python", "TensorFlow", "Node.js"],
    motivation: (
      <div>
        Seeing hundreds of people around me being unable to get a medical
        diagnose due to the lack of financial resources, inspired me to build
        diagnose me.
        <br /> My team member and I trained three{" "}
        <span style={{ color: "#b1c8ff" }}>
          convolutional neural networks
        </span>{" "}
        to diagnose Parkinson's disease, classify various respiratory disorders
        and Heart diseases. <br />
        The minimalistic UI design enables the user to get the diagnosis by
        simply uploading an image, audio or textual information. <br />
        <br />
        <span style={{ fontWeight: "600", fontSize: "18px", color: "#b1c8ff" }}>
          Respiratory Disease Detection Model
        </span>{" "}
        - 90.8 % accuracy <br />
        <span style={{ fontWeight: "600", fontSize: "18px", color: "#b1c8ff" }}>
          Heart Disease Detection Model
        </span>{" "}
        - 84.8% accuracy <br />
        <span style={{ fontWeight: "600", fontSize: "18px", color: "#b1c8ff" }}>
          Parkinson's Disease Model
        </span>{" "}
        - 76.6% accuracy
      </div>
    ),
  },
  getHomeSafe: {
    name: (
      <span style={{ fontWeight: "800", fontSize: "24px" }}>Get home safe</span>
    ),
    subTitle: (
      <div style={{ fontSize: "19px" }}>
        A{" "}
        <span
          style={{ "font-weight": "bold", fontSize: "21px", color: "#b1c8ff" }}
        >
          tool{" "}
        </span>
        to share location to help university students get back to their dorms
        safely.
      </div>
    ),
    img: track, // path: "gethomesafe",
    description: "a real-time location sharing app",
    screenshotMain: signin,
    screenshotSecondary: homesafe,
    tools: ["React js", "React native"],
    motivation: (
      <div>
        During the first semester of university, I found myself and my friends
        being hesitant to walk back alone to our dorms in the dark. This
        inspired me to create an app to{" "}
        <span style={{ color: "#b1c8ff" }}>share real-time location</span> with
        our friends to track the users loaction and the{" "}
        <span style={{ color: "#b1c8ff" }}>trail of route </span>taken by the
        user when commuting from one desination to another.
        <br /> <br />
        My team and I implemented{" "}
        <span style={{ color: "#b1c8ff" }}>growth engineering</span> and made
        the interface user friendly. To make the sign in process hassel free, we
        decided to use phone numbers as the user id. This phone number receives
        a one-time passowrd every time the user logs in which eliminate the need
        to remember the password.
        <br />
        <br />
        Additonaly, the trackers do not need to download the app to track the
        users location. When the user shares their location, the trackers
        receive a link to the Get Home Safe web-application via a text message.
        Using this link, the trackers can see the user's location
      </div>
    ),
  },

  horizons: {
    name: (
      <span style={{ fontWeight: "800", fontSize: "24px" }}>
        Extend Your Horizons
      </span>
    ),
    subTitle: (
      <div style={{ fontSize: "19px" }}>
        A multi-functional{" "}
        <span
          style={{ "font-weight": "bold", fontSize: "21px", color: "#b1c8ff" }}
        >
          {" "}
          chrome extension{" "}
        </span>{" "}
        for productivity and mental health.
      </div>
    ),
    img: extension,
    description:
      "multifaceted tool to assist in helping individuals with productivity, efficiency, and mental health/wellness",
    screenshotMain: site,
    screenshotSecondary: chrome,
    tools: ["JavaScript"],
    motivation: (
      <div>
        As students who spend countless hours daily on the internet for the
        purposes of studying and working, my team and I decided to create a
        simple yet effective chrome extension for our{" "}
        <span style={{ color: "#b1c8ff" }}>first hackathon - Technova. </span>
        The main aim of our project was to help students increase their focus
        when working while also{" "}
        <span style={{ color: "#b1c8ff" }}>
          promoting sustainable study habits.
        </span>
        <br />
        <br />
        It consists of{" "}
        <span style={{ color: "#b1c8ff" }}> four components</span>: a Pomodoro
        timer, a personal to-do list, a customizable website blocker, and an
        inspirational quote generator.
      </div>
    ),
  },
  bot: {
    name: <span style={{ fontWeight: "800", fontSize: "24px" }}>Ambient</span>,
    subTitle: (
      <div style={{ fontSize: "19px" }}>
        <span
          style={{ "font-weight": "bold", fontSize: "21px", color: "#b1c8ff" }}
        >
          Discord music bot{" "}
        </span>
        to listent to songs during study sessions
      </div>
    ),
    img: bot,
    // path: "xyz",
    description: "a music bot for voice channels on discord",
    screenshotMain: ambient,
    screenshotSecondary: discord,
    tools: ["Python", "Discord.py"],
    motivation: (
      <div>
        As school shifted to remote learning, I noticed my friends and I had
        difficulty staying motivated to study. Something that helped us to stay
        motivated was to have online study sessions.
        <br />
        <br />
        During our studying sessions we like to listen to study music because it
        helps us to <span style={{ color: "#b1c8ff" }}>focus better</span>.
        Since we were unable to use most of the discord bots on our{" "}
        <span style={{ color: "#b1c8ff" }}>study server</span>, I decided to
        create an music bot so we can{" "}
        <span style={{ color: "#b1c8ff" }}>
          listen to our favourite playists while studying.
        </span>
      </div>
    ),
  },
};
