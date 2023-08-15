import React from 'react'
import '../Styles/landingPage.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='main-container'>
      <h1 className='header'>Parkinson's Prediction</h1>

      <div className='content'>
        <div className='left-container'>
          <div className='image'></div>
        </div>
        <div className='right-container'>
          <h2 className='right-content-txt'>
            Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand. Tremors are common, but the disorder also commonly causes stiffness or slowing of movement.
          </h2>

          <Link to='/layout'>
            <button className='btn'>
              Let's gets started
            </button>
          </Link>
          <h2 className='right-content-txt margin'>
            <a href='https://www.vaidam.com/hospitals/parkinsons-disease/india'>
              click here to check out the best hospitals for parkinson's disease in india
            </a>
          </h2>
        </div>

      </div>
    </div>
  )
}

export default LandingPage