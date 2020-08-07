import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tasks from '../pages/tasks'
import NewTasks from '../pages/newTask'
import Layout from './layout'
import About from '../pages/about'
export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Tasks}></Route>
          <Route exact path="/tasks/" component={Tasks}></Route>
          <Route exact path="/tasks/new" component={NewTasks}></Route>
          <Route exact path="/about/" component={About}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
