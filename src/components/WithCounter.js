import React from 'react'

const UpdatedComponent= (OldComponent) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementer=()=>{
                this.setState(prevState=>{
                    return{ count:prevState.count+1}
                })  
            }
        render()
        {
            return<OldComponent count={this.state.count} 
            incrementer={this.incrementer}/>        }
    }
    return NewComponent
}
export default UpdatedComponent