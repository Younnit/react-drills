import React, {Component} from 'react'

export default class App1 extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputValue: ''
        }
    }

    handleChange(val){
        this.setState({
            inputValue: val
        })
    }

    render(){
        return(
            <div>
                <input value={this.state.inputValue} onChange={(e) => this.handleChange(e.target.value)} />
                <h1>{this.state.inputValue}</h1>
            </div>
        )
    }
}