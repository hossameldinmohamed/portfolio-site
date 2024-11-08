import seleniumicon from "../../assets/icons/selenium.svg";
import cypressicon from "../../assets/icons/cypress.svg";
import appiumicon from "../../assets/icons/appium.svg";
import roboticon from "../../assets/icons/robot.svg";
import webdrivericon from "../../assets/icons/webdriver.svg";
import playwrighticon from"../../assets/icons/playwright.svg";
import  shafticon from "../../assets/icons/shaft.png";
import  jiraicon from "../../assets/icons/jiraicon.svg";
import  confleunceicon from "../../assets/icons/confluenceicon.svg";
import  TestRailicon from "../../assets/icons/testrail.svg";
import  dockericon from "../../assets/icons/docker.svg";
import  gitlabicon from "../../assets/icons/gitlab.svg";
import  Jenkinsicon from "../../assets/icons/jenkins.svg";
import  githubicon from "../../assets/icons/githubactions.svg";
import  circleicon from "../../assets/icons/circle.svg";
import resticon from "../../assets/icons/rest.svg";
import katalonicon from "../../assets/icons/Katalon-logo-vector.svg";
import jmetericon from "../../assets/icons/jmeter.svg";
import profilepicture from "../img/me2.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoStack , GoProject} from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail  } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

import foundation  from "../../assets/img/foundation.jpg"; 
import agile from "../../assets/img/agile.svg";
import mobile from "../../assets/img/Astqb.png";


export const headerIntroData = {
  title: {
    de: "Hi, ich bin Hossam Eldin",
    en: "Hi, I'm Hossam Eldin",
  },
  subtitle: {
    "de":"Testautomations-Ingenieur aus Deutschland",
    "en":"Test Automation Engineer Based In Germany"},
  description: {
    "de": "Ich bin Hossam Eldin, ein Testautomatisierungsingenieur mit 7 Jahren Erfahrung in der Softwarebranche. Mein Ziel ist es, meine Karriere voranzutreiben und an spannenden Projekten im Bereich Softwaretests teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für das Testen. Lassen Sie uns gemeinsam die Zukunft der Softwarequalität gestalten!",
    "en": "I'm Hossam Eldin, a Test Automation Engineer with 7 years of experience in the software industry. My goal is to advance my career and contribute to exciting projects in software testing. Here I showcase my work and passion for testing. Let's shape the future of software quality together!",
  },
  buttons: [

    {
      name: "Certificates",
      label: {
        de: "Meine Zertifikate ",
        en: "My Certificates",
      },
      icon: GoPerson,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const certificatesData = [
  {
    title: {
      en: "ISTQB - Foundation Level",
      de: "ISTQB - Grundlagen Level",
    },
    date: {
      en: "April 2017 - Ongoing",
      de: "April 2017 - Laufend",
    },
    certificateId: "170406068",
    description: {
      en: "Foundation level certification by ISTQB covering software testing fundamentals.",
      de: "Zertifizierung auf Grundlagenebene durch ISTQB, die die Grundlagen des Softwaretestens abdeckt.",
    },
//image : foundation
  },
  {
    title: {
      en: "ISTQB - Agile Tester",
      de: "ISTQB - Agiler Tester",
    },
    date: {
      en: "April 2018 - Ongoing",
      de: "April 2018 - Laufend",
    },
    certificateId: "180422010",
    description: {
      en: "Certification by ISTQB for Agile testing methodologies and practices.",
      de: "Zertifizierung durch ISTQB für agile Testmethoden und -praktiken.",
    },
 //   image : agile
  },
  {
    title: {
      en: "ASTQB - Mobile Tester",
      de: "ASTQB - Mobiler Tester",
    },
    date: {
      en: "April 2019 - Ongoing",
      de: "April 2019 - Laufend",
    },
    certificateId: "19-CMT-00075-USA",
    description: {
      en: "Certification by ASTQB for testing on mobile platforms, covering mobile-specific testing techniques and tools.",
      de: "Zertifizierung durch ASTQB für Tests auf mobilen Plattformen, einschließlich mobiler Testtechniken und -tools.",
    },
 //   image : mobile
  }
] as const;


export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Frameworks & Libraries",
    skills: [
      {
        title: "Selenium",
        hash: "#Selenium",
        icon: seleniumicon ,
        color: "#F1662A",
      },
      {
        title: "Appium",
        hash: "#Appium",
        icon: appiumicon,
        color: "#F7DF1E",
      },
      {
        title: "Cypress",
        hash: "#Cypress",
        icon: cypressicon,
        color: "#1572B6",
      },
      {
        title: "RobotFramework",
        hash: "#Robot",
        icon: roboticon,
        color: "#007ACC",
      },
      {
        title: "Webdriver.IO",
        hash: "#Webdriver.IO",
        icon: webdrivericon,
        color: "#61DAFB",
      },
      {
        title: "Playwright",
        hash: "#Playwright",
        icon: [playwrighticon],
        color: ["#7AB55C"],
      },
      {
        title: "Shaft Engine",
        hash: "#Shaft Engine",
        icon: [shafticon],
        color: ["#FF61F6"],
      }
      ,
      {
        title: "Rest-Assured",
        hash: "#Rest-Assured",
        icon: [resticon],
        color: ["#F1662A"],
      }
      ,
      {
        title: "Katalon Studio",
        hash: "#Katalon",
        icon: [katalonicon],
        color: ["#1572B6"],
      }
      ,
      {
        title: "Jmeter",
        hash: "#Jmeter",
        icon: [jmetericon],
        color: ["#7AB55C"],
      }
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Test Management",
    skills: [
      { title: "Jira", hash: "#Jira", icon: jiraicon, color: "#F24E1E" },
      {
        title: "Confleunce",
        hash: "#Confleunce",
        icon: confleunceicon,
        color: "#FF61F6",
      },
      { title: "TestRail", hash: "#TestRail", icon: TestRailicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "DevOps & CI/CD",
    skills: [
      {
        title: "Docker",
        hash: "#docker",
        icon: dockericon,
        color: "#21759B",
      },
      {
        title: "Gitlab",
        hash: "#Gitlab",
        icon: gitlabicon,
        color: "#7AB55C",
      },
      {
        title: "Jenkins",
        hash: "#Jenkins",
        icon: Jenkinsicon,
        color: "#4353FF",
      },
      {
        title: "Github Actions",
        hash: "#Github Actions",
        icon: githubicon,
        color: "#FF61F6",
      },
      {
        title: "CircleCI",
        hash: "#CircleCI",
        icon: circleicon,
        color: "#F1662A",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Startseite", en: "Home", hash: "#home", icon: GoHome },
  { de: "Fähigkeiten", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Zertifikate",en: "Certificates", hash:"#certificates", icon: GoProject},
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson},
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:hossameldinmohamed3@gmail.com",
  text: "hossameldinmohamed3@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/hossameldinmohamed/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/hossameldinmohamed",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:hossameldinmohamed3@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Zuerst zum Laufen bringen, dann schön gestalten."',
    en: `"First make it work, then make it beautiful."`,
  },
] as const;

const aboutMeData = {
  title: "Über mich",
  title_EN: "About Me",
  description: "As a seasoned test automation engineer with 7 years of experience, I'm passionate about ensuring software quality and driving innovation.",
  description_EN: "As a seasoned test automation engineer with 7 years of experience, I'm passionate about ensuring software quality and driving innovation.",
  paragraphs_DE: [
    {
      title: "Qualitätsexperte",
      description: "Durch frühzeitiges Fehlererkennen und Stabilität liefere ich leistungsfähige und zuverlässige Softwarelösungen."
    },
    {
      title: "Testautomatisierung für Effizienz",
      description: "Mit fortschrittlichen Tools beschleunige ich Entwicklungszyklen, erhöhe die Sicherheit und ermögliche Wiederholbarkeit."
    },
    {
      title: "Leidenschaft für Optimierung",
      description: "Ich treibe kontinuierliche Verbesserung voran, um die Softwarequalität zu maximieren und Marktanforderungen zu erfüllen."
    }
  ],
  paragraphs_EN: [
    {
      title: "Quality Expert",
      description: "By identifying issues early and maintaining stability, I deliver powerful and reliable software solutions."
    },
    {
      title: "Test Automation for Efficiency",
      description: "With advanced tools, I help accelerate development cycles, enhance security, and ensure repeatability."
    },
    {
      title: "Passion for Optimization",
      description: "I drive continuous improvement to maximize software quality and meet evolving market demands."
    }
  ]
};



export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};

export const skills = [
    {
        name: "Test Automation Frameworks",
        items: ["Selenium", "Cypress", "Appium", "Robot Framework", "WebDriver", "Playwright", "TestNG", "JUnit", "Mocha", "Puppeteer"]
    },
    {
        name: "Programming Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
        name: "CI/CD Tools",
        items: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "CircleCI", "Docker"]
    },
    {
        name: "Project Management",
        items: ["Jira", "Confluence", "TestRail", "Trello"]
    },
    {
        name: "APIs & Web Services",
        items: ["REST API", "GraphQL", "Postman", "Newman"]
    }
];


export const aboutMe = {
    title: "Experienced Test Automation Engineer",
    description: "With over 7 years in the industry, I specialize in developing and implementing robust test automation solutions across various frameworks, tools, and environments. My expertise spans Selenium, Cypress, Appium, and advanced CI/CD integrations with tools like Jenkins and GitLab CI/CD. I am adept at scripting in JavaScript, Python, and Java, and have a strong background in project management with Jira and Confluence."
};
