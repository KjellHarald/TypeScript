import React from 'react'
import languages from '../ts/languages'

const Skills = ():any => {
    const skills:JSX.Element[] = languages.map(lang => {
        const {name, experience, color} = lang
        return (
            <div className={name}>
                <p className='language-name'>{name} / {experience}%</p>
                <div className='experience' style={{width: `${experience}%`, backgroundColor: color}}></div>
            </div>
        )
    })
    return (
        <div className='mySkills'>
            <h2>Skills</h2>
            <p>Self evaluated "skill" level of diffirent languages.</p>
            {skills}
        </div>
    )
}

export default Skills