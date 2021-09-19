import React, { Component } from 'react'
import {Redirect , Route ,Switch} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import Tv from './components/TV/Tv'
import Notfound from './components/Notfound/Notfound'
import Register from './components/Navbar/Register'
import Login from './components/Navbar/Login'
import Logout from './components/Navbar/Logout'

import Protected from './components/protection/Protected'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
           <Protected path="/Home" component={Home}/>
           <Protected path="/Movies" component={Movies}/>
           <Protected path="/Tv" component={Tv}/>
           <Route path="/Login" component={Login}/>
           <Route path="/Logout" component={Logout}/>
           <Route path="/Register" component={Register}/>
           <Redirect exact from="/" to="/Login"/>
           <Route path="*" component={Notfound}/>



        </Switch>
        <Footer/>
      </>
    )
  }
}

