import React from 'react'
//import connectVersa from '../../srv/vdb'

const Email = ():JSX.Element => {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <input placeholder='Your name'/>
            <input placeholder='Email'/>
            <textarea placeholder='Message' />
            <button>Send</button>
        </div>
    )
}

export default Email