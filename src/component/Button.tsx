import type {  ComponentPropsWithRef } from "react"

// type ButtonPorps = React.ComponentProps<'button'>
type ButtonPorps = ComponentPropsWithRef<'button'> &

{
    variant: 'blue' | 'pink'
}


const Button = ({type, autoFocus, children, ref, variant, ...rest}: ButtonPorps ) => {


    return(
        <>
            <button
                ref = {ref}
                type = {type}
                autoFocus = {autoFocus}
                {...rest}
                style={{color: variant}}
                className = {`rounded  py-2 e px-3 bg-red-700 `}>
                {children}
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN