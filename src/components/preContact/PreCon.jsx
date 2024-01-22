import React from 'react'
import './PreCon.css'
import { Link } from 'react-router-dom'

const PreCon = () => {
  return (
    <div className="pwrapper">
        <div className="ppcon">
            <button className='btnn bt3'>
            <Link className="linky w" to="/contact">Start a Delivery</Link>
            </button>
            <button className='btnn bt4'>
                <Link className="linky ww" to="/contact">Hiring</Link>
            </button>
        </div>
    </div>
  )
}

export default PreCon