import React from 'react'
import './App.css'

import Home from './pages/Home'
import Room from './pages/Room'
// import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Room} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      {/* <Route path="/error" component={Error} /> */}
    </>
  )
}

export default App
