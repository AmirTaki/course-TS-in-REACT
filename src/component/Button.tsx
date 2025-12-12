type ButtonProps = {
    type : 'button' | 'submit' | 'reset';
    color: 'red' | 'blue' | 'green'
}

type SuperButtonProps = ButtonProps & {
    size: 'md' | 'lg'
}

const Button = ({type, color, size}: SuperButtonProps) => {
    return(
        <>
            <button
                type = {type}
                style = {{color: color}}

                className = {`rounded  text-white py-2 e px-3 bg-red-700 ${size} `}>
                click Me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN