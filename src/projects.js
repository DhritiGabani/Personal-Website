import diagnose from "./imgs/diagnose.png";
import extension from "./imgs/extension.png";
import bot from "./imgs/bot.png";
import etherhome from "./imgs/homepage.png";
import ether from "./imgs/Frame 1.png";
import homesafe from "./imgs/Frame 2.png";
import chrome from "./imgs/Frame 3.png";
import site from "./imgs/Site.png";
import discord from "./imgs/Frame 4.png";
import ambient from "./imgs/ambient.png";
import signin from "./imgs/signin.png";
import track from "./imgs/track.png";

export const projects = {
  ether: {
    name: "Diagnose me",
    subTitle: (
      <div className="ith-subtitle">
        A <span> web-app </span> to diagnose critical diseases using machine
        learning principles.
      </div>
    ),
    img: diagnose,
    // path: "ether",
    description:
      "predicts respiratory disorders, heart diseases, and parkinson's disease with just an image, audio, or text input from users.",
    screenshotMain: etherhome,
    screenshotSecondary: ether,
    link: "https://github.com/DhritiGabani/Diagnose-me",
    tools: ["Python", "TensorFlow", "Node.js"],
    motivation: (
      <div className="motivation">
        <span>
          "Nearly half of the world's population does not have access to health
          care."
        </span>{" "}
        Reading this statistic in an article inspired me to create a free tool
        to diagnose diseases. To build a disease diagnosis system, I implemented
        machine learning principles to train two{" "}
        <span>convolutional neural networks</span> (for image and audio inputs)
        with Keras API to diagnose Parkinson's disease and classify respiratory
        disorders such as asthma,pneumonia, and bronchitis.
        <br /> <br />
        <span>
          <strong>Respiratory Disease Detection Model</strong>
        </span>{" "}
        - 90.8 % accuracy <br />
        <span>
          <strong>Heart Disease Detection Model</strong>
        </span>{" "}
        - 84.8% accuracy <br />
        <span>
          <strong>Parkinson's Disease Model</strong>
        </span>{" "}
        - 76.6% accuracy
      </div>
    ),
  },
  getHomeSafe: {
    name: "Get home safe",
    subTitle: (
      <div className="ith-subtitle">
        A <span>tool </span>
        to share location to help university students get back to their dorms
        safely.
      </div>
    ),
    img: track,
    description: "a real-time location sharing mobile and web-app",
    screenshotMain: signin,
    screenshotSecondary: homesafe,
    link: "https://github.com/binalpreetkalra/get-home-safe",
    tools: ["React js", "React native"],
    motivation: (
      <div className="motivation">
        During the first semester of university, my friends and I felt unsafe to
        walk back alone to our dorms in the dark. After trying out multiple
        location services, I noticed that all of them had one limitation - I
        could not
        <span> track the entire trail of the route </span>taken by the user
        during their journey. I pitched my idea to fulfill this limitation to my
        friends and we decided to bring it to life by developing a mobile and
        web app. <br /> <br />
        Get home safe mobile app shares the user's location to their selected
        network of friends through a <span>link</span> ( to get home safe web
        app) sent via an automated text message when the share location button
        is pressed. To make the sign in process hassle free, we used phone
        numbers as the user id and one-time passwords.
        <br />
        <br />
        My team and I implemented <span>growth engineering </span>and made the
        location tracking easily accessible for the trackers through the web app
        to eliminate the need to download the app.
      </div>
    ),
  },

  horizons: {
    name: "Extend your horizons",
    subTitle: (
      <div className="ith-subtitle">
        A multi-functional <span>chrome extension </span>
        for productivity and mental wellness.
      </div>
    ),
    img: extension,
    description:
      "multifaceted tool to assist in helping individuals with productivity, efficiency, and mental health/wellness",
    screenshotMain: site,
    screenshotSecondary: chrome,
    link: "https://github.com/alliedong/technova-hackathon",
    tools: ["JavaScript"],
    motivation: (
      <div className="motivation">
        As students who spend countless hours daily on the internet for the
        purposes of studying and working, my team and I decided to create a
        simple yet effective chrome extension for our{" "}
        <span>first hackathon - Technova. </span>
        The main aim of our project was to help students increase their focus
        when working while also <span>promoting sustainable study habits.</span>
        <br />
        <br />
        It consists of <span> four components</span>: a Pomodoro timer, a
        personal to-do list, a customizable website blocker, and an
        inspirational quote generator.
      </div>
    ),
  },
  bot: {
    name: "Ambient",
    subTitle: (
      <div className="ith-subtitle">
        <span>Discord music bot </span>
        to listen to songs during study sessions
      </div>
    ),
    img: bot,
    // path: "xyz",
    description: "a music bot for voice channels on discord",
    screenshotMain: ambient,
    screenshotSecondary: discord,
    link: "https://github.com/DhritiGabani/Ambient",
    tools: ["Python", "Discord.py"],
    motivation: (
      <div className="motivation">
        As school shifted to remote learning, I noticed my friends and I had
        difficulty staying motivated to study. Something that helped us to stay
        motivated was to have online study sessions.
        <br />
        <br />
        Listening to music during our studying sessions helped us to{" "}
        <span>focus better</span>. Since we were unable to use most of the
        discord bots on our <span>study server</span>, I create an music bot to
        help my friends and I listen to our favourite instrumental, classical,
        and lo-fi playists while studying.
      </div>
    ),
  },
};
