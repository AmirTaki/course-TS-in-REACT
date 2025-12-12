import React from "react"


const convertToArray =  <T,>(value: T ): Array<T> => {
    return [value]
}


function ConverToArray <T,> (value:T): T[] {
    return [value]
} 

convertToArray<number>(5)
convertToArray <string> ('Hello')
convertToArray<boolean>(true)
convertToArray<Array<string>> (['hello', 'js', 'ts'])

const Button = () => {    
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