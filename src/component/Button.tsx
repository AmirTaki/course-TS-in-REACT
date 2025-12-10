
type ButtonProps = {    
    backgroundColor: 'red' | 'blue' | 'green', 
    textColor: 'black' | 'white' | 'yellow'
    size: any, 
    pillShape?: boolean
}
const Button = ({backgroundColor, size, textColor}: ButtonProps) => {


    return(
        <>
            <button 
                style={{background : backgroundColor, fontSize : size, color : textColor }}
                className="bg-blue-500 text-white rounded px-4 py-2">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN