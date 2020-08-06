import React from 'react'
import './styles/home.css'
function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <div className="home__logo"></div>
        <p>
          This is task app made with React, you can create a task with title,
          place and times, also i wil connect with Google Calendar api
        </p>
      </div>
    </div>
  )
}
export default Home
