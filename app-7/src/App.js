import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// Components
import NewTask from './NewTask'
import List from './List'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      todoList: []
    } 

    this.handleAddToTheList = this.handleAddToTheList.bind(this)
  }

  handleAddToTheList(todo){
    this.setState({
      todoList: [...this.state.todoList, todo]
    })
  }
  
  render(){
      return (
        <div className="App">
          <h1>Gavin's Even Better To-do List</h1>
          <NewTask newList={this.handleAddToTheList}/>
          <List tasks={this.state.todoList}/>
        </div>
      );
    }
}

export default App;
