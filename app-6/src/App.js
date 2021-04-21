import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      inputValue: ""
    };

    this.handleAddTodoList = this.handleAddTodoList.bind(this);
  }

  handleChange(val) {
    this.setState({ inputValue: val });
  }

  handleAddTodoList() {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: ""
    });
  }

  render() {
    let list = this.state.todoList.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>Gavin's to-do list:</h1>

        <div>
          <input
            value={this.state.inputValue}
            placeholder="Enter new task"
            onChange={(e) => this.handleChange(e.target.value)}
          />

          <button onClick={this.handleAddTodoList}>Add</button>
        </div>


        {list}
      </div>
    );
  }
}

export default App;
