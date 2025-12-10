
const Button = (props: {backgroundColor: string}) => {
    
    // const backgroundColor = props.backgroundColor
    const {backgroundColor} =  props
    
    return(
        <>
            <button 
                style={{color : backgroundColor}}
                className="bg-blue-500 text-white rounded px-4 py-2">
                Click me
            </button>
        </>
    )
}

export default Button