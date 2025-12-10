
type Color = 'black' | 'white' | 'yellow'

type ButtonProps = {  
    style : {
        backgroundColor: 'red' | 'blue' | 'green', 
        textColor: Color
        size: any, 
        pillShape?: boolean,
        padding: string // tuple
    }  
}
const Button = ({style}: ButtonProps) => {


    return(
        <>
            <button 
                style={style}
                className="bg-blue-500 text-white rounded  py-2">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN