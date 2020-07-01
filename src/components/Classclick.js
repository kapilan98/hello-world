import React,{Component } from 'react';

class Classclick extends Component{

    clickHandler(){
        console.log('class button clicked')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>classclick</button>
            </div>
        )
    }
}
export default Classclick;