import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
       })
    }

    submitForm(e){
        e.preventDefault()
        const { username, password} = this.state
        //login
        if(username === "admin" && password === "admin"){
            localStorage.setItem("token", "hdfjkdgigsfk")
            this.setState({
                loggedIn: true,
                
            })
        }
        else if(username === "" && password===""){
            alert("Please enter valid username and password");
        }
        else{
            alert("Invalid username or password!");
        }

    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to = "/admin"/>
        }
        return (
            <div className="main_div">
                <h1 className="heading_style">Admin Login</h1>
                <form className="form_style" onSubmit={this.submitForm}>
                  <input type="text" placeholder="Enter username" name="username" value={this.state.username} onChange={this.onChange}/>
                  <br/>
                  <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                  <br/>
                  <button className="btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
