import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
// import Table from './components/Table';


export class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

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
        //   if (this.state.loggedIn === true) {
        //    return <div className="inner_div">  
        //                  <Redirect to="/table" className="link_div">Search User</Redirect>
        //                  <Redirect to="/banner" className="link_div">Add Banner</Redirect>
        //        </div>
        // }

        return (
            <>
                <div className="main_div">
                    <Link to="/logout" className="link">Logout</Link>
                    <h1 className="heading_style">Welcome to Hunkaar</h1>
                 
                     <div className="inner_div">  
                         <Link to="/admin/table" className="link_div">Search User</Link>
                         <Link to="/admin/banner" className="link_div">Add Banner</Link>
                     </div>
                </div>
                
                  
            </>



        );
    }
}

export default Admin;
