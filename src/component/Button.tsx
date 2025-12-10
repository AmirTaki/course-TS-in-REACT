

type ButtonProps = { 
    // borderRadius : {
    //     topLeft: number, 
    //     topRight: number,
    //     bottomRight: number,
    //     bottomLeft: number
    // }

    borderRadius: Record<string, number>
}
const Button = ({borderRadius}: ButtonProps) => {


    return(
        <>
            <button 
                style={{borderRadius: `${borderRadius.topRight}px ${borderRadius.topLeft}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px` }}
                className="rounded  py-2 bg-blue-500 text-white px-3">
                Click me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 8:20


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN