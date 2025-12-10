

type ButtonProps = {  
    style : React.CSSProperties
}
const Button = ({style}: ButtonProps) => {


    return(
        <>
            <button 
                style={style}
                className="rounded  py-2">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN