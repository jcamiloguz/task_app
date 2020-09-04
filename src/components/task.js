import React from 'react'
import './styles/task.css'
import { FaCheck } from 'react-icons/fa'
export default function Task({ data }) {
	const handleClick = async () => {
		let allTasks = window.localStorage.getItem('value')
		allTasks = await JSON.parse(allTasks)
		console.log(allTasks)
		allTasks = allTasks.tasks.map((task) => (JSON.parse(task)))
		const index = allTasks.findIndex((task) => (task.taskId === data.taskId))
		allTasks.splice(index, 1)
		allTasks = { tasks: allTasks }
		allTasks = JSON.stringify(allTasks)
		window.localStorage.setItem('value', allTasks)
	}

	return (
		<div className="task">
			<div className="task__check">
				<div className="check" onClick={handleClick}><FaCheck size={25} /></div>
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
