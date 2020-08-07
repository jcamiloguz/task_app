import React from 'react'
import { Link } from 'react-router-dom'
import './styles/taskForm.css'
export default function TaskForm() {
  return (
    <div className="task__form">
      <h1>New Task</h1>
      <form>
        <div className="form__group">
          <label htmlFor="">Task's Title</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label htmlFor="">Task's description</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label htmlFor="">Task's Time</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label htmlFor="">Task's Place</label>
          <input type="text" />
        </div>
        <Link to="/tasks/new">
          <button className="new__button">Create</button>
        </Link>
      </form>
    </div>
  )
}
