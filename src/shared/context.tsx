import { createContext, useContext, useReducer } from "react"
import type { ReactNode } from "react";

export type Action = 'INCREMENT' | 'DECREMENT'
export type State = typeof defaultState;
export type Dispatches = (action: Action) => void

const defaultState  = {count: 0}


const CounterContext = createContext<
{
    state: State;
    dispatch: Dispatches
} | undefined>(undefined)



function counterReducer (state: State , action: Action ): State  {
    switch(action){
        case 'INCREMENT': 
            return {...state, count : state.count + 1}

        case 'DECREMENT':
            return {...state, count: state.count - 1}
        default: 
            return{...state}
    }
}


export function CounterProvider ({children}:{children: ReactNode} ) {
    const [state, dispatch] =  useReducer(counterReducer, defaultState)

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )

}

export function useCounter() {
    const context = useContext(CounterContext)

    if (!context) throw new Error('useCounter must be used within CounterProvider')

    return context
}