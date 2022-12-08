import React, {useState} from 'react'
//import connectVersa from '../../srv/vdb'

const Email = ():JSX.Element => {
    const [formInfo, setFormInfo] = useState({name:"", email: "", msg: ""})
    const [emailResponse, setEmailResponse] = useState("")
    
    const updateName = (value:any):any => {
        setFormInfo({
            ...formInfo,
            name: value
        })
    }
    const updateEmail = (value:any):any => {
        setFormInfo({
            ...formInfo,
            email: value
        })
    }
    const updateMsg = (value:any):any => {
        setFormInfo({
            ...formInfo,
            msg: value
        })
    }
    

    const deliverMsg = async () => {
        const response = await fetch('https://khps.no/mail/', {
            "method": "POST",
            body: JSON.stringify(formInfo)
        })

        const responseMessage = await response.text()
        setEmailResponse(responseMessage)
    }
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <input onChange={(event)=>updateName(event.target.value)} placeholder='Your name'/>
            <input onChange={(event)=>updateEmail(event.target.value)} placeholder='Email'/>
            <textarea onChange={(event)=>updateMsg(event.target.value)} placeholder='Message' />
            <button onClick={deliverMsg}>Send</button>
            <p>{emailResponse}</p>
        </div>
    )
}

export default Email