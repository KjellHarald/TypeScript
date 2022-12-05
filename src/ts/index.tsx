import React from 'react';
import Hero from '../Hero';
import projects from './projectData'
import About from '../About';
import HtmlBarCreator from './prog/bar'
import MadeIn from '../MadeIn'

const RenderProject = ():any => {
    const proj:any = projects.map((project) => {
        const {name, website, description, languages} = project
        return (
            <div className='project'>
                {HtmlBarCreator(languages)}
                <div className='project-info'>
                    <h2 className='project--title'>{name}</h2>
                    <p className='project--website'><a href={website}>{website}</a></p>
                    <p className='project--description'>{description}</p>
                </div>
            </div>
        )
    })
    return proj
}

const Render = ():any => {
    return (
        <div className='TypeScript'>
            <Hero />
            <About />
            <div className='projects'>
                <RenderProject />
            </div>
            <MadeIn />
        </div>
    )
}

export default Render