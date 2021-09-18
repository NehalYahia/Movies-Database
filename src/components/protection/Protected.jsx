import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import Login from '../Navbar/Login'
import jwtDecode from 'jwt-decode'

export default class Protected extends Component {

    render() {
        let token =localStorage.getItem("token");
        try{
            var decoded = jwtDecode (token)
        }
        catch{
            localStorage.clear();
            return(
                <Redirect to="/Login"/>
            )
        }
        
        if(token)
        return (
        <>
            <Route path={this.props.path} component={this.props.component}/>
            
       
        </>
    
        )
        else
        return(
            <>
            <Redirect to={Login}/>
            </>
        )
    }

}

