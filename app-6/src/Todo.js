import React, {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return <h2>{this.props.task}</h2>
    }
}

export default Todo