

type ButtonProps = {    
    backgroundColor: string, 
    size: any, 
    pillShape?: boolean
}
const Button = ({backgroundColor, size, }: ButtonProps) => {
    size.toUpperCase()

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