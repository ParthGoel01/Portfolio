import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div className='project_card'>
        <div><img src={props.img} alt='Project'/></div>
        <div className='project_card_title'>{props.title}</div>
        <div>{props.desc}</div>
        <div className='project_links'>
            <a href={props.ghLink} target='_blank' rel="noreferrer"><div className='project_github'><BsGithub />Github</div></a>
            <a href={props.demoLink} target='_blank' rel="noreferrer"><div className='project_demo'><CgWebsite />Demo</div></a>
        </div>
    </div>
  )
}

export default ProjectCard