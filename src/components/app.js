import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Tasks from '../pages/tasks'
import Layout from './layout'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tasks/" component={Tasks}></Route>
          <Route exact path="/about/"></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
