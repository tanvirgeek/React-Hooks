import React, { useState } from 'react'

function HookNextName() {
    const names = ["ifa", "Shuvo", "Alexandra", "Tanvir", "Deep", "Kamal"]
    const[i, setIndex] = useState(0)
    return (
        <div  className="nextName">
            <p>{names[i]} {i}</p>
            <button onClick={()=> nextName()}>Next Name {i}</button>
        </div>
    )

    function nextName(){
        if(i===names.length-1){
            setIndex(0);
            return names[i];
        }else{
            setIndex(i+1);
            return names[i];
        }
    }
}

export default HookNextName
