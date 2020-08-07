import React from 'react'
import './styles/about.css'
export default function About() {
  return (
    <div className="about__container">
      <div className="about">
        <div className="about__project">
          <div className="about__logo"></div>
          <p>
            This is task app made with React, you can create a task with title,
            place and times, also i wil connect with Google Calendar api
          </p>
        </div>
        <div className="about__me">
          <h2>Made by Juan Camilo Guzman</h2>
          <p></p>
          <a href="https://github.com/jcamiloguz">My github profile</a>
        </div>
      </div>
    </div>
  )
}
