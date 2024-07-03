import React from 'react';
import About2 from './About2';
import { ImPointRight } from "react-icons/im";
import aboutImg from '../../Assets/about.png'

const About = () => {
  return (
    <div id='about_ctr'>
        <div id='About'>
            <div className='about_ctr'>
                <div className='about_head'>Know Who <span className='cyan'>I'M</span></div>
                <div>Hi Everyone, I am <span className='cyan'>Parth Goel</span> from UP, India.
                I am currently pursuing B.Tech. in Information Technology at <span className='cyan'>Delhi Technological University (DTU)</span>, New Delhi.
                </div>
                <div>
                Apart from coding, some other activities that I love to do!
                <br />
                <ImPointRight /> Playing Games <br/>
                <ImPointRight /> Travelling <br />
                <ImPointRight /> Helping Others <br />
                </div>
            </div>
            <div className='about_img'><img src={aboutImg} alt='Coder' /></div>
        </div>
        <div id='About2'><About2 /></div>
    </div>
  )
}

export default About