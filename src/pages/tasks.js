import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { ListOfTasks } from '../components/ListOfTasks'
import './styles/tasks.css'
export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      taskId: 1,
      titleT: 'Make the bed',
      descriptionT: '',
      timeT: 5,
      whereT: 'home',
    },
    {
      taskId: 2,
      titleT: 'Do homework',
      descriptionT: '',
      timeT: 7,
      whereT: 'home',
    },
  ])

  useEffect(() => {
    const allTasks = []
    const keys = Object.keys(localStorage)
    let i = keys.length
    while (i--) {
      const data = window.localStorage.getItem(keys[i])
      data.JSON().then(() => {
        allTasks.push(data)
      })
    }
    setTasks([])
  }, [setTasks])
  return (
    <div className="tasks__container">
      <div className="task__create">
        <Link to="/tasks/new">
          <button className="create__button">Create New Task</button>
        </Link>
      </div>
      <ListOfTasks tasks={tasks} />
    </div>
  )
}
