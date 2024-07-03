import React from 'react';
import { AiFillGithub, AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Social from '../../components/Social';
import Avatar from '../../Assets/avatar.svg';

const Home2 = () => {
  return (
    <div id='Home2'>
        <div className='home2_ctr'>
            <div className='home2_head'>LET ME <span className='cyan'>INTRODUCE</span> MYSELF</div>
            <div className='home2_ctr-1'>
                <div className='home2_ctr_content'>
                    <div className="home-about-body">
                        <br />I am an enthusiastic learner dedicated to developing robust <i><b className="cyan">Data Structures and Algorithms (DSA)</b></i> solutions.
                        <br /><br />With proficiency in foundational languages including <i><b className="cyan">C, C++, and JavaScript</b></i>, I am passionate about advancing web technologies and product development.
                        <br /><br />I specialize in utilizing modern JavaScript libraries and frameworks such as <i><b className="cyan">Node.js, Express.js, and React.js</b></i> to innovate and create impactful solutions.
                    </div>
                </div>
                <div className='home2_avatar'><img src={Avatar} alt='Avatar' /></div>
            </div>
        </div>
        <div className='home2_contact_ctr'>
            <div className='home2_contact_head'>FIND ME ON</div>
            <div>Feel free to <span className='cyan'>connect</span> with me</div>
            <div className='home2_icons'>
                <a href='https://github.com/ParthGoel01'><Social icon={AiFillGithub}/></a>
                <a href='https://www.linkedin.com/in/parth-goel-dtu/'><Social icon={FaLinkedinIn}/></a>
                <a href='mailto:parthgoel2805@gmail.com'><Social icon={AiOutlineMail}/></a>
            </div>
        </div>
    </div>
  )
}

export default Home2