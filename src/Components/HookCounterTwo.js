import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = () => {
        for(let i=1; i<6; i++){
            setCount( pc => pc +1)
        }
    }

    return (
        <div>
            {count}
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(c=>c+1)}>Plus One</button>
            <button onClick={()=> setCount(c=>c-1)}>Minus One</button>
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounterTwo
