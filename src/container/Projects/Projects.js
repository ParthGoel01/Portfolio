import React from 'react';
import ProjectCard from './ProjectCard';
import {MAYA,OpenAI,calculator,weather,CodeEditor,Atlas} from '../../Assets/Projects/export';

const Projects = () => {
  return (
    <div id='Projects'>
      <div className='project_head'>
        <div className='project_head_big'>MY RECENT <span className='cyan'>WORKS</span></div>
        <div>Here are a few projects I've worked on recently.</div>
      </div>
      <div className='project_cards'>
      <ProjectCard img={MAYA} title="MAYA AI" desc="A sophisticated full-stack chatbot that leverages the stable-diffusion API to transform text inputs into vivid images. Developed using HTML, CSS, JS, Node.js, Express.js, and PostgreSQL." ghLink="https://github.com/ParthGoel01/MAYA-AI" demoLink="https://maya-zeta.vercel.app/"/>
      <ProjectCard img={Atlas} title="Adventure Atlas" desc="A full-stack web app designed to help users track their country visits on a map. Includes educational games like 'Guess the Country', 'Guess the Capital' etc. Built using HTML, CSS, JS, Node.js, Express.js, and PostgreSQL." ghLink="https://github.com/ParthGoel01/Adventure-Atlas" demoLink="https://adventure-atlas-project.vercel.app/"/>
      <ProjectCard img={OpenAI} title="OpenAI Homepage" desc="A visually appealing web template showcasing an OpenAI feature, inspired by a Figma design. Highlighting Front-End development skills. Built using HTML, CSS, JS, ReactJS." ghLink="https://github.com/ParthGoel01/chatbot-homepage" demoLink="https://chatbot-homepage.vercel.app/"/>
      <ProjectCard img={CodeEditor} title="Front-End Code Editor" desc="An online front-end code editor enabling users to write HTML, CSS, and JavaScript code and view the results in real-time. Built with a focus on simplicity and efficiency using HTML, CSS, and JavaScript." ghLink="https://github.com/ParthGoel01/frontend-code-editor" demoLink="https://parthgoel01.github.io/frontend-code-editor/"/>
      <ProjectCard img={weather} title="Weather App" desc="A user-friendly application that provides current weather conditions based on the user's input location. Utilizes OpenWeatherMap API for real-time updates. Built with HTML, CSS, and JavaScript." ghLink="https://github.com/ParthGoel01/weather-app" demoLink="https://parthgoel01.github.io/weather-app/"/>
      <ProjectCard img={calculator} title="Basic Calculator" desc="A versatile calculator designed to solve various mathematical problems, featuring both light and dark modes. Developed using HTML, CSS, and JavaScript." ghLink="https://github.com/ParthGoel01/calculator" demoLink="https://parthgoel01.github.io/calculator/"/>
      </div>
    </div>
  )
}

export default Projects;