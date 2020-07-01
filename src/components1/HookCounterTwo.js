import React,{useState} from 'react'

function HookCounterTwo() {
    const icount=0
    const [count, setCount]=useState(icount)
    return (
        <div>
           Count : {count}
            <button onClick={()=>{setCount(icount)}}>Reset</button>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo
