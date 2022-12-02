import React from 'react';
import about from './about'

const Render = ():any => {
    const info:any = Object.entries(about).map(([key, val])=> (<p>{key.toLocaleUpperCase()} : {val}</p>))
    return (
        <div className='TypeScript'>
            <h1>Let's Learn TypeScript!</h1>
            {info}
        </div>
    )
}

export default Render