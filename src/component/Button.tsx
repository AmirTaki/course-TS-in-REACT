

const Button = () => {

    const handlerClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event)
    }   

    return(
        <>
            <button
                onClick={handlerClick}
                className = {`rounded  text-white py-2 e px-3 bg-red-700  `}>
                click Me
            </button>
        </>
    )
}

export default Button

// https://www.youtube.com/watch?v=TPACABQTHvM 17:45


// https://www.youtube.com/watch?v=t6C5stFcmKk&list=PLjF2hdyaGueMSCilyF3OgykRYZZ562WnN