import React, {Component} from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputValue: ''
        }

        this.handleAddToList = this.handleAddToList.bind(this)
    }

    handleChange(val){
        this.setState({
            inputValue: val
        })
    }

    handleAddToList(){
        this.props.newList(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.inputValue}
                    placeholder='Add a task to the list'
                    onChange={(e)=> this.handleChange(e.target.value)} />

                <button onClick={this.handleAddToList}>Add</button>
            </div>
        )
    }
}

export default NewTask