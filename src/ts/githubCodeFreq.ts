import {useEffect, useState} from 'react'

const CodeFrequency = ():any => {
    const [codebase, initCode] = useState([])
    const codefreq = async () => {
        const response = await fetch("https://api.github.com/repos/KjellHarald/kjellharald.github.io/languages", {
            "method": "GET",
            "mode": "cors"
        })
        if(response.ok){
            return response.json()
        }
    }
    useEffect(()=>{
        codefreq()
        .then((res)=>{
            initCode(res)
        })
        
    }, [])

    let codeSum:number = 0
    Object.entries(codebase).map((val)=> {
        codeSum += val[1]
    })
    return [codebase, codeSum]
}