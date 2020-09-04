import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { ListOfTasks } from '../components/ListOfTasks'
import './styles/tasks.css'
export default function Tasks() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		let allTasks = []
		let data = window.localStorage.getItem('value')
		data = JSON.parse(data)
		allTasks = (data) ? data.tasks : []
		setTasks(allTasks)
		console.log(allTasks)
	}, [])

	const remove = () => {
		const allTasks = []
		const keys = Object.keys(localStorage)
		let i = keys.length
		while (i--) {
			let data = window.localStorage.getItem(keys[i])
			data = JSON.parse(data)
			allTasks.push(data)
		}
		setTasks(allTasks)
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
