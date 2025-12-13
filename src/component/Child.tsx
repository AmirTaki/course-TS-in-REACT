import { useReducer,  type ChangeEvent,  type ReactNode } from "react"

type childrentType = {
    children: (val: number) => ReactNode
}


const Child = ({children}: childrentType) => {


    const initialState = {count: 0, counter: 1}

    const enum REDUCER_ENUM  {
        INCREMENT ,
        DECREMENT ,
        NEW_INPUT,
    }

    type ReducerAction = {
        type : REDUCER_ENUM,
        payload?: string 
    }

    const Reducer = (state:typeof initialState , action: ReducerAction ): typeof initialState => {
        switch(action.type){
            case REDUCER_ENUM.INCREMENT:
                return {...state, count: state.count + state.counter }

            case REDUCER_ENUM.DECREMENT:
                return {...state, count: state.count - state.counter}

            case REDUCER_ENUM.NEW_INPUT: 
                return {...state, counter : Number(action.payload) }
        
            default : 
                throw new Error()
        }

    }
    const [state, dispatch] = useReducer(Reducer, initialState)

    const increment = () => {dispatch({type : REDUCER_ENUM.INCREMENT })}
    
    const decrement = () => {dispatch({type: REDUCER_ENUM.DECREMENT})}

    const handlerTextInput = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({type : REDUCER_ENUM.NEW_INPUT, payload: e.target.value})
    }
    return(
        <div className="">

            <h1>{children(state.count)}</h1>
            <div className="flex flex-col gap-3">
                <button className="border-2 w-10 border-red-700" onClick={increment} >+</button>
                <button className="border-2 w-10 border-red-700" onClick={decrement} >-</button>
            </div>
            <input type="number" onChange={handlerTextInput} className="border-red-500 border-2"/>
            {state.counter}
        </div>
    )
}

export default Child