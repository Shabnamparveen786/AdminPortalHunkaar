import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom';

export class logout extends Component {
    constructor(props){
        super(props)
       const token = localStorage.removeItem("token");

           let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn
        }
    }
    render() {

         if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div className="main_div">
                <Link to="/" className="link">Login Again </Link>
                <h1 className="heading_style">You have been Logged out!!!</h1>
                
            </div>
        )
    }
}

export default logout;
