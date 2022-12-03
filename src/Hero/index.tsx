import React from 'react';
import about from '../ts/about';

const Hero = ():any => {
    const {name, age} = about
    return (
      <div className="hero">
        <h1><span className="underline">{name}</span></h1>
        <p>Is a {age} cycles old, Fullstack Developer</p>
      </div>
    )
}

export default Hero