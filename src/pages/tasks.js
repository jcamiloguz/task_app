import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { ListOfTasks } from '../components/ListOfTasks'
import './styles/tasks.css'
export default function Tasks() {
	const [tasks, setTasks] = useState([])
	const [update, setUpdate] = useState(false)

	useEffect(() => {
		let allTasks = []
		let data = window.localStorage.getItem('value')
		data = JSON.parse(data)
		allTasks = (data) ? data.tasks : []
		setTasks(allTasks)
		console.log(allTasks)
		setUpdate(true)
	}, [update])
	const remove = () => {
		setUpdate(false)
	}
	return (
		<div className="tasks__container">
			<div className="task__create">
				<Link to="/tasks/new">
					<button className="create__button">Create New Task</button>
				</Link>
			</div>
			<ListOfTasks tasks={tasks} remove={remove} />
		</div>
	)
}
