import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Room from './pages/Room'
import Errors from './pages/Error'
import SingleRoom from './pages/SingleRoom'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Room} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Errors} />
      </Switch>
      {/* <Route path="/error" component={Error} /> */}
    </>
  )
}

export default App
