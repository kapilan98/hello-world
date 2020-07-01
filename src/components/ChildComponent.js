import React from 'react';

function ChildComponent(props )
{
 return(
 	<div>
 	<button onClick={props.greetHandler('kapil')}>greetParent</button>
 	</div>
 	)

}
export default ChildComponent