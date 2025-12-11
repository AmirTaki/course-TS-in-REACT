import type { JSX } from "react"

type ButtonProps = { 
    children: JSX.Element,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number

}
const Button = ({count = 120}) => {


    return(
        <>
            <button
                // onClick={() => {setCount((prevCount: number) => (prevCount + 1))}}
                className="rounded  py-2 bg-blue-500 text-white px-3">
                Click me
            </button>
            {count}
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN