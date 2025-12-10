
type Color = 'black' | 'white' | 'yellow'

type ButtonProps = {    
    backgroundColor: 'red' | 'blue' | 'green', 
    textColor: Color
    size: any, 
    pillShape?: boolean,
    padding: string[]
}
const Button = ({backgroundColor, size, textColor, padding}: ButtonProps) => {


    return(
        <>
            <button 
                style={{
                        background : backgroundColor, 
                        fontSize : size,
                        color : textColor,
                        padding : `${padding[0]} ${padding[1]}`
                    }}
                className="bg-blue-500 text-white rounded  py-2">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN