import React from 'react'
import { Link } from 'react-router-dom'
import Task from '../components/task'
import './styles/tasks.css'
export default function Tasks() {
  const [data, setData] = React.useState({
    data: {
      taskId: 1,
      titleT: 'Make the bed',
      descriptionT: '',
      timeT: 5,
      whereT: 'home',
    },
  })

  return (
    <div className="tasks__container">
      <div className="task__create">
        <Link to="/tasks/new">
          <button className="create__button">Create New Task</button>
        </Link>
      </div>
      <Task data={data}></Task>
    </div>
  )
}
