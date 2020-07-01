import React from 'react';

function FunctionClick() {
    function clickHandller()
    {
    console.log("buttonclicked  ")
    }
    
    return(
        <div>
            <button onClick={clickHandller}>Click</button>
        </div>
    )   
}
export default FunctionClick;