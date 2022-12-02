import React from 'react';
// HTML Bar Graph Creator
const HtmlBarCreator = () => {
    // test input
    const objArr = [
        {
            name: "HTML",
            percentage: 10,
            color: "red"
        },
        {
            name: "JavaScript",
            percentage: 5,
            color: "yellow"
        },
        {
            name: "TypeScript",
            percentage: 85,
            color: "cyan"
        }
    ]

    // Do dah mathy stoof
    //const defaultMargin: number = 0
    const margin: number = 20
    let width:number = 0

    // Prepare output

    //const output = []

    const bars = objArr.map((obj)=>{
        const {name} = obj
        
        //const style = `height:${percentage}%;width:20px;left:${defaultMargin}px;background-color:${color};`
        width += (margin * 1)
        return (<div id={name} title={name}></div>)
    })

    //output.push(`<style>.barplot {position: fixed;border:1px solid #000;height:100px;display:flex;flex-direction: row;justify-content: flex-start;width: ${width}px;}.barplot > div {position: absolute;display:inline-block;width:20px;bottom:0;}</style>`)
    //console.log(output)
    //console.log(width)

    return (
        <div className="barplot">
            {bars}
        </div>
    )
}

export default HtmlBarCreator