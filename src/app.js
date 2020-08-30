import React from 'react'
import Tasks from './pages/tasks'
import Layout from './components/layout'
import About from './pages/about'
import NewTask from './pages/newTask'
import { Router } from '@reach/router'

window.localStorage.clear()
export default function App() {
  return (
    <Layout>
      <Router>
        <Tasks path="/tasks"></Tasks>
        <About path="/"></About>
        <NewTask path="/tasks/new"></NewTask>
      </Router>
    </Layout>
  )
}
