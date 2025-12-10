
const Button = ({backgroundColor, size, pillShape}: {backgroundColor: string, size: number, pillShape: boolean}) => {
    
    
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