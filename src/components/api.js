// import {
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   Sass,
//   bootstrap,
//   git,
//   figma,
//   docker,
//   threejs,
//   github,
// } from "../assets/images";
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import javascript from "../assets/images/javascript.png"
import typescript from "../assets/images/typescript.png"
import reactjs from "../assets/images/reactjs.png"
import nextjs from "../assets/images/next.png"
import redux from "../assets/images/redux.png"
import tailwind from "../assets/images/tailwind.png"
import nodejs from "../assets/images/nodejs.png"
import mongodb from "../assets/images/mongodb.png"
import Sass from "../assets/images/Sass.svg"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import threejs from "../assets/images/threejs.svg"
import firebase from "../assets/images/firebase.png"
import canva from "../assets/images/canva.png"
import resposive from "../assets/images/responsive-design.png"
import typing from "../assets/images/typing.png"
import bootstrap from "../assets/images/bootstrap.png"

import calculator from "../assets/projects/calculator.png"
import fitnesApp from "../assets/projects/fitnesApp.png"
import javascriptproject from "../assets/projects/javascriptproject.png"
import kitchensStore from "../assets/projects/kitchensStore.png"
import loginForm from "../assets/projects/loginForm.png"
import memeGenerator from "../assets/projects/memeGenerator.png"
import moon from "../assets/projects/moon.png"
import musicApp from "../assets/projects/musicApp.png"
import Notes from "../assets/projects/Notes.png"
import number from "../assets/projects/number.png"
import numbersorter from "../assets/projects/numbersorter.png"  
import reactTODO from "../assets/projects/reactTODO.png"
import reduxblog from "../assets/projects/reduxblog.png"
import responsiveApp from "../assets/projects/responsiveApp.png"
import restaurnat from "../assets/projects/restaurnat.png"
import shoesStore from "../assets/projects/shoesStore.png"
import story from "../assets/projects/story.png"
import Vanliife from "../assets/projects/Vanliife.png"
import videowebsite from "../assets/projects/videowebsite.png"
import weatherApp from "../assets/projects/weatherApp.png"
import estate from "../assets/projects/estate.png"
import promptopia from "../assets/projects/Promptopia.png"
import pizza from "../assets/projects/Pizza.png"
import Ecommerce from "../assets/projects/Ecommerce.png"

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs
  },
  {
    name: "Firebase",
    icon: firebase
  },
  // {
  //   name: "Redux",
  //   icon: redux,
  // },
  // {
  //   name: "BootStrap",
  //   icon: bootstrap,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: Sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Canva",
    icon: canva
  },
  {
    name: "Responsive W D",
    icon: resposive
  },
  {
    name: "Fast Typing",
    icon: typing
  },
];

const projects = [
  {
    name: "E-commerce Payloadcms",
    icon: Ecommerce,
    link: ""
  },
  {
    name: "Weather App",
    icon: weatherApp,
    link: "https://github.com/Taha-Alawa/weather-app.git"
  },
  {
    name: "fitness App",
    icon: fitnesApp,
    link: "https://github.com/Taha-Alawa/fitness.git",
    special: "yes"
  },
  {
    name: "Promptopia",
    icon: promptopia,
    link: "https://github.com/Taha-Alawa/promptopiaai.git"
  },
  {
    name: "Estatein app",
    icon: estate,
    link: "https://estatein-1bcb0.web.app/",
  },
  {
    name: "restaurnat app",
    icon: restaurnat,
    link: "https://restaurant-33241.web.app/",
    special: "yes"
  },
  {
    name: "kitchens Store",
    icon: kitchensStore,
    link: "https://kitchensberlin1.web.app/",
    special: "yes"
  },
  {
    name: "Notes app",
    icon: Notes,
    link: "https://github.com/Taha-Alawa/Notes.git",
    special: "yes"
  },
  {
    name: "Pizza demo app",
    icon: pizza,
    link: "https://pizza-eight-theta.vercel.app/"
  },
  // {
  //   name: "Telephone Number Validator", 
  //   icon: number,
  //   link: "https://github.com/Taha-Alawa/Telephone-Number-Validator.git"
  // },
  // {
  //   name: "Number Sorter",
  //   icon: numbersorter,
  //   link: "https://github.com/Taha-Alawa/Number-Sorter.git"
  // },
  // {
  //   name: "Todo React App",
  //   icon: reactTODO,
  //   link: "https://github.com/Taha-Alawa/to-do-list-in-react.git"
  // },
  // {
  //   name: "redux blog",
  //   icon: reduxblog,
  //   link: "https://github.com/Taha-Alawa/advanced-redux-blog-project.git"
  // },
  // {
  //   name: "responsive App",
  //   icon: responsiveApp,
  //   link: "https://github.com/Taha-Alawa/Resposive-design.git"
  // },
  {
    name: "Shoes store",
    icon: shoesStore,
    link: "https://github.com/Taha-Alawa/shoes-store.git"
  },
  {
    name: "Story App",
    icon: story,
    link: "https://github.com/Taha-Alawa/story-project.git" 
  },
  {
    name: "Vanlife App",
    icon: Vanliife,
    link: "https://github.com/Taha-Alawa/vanlife.git"
  },
  {
    name: "website with video",
    icon: videowebsite,
    link: "https://github.com/Taha-Alawa/website-with-video.git"
  },
  {
    name: "Calculator React.js App",
    icon: calculator,
    link: "https://github.com/Taha-Alawa/calculator.git"
  },
  // {
  //   name: "Javascript Project",
  //   icon: javascriptproject,
  //   link: "https://github.com/Taha-Alawa/learning-js.git"
  // },
  {
    name: "login Form",
    icon: loginForm,
    link: "https://github.com/Taha-Alawa/login-form.git"
  },
  // {
  //   name: "meme Generator",
  //   icon: memeGenerator,
  //   link: "https://github.com/Taha-Alawa/meme-Genrator.git"
  // },
  {
    name: "moon images app",
    icon: moon,
    link: "https://github.com/Taha-Alawa/Moon.git"
  },
  {
    name: "music App",
    icon: musicApp,
    link: "https://github.com/Taha-Alawa/music-project.git"
  },
]

const specialProjects = [
  {
    name: "fitness App",
    icon: fitnesApp,
    link: "https://github.com/Taha-Alawa/fitness.git",
  },
  {
    name: "kitchens Store",
    icon: kitchensStore,
    link: "https://kitchensberlin1.web.app/",
  },
  {
    name: "Estatein app",
    icon: estate,
    link: "https://estatein-1bcb0.web.app/",
  },
  {
    name: "restaurnat app",
    icon: restaurnat,
    link: "https://restaurant-33241.web.app/",
  },
]

export {technologies, projects, specialProjects};