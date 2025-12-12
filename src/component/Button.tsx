const buttonTextOptions = [
    "Click me!",
    "Click me again!",
    "Click me one more time!"
] as const

const Button = () => {

    return(
        <>
            <button
                className = {`rounded  text-white py-2 e px-3 bg-red-700  `}>
                {buttonTextOptions.map((option) => {
                    return option
                })}
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN