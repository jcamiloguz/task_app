import React from 'react'
import './styles/task.css'
export default function Task({ data, remove }) {
  const handleClick = () => {
    window.localStorage.removeItem(`Value${data.taskId}`)
  }
  return (
    <div className="task">
      <div className="task__check">
        <div className="check" onClick={handleClick}></div>
      </div>
      <div className="task__info">
        <h2>{data.titleT}</h2>
        <div className="task__line"></div>
        <p>Description: {data.descriptionT}</p>
        <p>Time: {data.timeT}</p>
        <p>Place: {data.whereT}</p>
      </div>
    </div>
  )
}
