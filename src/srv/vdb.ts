import {useState} from 'react'

const connectVersa = async (cmd:string) => {
    const response:any = fetch('https://db.versa-db.com/', {
        "method": "POST"
    })
    if(!response.ok){
        const [versaRes, setVersa] = useState("")
        setVersa(response.text())
    }else{
        console.log('VersaDB Connection Error')
    }
}

export default connectVersa