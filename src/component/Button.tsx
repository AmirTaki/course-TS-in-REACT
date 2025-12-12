import { useEffect } from "react"

const Button = () => {    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data: unknown) => {
            console.log(data)

            // run it through Zod
            // cont todo = todoSchema.parse(data)
            
            // do something with the data
            
        })
    }, [])
    return(
        <>
            <button
                className = {`rounded  text-white py-2 e px-3 bg-red-700  `}>
                    Click me!
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN