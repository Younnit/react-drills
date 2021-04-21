import React, {Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <h4>{this.props.task}</h4>
        )
    }
}

export default TodoList