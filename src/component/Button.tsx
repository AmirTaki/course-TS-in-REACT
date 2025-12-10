

type ButtonProps = {    
    backgroundColor: string, 
    size: number, 
    pillShape: boolean
}
const Button = ({backgroundColor, size, pillShape}: ButtonProps) => {
    
    
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