import React from 'react'
import Hero from '../Hero'
import Nav from '../Nav'
import projects from './projectData'
import About from '../About'
import HtmlBarCreator from './prog/bar'
import Skills from '../Skills'
import MadeIn from '../MadeIn'

const RenderProject = ():JSX.Element => {
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

const Render = ():JSX.Element => {
    return (
        <>
            <Hero />
            <Nav />
            <About />
            <Skills />
            <div className='projects' id="projects">
                <RenderProject />
            </div>
            <MadeIn />
        </>
    )
}

export default Render