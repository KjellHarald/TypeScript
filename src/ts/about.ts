const about:readonly [string, number, string] = [
    "Kjell Harald Pedersen",
    new Date().getFullYear() % 1991, 
    "Made in React, with TypeScript."
]

// ???? 
/*
const About: {
    name: string,
    age: number,
    madeIn: string
} = {
    name: about[0],
    age: about[1],
    madeIn: about[2]
}
*/
export default about