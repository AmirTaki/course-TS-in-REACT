import { useEffect } from "react"

type ButtonColor = 'red' | 'green' | 'blue'

const Button = () => {

    useEffect(() => {
        const previousButtonColor = localStorage.getItem('buttonColor') as ButtonColor 
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