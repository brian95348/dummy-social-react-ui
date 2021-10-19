import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/home/Home'
import ProfilePage from './pages/profile/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact ><HomePage/></Route>
        <Route path="/profile" exact ><ProfilePage/></Route>
      </Switch>
    </Router>
  )
}

export default App
