import React from 'react'

const Skill = (props) => {
  const SkillIcon = props.icon;
  return (
    <div className='skill'>
        <div className='skill_icon'><SkillIcon /></div>
        <div className='skill_text'>{props.text}</div>
    </div>
  )
}

export default Skill;