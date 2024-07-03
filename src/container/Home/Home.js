import React from 'react';
import Home2 from './Home2';
import Typewriter from 'typewriter-effect';
import home_img from '../../Assets/home.png';

const Home = () => {
  return (
    <div className='Home_ctr'>
      <div id='Home'>
          <div className='home_intro'>
              <div>
                  Hi There!<span className="wave"> 👋🏻</span><br/>
                  I'M <b><span className='cyan'>PARTH GOEL</span></b>
              </div>
              <div className='cyan typewriter'><Typewriter options={{ strings: ["Software Developer","Full Stack Developer","Front-End Developer","Back-End Developer",], autoStart: true, loop: true, deleteSpeed: 50,}}/></div>
          </div>
          <div className='home_img_section'>
              <img src={home_img} alt='Coder'/>
          </div>
      </div>
      <div><Home2 /></div>
    </div>
  )
}

export default Home;