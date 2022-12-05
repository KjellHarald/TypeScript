const projects: {
    name:string,
    website:string,
    description:string,
    languages: {name:string, percentage:number, color:string}[]
}[] = [
    {
        name: "VersaDB",
        website: "https://versa-db.com/",
        description: "A Document-oriented database system written in Python.",
        languages: [
            {
                name: "Python",
                percentage: 100,
                color: "#3572A5"
            },
            {
                name: "ph",
                percentage: 0,
                color: "#000"
            },
            {
                name: "ph",
                percentage: 0,
                color: "#000"
            },
            {
                name: "ph",
                percentage: 0,
                color: "#000"
            }
        ]
    },
    {
        name: "Kids Do HPC",
        website: "https://kidsdohpc.org/",
        description: "A complete \"datacenter\" containing, Database, Dashboard, APIs, Login/Registration, cross-system communications and security software.",
        languages: [
            {
                name: "PHP",
                percentage: 25,
                color: "cyan"
            },
            {
                name: "Python",
                percentage: 58,
                color: "#3572A5"
            },
            {
                name: "HTML",
                percentage: 13,
                color: "red"
            },
            {
                name: "CSS",
                percentage: 3,
                color: "blue"
            }
        ]
    },
    {
        name: "Portfolio",
        website: "https://github.com/KjellHarald/TypeScript-Portfolio",
        description: "Learning TypeScript",
        languages: [
            {
                name: "TypeScript",
                percentage: 58, 
                color: "#3178c6"
            },
            {
                name: "JavaScript",
                percentage: 10, 
                color: "yellow"
            },
            {
                name: "HTML",
                percentage: 8, 
                color: "red"
            },
            {
                name: "CSS",
                percentage: 22, 
                color: "blue"
            }
        ]
    }
]

export default projects