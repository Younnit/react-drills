import React, {Component} from 'react'
import TodoList from './TodoList'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        let list = this.props.tasks.map((element, index) => {
          return <TodoList key={index} task={element} />;
        });
        
        return <div>{list}</div>;
      }
}

export default List