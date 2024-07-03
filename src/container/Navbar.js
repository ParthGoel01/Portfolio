import React, {useState} from 'react';
import Navicon from '../components/Navicon';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineHome, AiOutlineFundProjectionScreen ,AiOutlineUser} from "react-icons/ai";

const Menu = () => {
  return (
    <>
      <a href='/'><Navicon text='Home' icon={AiOutlineHome}/></a>
      <a href='/About'><Navicon text='About' icon={AiOutlineUser}/></a>
      <a href='/Projects'><Navicon text='Projects' icon={AiOutlineFundProjectionScreen}/></a>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id='navbar'>
        <div className='nav_logo'>PG.</div>
        <div className='nav_contents'>
            <a href='/'><Navicon text='Home' icon={AiOutlineHome}/></a>
            <a href='/About'><Navicon text='About' icon={AiOutlineUser}/></a>
            <a href='/Projects'><Navicon text='Projects' icon={AiOutlineFundProjectionScreen}/></a>
        </div>
        <div className='nav_toggle'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && 
            <div className='nav_dropdown'>
              <Menu />
            </div>}
        </div>
    </div>
  )
}

export default Navbar;