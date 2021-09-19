import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Redirect} from "react-router-dom"
class Logout extends Component {
    componentDidMount(){
        this.props.token()
    }
    render() {

        localStorage.clear();
        
        return (
            <>
               <Redirect to="/Login"/>
            </>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        token:()=>dispatch({type:'WITHOUTTOKEN'})
    }
}



export default connect(null, mapDispatchToProps)(Logout)
