import React from 'react'
import Task from './task'

export const ListOfTasks = ({ tasks }) => {
  return tasks.map((task) => {
    return <Task key={task.taskId} data={task}></Task>
  })
}
