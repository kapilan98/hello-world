import React from 'react';


const Hello =()=>{
// return(
// <div>
//     <h1>
//         Hello kapilan!
//     </h1>
// </div>
// )
return React.createElement('div',
{id:'hello'},
React.createElement('h1',{className:'bold'},'Hello Geek')
)
}
export default Hello;
