

type ButtonProps = { 

    onClick : (value: string) => number
}
const Button = ({onClick}: ButtonProps) => {


    return(
        <>
            <button 
                onClick={()=> {onClick('test')}}
                className="rounded  py-2 bg-blue-500 text-white px-3">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN