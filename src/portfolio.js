import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aniket Singh",
  title: "Hi everyone, I'm Aniket",
  subTitle: emoji("A passionate Software Developer | Competitive Programmer "),
  resumeLink:
    "https://drive.google.com/file/d/1hiTxsVoouvLKylLvDJDsuNdn_H466wZd", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aniketsinghcoder",
  linkedin: "https://www.linkedin.com/in/aniket-singh-2002/",
  gmail: "aniketsingh212408@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Problem Solver | Competitive Programmer"),
    emoji("⚡ Backend Developer"),
    emoji("⚡ Technology Explorer")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "B. P. Poddar Institute of Management & Technology",
      logo: require("./assets/images/bppimtLogo.png"),
      subHeader: "Bachelors of Technology in Information Technology",
      duration: "August 2019 - July 2023",
      desc: "CGPA : 9.2"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Dum Dum Airport Hindi High School",
      logo: require("./assets/images/SchoolLogo.jpg"),
      subHeader: "Higher Secondary in PCM",
      duration: "June 2017 - May 2019",
      desc: "Percentage : 75%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "87%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "79%"
    },
    {
      Stack: "Development",
      progressPercentage: "68%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Extern",
      company: "Crio.Do",
      companylogo: require("./assets/images/CrioLogo.jpg"),
      date: "Dec 2020 – Jan 2021",
      desc: "This is a externship program in which I have been trained on Web Developer Essentials & made a portfolio website.",
      descBullets: [
        "Skills : Git | Linux Basics | Amazon Web Services (AWS) | HTTP | Cloud Deployment(Heroku) | REST API",
        "Link to Portfolio Website : https://aniketsinghcoder.netlify.app"
      ]
    },
    {
      role: "Open Source Contributor",
      company: "GWOC",
      companylogo: require("./assets/images/GWOCLogo.jpg"),
      date: "Sep 2021 – Dec 2021",
      desc: "I have participated as a contributor & contributed in the DSA Documentation part.",
      descBullets: [
        "I was also the Top Contributor in the domain of DSA.",
        "Skills : Open Source | Building Connections | Git | DSA (Data Structure & Algorithms)"
      ]
    },
    {
      role: "Core Java Trainee",
      company: "Internshala",
      companylogo: require("./assets/images/InternshalaLogo.png"),
      date: "Jun 2022 – Jul 2022",
      desc: " In this program, I have learnt the Basics of Java, Object-Oriented Programming on Java & Core Java Concepts & also implemented them by doing some projects on it.",
      descBullets: [
        "Skills : Java Basics | OOPS | Core Java",
        "I was one of the Top Performers in the this program."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects that I have worked upon",
  projects: [
    {
      image: require("./assets/images/AniChat.png"),
      projectName: "AniChat",
      projectDesc:
        "Realtime Chat Application that made using ReactJS,Firebase & ChatEngine.io",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anichat.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/Aniketsinghcoder/AniChat/"
        }
      ]
    },
    {
      image: require("./assets/images/RecetomaniaLogo.jpeg"),
      projectName: "Recetomania",
      projectDesc:
        "Food Recipe Search App made using ReactJS & EdMam Recipe Search API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://recetomania.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/Aniketsinghcoder/Recetomania"
        }
      ]
    },
    {
      image: require("./assets/images/URLShortenerLogo.jpeg"),
      projectName: "URL Shortener",
      projectDesc: "URL Shortener made using NodeJS,MongoDB & REST API",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // },
        {
          name: "Source Code",
          url: "https://github.com/Aniketsinghcoder/URL-Shortener"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TCS Codevita Season 10 2022",
      subtitle: "Secured a Global Rank of 980 in TCS Codevita Season 10 2022 ",
      image: require("./assets/images/CodevitaLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: " https://drive.google.com/file/d/1tTXY1Nuks6qR9UcSAAmxYOvLfifyEtj-/view?usp=sharing"
        }
      ]
    },
    {
      title: "WhiteHat Jr Certified Data Analyst",
      subtitle:
        "I has been selected for the AI Foundation Course you applied for at WhiteHat Jr.in collaboration with FutureSkills Prime(MeitY).",
      image: require("./assets/images/whitehatLogo.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://s3-whjr-v2-prod-bucket.whjr.online/2892d3ea-d091-4efb-b288-052627a2410e.pdf"
        }
      ]
    },

    {
      title: "Google Cloud Facilator Participant",
      subtitle: "Successfully Completed Google Cloud Quests",
      image: require("./assets/images/cloudLogo.webp"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.qwiklabs.com/public_profiles/fdf97b66-b3f5-4e85-b057-904fa5d45f88"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8013247204",
  email_address: "aniketsingh212408@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
