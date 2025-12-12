import { useEffect, useRef, useState } from "react"

interface User {
    name: string , 
    age: number
}

const Button = () => {

    useEffect(() => {})

    const ref =  useRef< HTMLButtonElement | null >(null)
    return(
        <>
            <button
                ref = {ref}
                className = {`rounded  text-white py-2 e px-3 bg-red-700  `}>
                click Me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN