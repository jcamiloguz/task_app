import React, { Component } from 'react'
import { navigate } from '@reach/router'
import './styles/taskForm.css'
export class TaskForm extends Component {
	state = {
		taskId: 0,
		titleT: '',
		descriptionT: '',
		timeT: '',
		whereT: '',
	}
	handleClick = (e) => {
		e.preventDefault()
		let allTasks = window.localStorage.getItem("value")
		if (allTasks === null) {
			allTasks = '{"tasks":[]}'
		}
		allTasks = JSON.parse(allTasks)
		let data = {
			task: {
				...this.state, taskId: new Date().getUTCMilliseconds()
			},
		}
		data = JSON.stringify(data.task)
		allTasks['tasks'].push(data)
		allTasks = JSON.stringify(allTasks)
		window.localStorage.setItem('value', allTasks)
		navigate('/tasks')

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	render() {
		return (
			<div className="task__form">
				<h1>New Task</h1>
				<form onSubmit={this.handleClick}>
					<div className="form__group">
						<label htmlFor="">Task's Title</label>
						<input
							name="titleT"
							type="text"
							placeholder="Title"
							onChange={this.handleChange}
							value={this.state.titleT}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="">Task's description</label>
						<input
							name="descriptionT"
							type="text"
							placeholder="Description"
							value={this.state.descriptionT}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="">Task's Time</label>
						<input
							name="timeT"
							type="text"
							placeholder="When"
							value={this.state.timeT}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form__group">
						<label htmlFor="">Task's Place</label>
						<input
							name="whereT"
							type="text"
							placeholder="Where"
							value={this.state.whereT}
							onChange={this.handleChange}
						/>
					</div>
					<button className="new__button">Create</button>
				</form>
			</div>
		)
	}
}
