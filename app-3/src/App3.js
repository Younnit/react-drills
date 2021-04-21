import React, {Component} from 'react'

class App3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            foods: ['pizza', 'ice cream', 'corn dogs', 'oranges', 'bananas', 'steaks'],
            inputVal: '',
            filteredFoods: []
        }

        this.filteredFoods = this.filteredFoods.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(val){
        this.setState({
            inputVal: val
        })
    }

    filteredFoods(val){
        let foodies = this.state.foods
        let newbie = []
        for(let i = 0; i < foodies.length; i++){
            if(foodies[i].includes(val)){
                newbie.push(foodies[i])
            }
        }
        this.setState({
           filteredFoods: newbie,
           inputVal: ''
        })
    }

    render(){
        return (
            <div>
                <input value={this.state.inputVal} onChange={(e)=> this.handleChange(e.target.value)}/>
                <button onClick={()=>this.filteredFoods(this.state.inputVal)}>Click Here</button>
                <h2 >
                    {this.state.filteredFoods.map((element)=> {
                        return(
                            <h2>{element}</h2>
                        )
                    })}
                </h2>
            </div>
        )
    }
}



export default App3