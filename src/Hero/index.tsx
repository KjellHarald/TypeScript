import React from 'react';
import about from '../ts/about';

const Hero = ():any => {
    return (
      <div className="hero">
        <h1><span className="underline">{about.name}</span></h1>
        <p>Is a {about.age} cycles old, Fullstack Developer</p>
      </div>
    )
}

export default Hero