import React from 'react';
import Skill from '../../components/Skill';
import { CgCPlusPlus } from "react-icons/cg";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { SiMysql, SiOracle, SiPostgresql } from "react-icons/si";

const About2 = () => {
  return (
    <div>
        <div className='about2_head'>Professional <span className='cyan'>Skillset</span></div>
        <div className='skills'>
            <Skill text='C/C++' icon={CgCPlusPlus}/>
            <Skill text='HTML' icon={DiHtml5}/>
            <Skill text='CSS' icon={DiCss3}/>
            <Skill text='Javascript' icon={DiJavascript1}/>
            <Skill text='ReactJS' icon={DiReact}/>
            <Skill text='NodeJS' icon={DiNodejs}/>
            <Skill text='PostgreSQL' icon={SiPostgresql}/>
            <Skill text='MySQL' icon={SiMysql}/>
            <Skill text='Oracle' icon={SiOracle}/>
            <Skill text='Git' icon={DiGit}/>
        </div>
    </div>
  )
}

export default About2