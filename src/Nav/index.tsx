import React from 'react'

const Nav = ():JSX.Element => {
    return (
        <nav>
            <span className='underline'><a href="#skills">Skills</a></span>
            <span className='underline'><a href="#projects">Projects</a></span>
            <span className='underline'><a href="#contact">Contact</a></span>
        </nav>
    )
}
export default Nav