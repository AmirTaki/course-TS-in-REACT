

type ButtonProps = { 
    children: React.ReactNode

}
const Button = ({children}: ButtonProps) => {


    return(
        <>
            <button
                className="rounded  py-2 bg-blue-500 text-white px-3">
                {children}
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN