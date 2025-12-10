

type ButtonProps = {    
    backgroundColor: string, 
    size: number, 
    pillShape?: boolean
}
const Button = ({backgroundColor, size, }: ButtonProps) => {
    
    backgroundColor.toUpperCase()
    // size.toUpperCase()
    size.toString()
    return(
        <>
            <button 
                style={{color : backgroundColor, fontSize : size }}
                className="bg-blue-500 text-white rounded px-4 py-2">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN