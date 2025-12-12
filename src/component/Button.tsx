import { useState } from "react"

interface User {
    name: string , 
    age: number
}

const Button = () => {
    const [count, setCount] = useState<number>(0)
    const [text, setText] = useState<string>("Click me!")
    const [isPrimary, setIsPrimary] = useState(true)

    const [user, setUser] = useState<User | null>(null)

    const name = user?.name
    const age = user?.age


    return(
        <>
            <button
               
                className = {`rounded  text-white py-2 e px-3 bg-red-700  `}>
                click Me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN