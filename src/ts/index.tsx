import React from 'react';

const personInfo: {
    name: string, 
    age: number
    } = {
    name: "Kjell Harald",
    age: 31
}


const Render = ():any => {
    return (
        <div className='TypeScript'>
            <p>Let's Learn TypeScript.tsx</p>
            {Object.entries(personInfo).map(([key, val])=> (<p>{key} : {val}</p>))}
        </div>
    )
}

export default Render