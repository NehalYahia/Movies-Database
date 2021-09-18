import React, { Component } from 'react'
import {Link} from "react-router-dom"
 
export default class Navbar extends Component {
  
    
    render() {
        return (
                    <>
                        <nav className="navbar navbar-expand-lg navbar-dark py-2 px-5">
                            <Link className="navbar-brand font-weight-bold" to="/Home">Güzel</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-5 w-75">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Movies">Movies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Tv">TV show</Link>
                                    </li>
                                    
                                </ul>
                                <button className="btn m-2">
                                        <Link className="nav-link text-white"  to ="/Login"> Login </Link>
                                </button>
                                <button className="btn m-2">
                                        <Link className="nav-link text-white"  to ="/Register"> Register</Link>
                                </button >
                            </div>
                        </nav>
                    </>
        )
    }
}
