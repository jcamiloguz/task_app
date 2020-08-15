import React from 'react'
import './styles/task.css'
export default function Task({ data }) {
  return (
    <div className="task">
      <div className="task__check">
        <div className="check"></div>
      </div>
      <div className="task__info">
        <h2>{data.titleT}</h2>
        <div className="task__line"></div>
        <p>Description</p>
        <p>Time</p>
        <p>{data.whereT}</p>
      </div>
    </div>
  )
}
