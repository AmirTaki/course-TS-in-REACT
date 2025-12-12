import type { ComponentProps } from "react"

// type ButtonPorps = React.ComponentProps<'button'>
type ButtonPorps = ComponentProps<'button'>


const Button = ({type, autoFocus, children}: ButtonPorps ) => {


    return(
        <>
            <button
                type = {type}
                autoFocus = {autoFocus}
                className="rounded  py-2 bg-blue-500 text-white px-3">
                {children}
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN