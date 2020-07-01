import React from 'react'

function MemoComp({name}) {
    console.log('Inside MemoComp')

    return (
        <div>
            {name}        
        </div>
    )

}

export default React.memo(MemoComp)
