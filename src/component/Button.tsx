import type { JSX } from "react"


interface IButtonProps {
    children: JSX.Element,
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

type Color = "red" | "blue" | 'green'

interface Colors  {
    color: 'red' | 'silver' | 'blue'
}



const Button = ({children, count, setCount}: IButtonProps) => {


    return(
        <>
            <button
                onClick={() => {setCount((prevCount: number) => (prevCount + 1))}}
                className="rounded  py-2 bg-blue-500 text-white px-3">
                {children}
            </button>
            {count}
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN