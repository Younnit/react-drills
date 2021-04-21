import React, {Component} from 'react'

class App2 extends Component{
    constructor(props){
        super(props)
        this.state ={
            foods: ['pizza', 'oranges', 'ice cream', 'corn dog']
        }
    }

    render(){
        return(
            <div>
                {this.state.foods.map((element) => {
                    return (
                        <h2>{element}</h2>
                    )
                })}
            </div>
        )
    }
}

export default App2