import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home'
import Layout from './layout'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
