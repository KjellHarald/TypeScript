import React from 'react';
import Hero from '../Hero';
import projects from './projectData'
import About from '../About';
import HtmlBarCreator from './prog/bar'

const RenderProject = ():any => {
    const proj:any = projects.map((project) => {
        const {name, website, description} = project
        return (
            <div className='project'>
                <h2 className='project--title'>{name}</h2>
                <p className='project--website'><a href={website}>{website}</a></p>
                <p className='project--description'>{description}</p>
            </div>
        )
    })
    return proj
}

const Render = ():any => {
    HtmlBarCreator()
    return (
        <div className='TypeScript'>
            <Hero />
            <About />
            <div className='projects'>
                <RenderProject />
            </div>
        </div>
    )
}

export default Render