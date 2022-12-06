import React from 'react'
import TypeScriptLogo from "./TypeScriptLogo"
const about:readonly [string, number, JSX.Element] = [
    "Kjell Harald Pedersen",
    new Date().getFullYear() % 1991, 
    <span>Made in React, using <img src={TypeScriptLogo} alt="TypeScript" className='TypeScriptLogo'/> TypeScript.</span>
]
export default about