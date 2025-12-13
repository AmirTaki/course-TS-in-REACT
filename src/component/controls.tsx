import type { Dispatches } from "../shared/context";

const Controls = ({ handler }: { handler: Dispatches }) => {
    return (
        <div className="flex flex-col gap-2 ">
            <button onClick={() => handler('INCREMENT')} className="border-2 border-emerald-500 w-10">+</button>
            <button onClick={() => handler('DECREMENT')} className="border-2 border-emerald-500 w-10">-</button>
        </div>
    )
}

export default Controls;