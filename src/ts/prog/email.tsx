import React, {useState} from 'react'
//import connectVersa from '../../srv/vdb'

const Email = ():JSX.Element => {
    const [formInfo, setFormInfo] = useState({name:"", email: "", msg: ""})
    const [emailResponse, setEmailResponse] = useState("")
    
    const updateForm = (event:any):any => {
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }

    const deliverMsg = async () => {
        const response = await fetch('https://khps.no/mail/', {
            "method": "POST",
            body: JSON.stringify(formInfo)
        })

        const responseMessage = await response.text()
        setEmailResponse(responseMessage)
        setFormInfo({name:"", email: "", msg: ""})
    }

    return (
        <div className='contact'>
            <h2>Contact</h2>
            <input onChange={(event)=>updateForm(event)} name="name" value={formInfo.name} placeholder='Your name'/>
            <input onChange={(event)=>updateForm(event)} name="email" value={formInfo.email} placeholder='Email'/>
            <textarea onChange={(event)=>updateForm(event)} name="msg" value={formInfo.msg} placeholder='Message' />
            {emailResponse !== "" ? <button onClick={deliverMsg} disabled>Send</button> : (<button onClick={deliverMsg}>Send</button>)}
            <p>{emailResponse}</p>
        </div>
    )
}

export default Email