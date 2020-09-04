import React from 'react'
import './styles/task.css'
import { FaCheck } from 'react-icons/fa'
export default function Task({ data, remove }) {
	const handleClick = () => {
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
