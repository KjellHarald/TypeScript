import React from 'react';
import about from './about'
import projects from './projectData'

const RenderProject = ():any => {
    const proj:any = Object.entries(projects).map((val) => console.log(val))
    return (
        <div className='project'>
            {proj}
        </div>
    )
}

const Render = ():any => {
    const info:any = Object.entries(about).map(([key, val])=> (<p>{key.toLocaleUpperCase()} : {val}</p>))
    return (
        <div className='TypeScript'>
            <h1>Let's Learn TypeScript!</h1>
            {info}
            <div className='projects'>
                <RenderProject />
            </div>
        </div>
    )
}

export default Render