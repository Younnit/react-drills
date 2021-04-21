import React, {Component} from 'react'

class App4 extends Component{
    constructor(props){
        super(props)
        this.state ={
            username: '',
            password: '',
        }
        this.changePassword = this.changePassword.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.login = this.login.bind(this)
    }

    changeUsername(val){
        this.setState({
            username: val
        })
    }

    changePassword(val){
        this.setState({
            password: val
        })
    }

    login(a, b){
        alert(`Username: ${a} |||| Password: ${b}`)
    }

    render(){
        return (
            <div>
                <input placeholder={'Username:'} value={this.state.username} onChange={(e)=> this.changeUsername(e.target.value)}/>
                <input placeholder={'Password:'} value={this.state.password} onChange={(e)=> this.changePassword(e.target.value)}/>
                <button onClick={() => this.login(this.state.username, this.state.password)}>Login</button>

            </div>
        )
    }
}

export default App4