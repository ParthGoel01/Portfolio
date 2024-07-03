import React from 'react';

const NavIcon = (props) => {
  const IconComponent = props.icon;
  return (
    <div id='navicon'>
        <div className='navicon_content'>
            <div className='navicon_logo'><IconComponent/></div>
            <div>{props.text}</div>
        </div>
        <div className='navicon_line'></div>
    </div>
  )
}

export default NavIcon;