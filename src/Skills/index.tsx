import React from 'react'
import languages from '../ts/languages'

const Skills = ():JSX.Element => {
    const skills:JSX.Element[] = languages.map(lang => {
        const {name, experience, color} = lang
        const styling:any = {
            width: `${experience}%`,
            backgroundColor: color
        }
        return (
            <div className={name}>
                <p className='language-name'>{name} / {experience}%</p>
                <div className='experience' style={styling}></div>
            </div>
        )
    })
    return (
        <div className='mySkills' id="skills">
            <h2>Skills</h2>
            <p>Self evaluated "skill" level of diffirent languages.</p>
            {skills}
        </div>
    )
}

export default Skills