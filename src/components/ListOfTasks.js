import React from 'react'
import Task from './task'

export const ListOfTasks = ({ tasks, remove }) => {
  return tasks.map((task) => {
    return <Task key={task.taskId} handleClick={remove} data={task}></Task>
  })
}
