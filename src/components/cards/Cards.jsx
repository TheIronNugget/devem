import React from 'react'

const Cards = ({children, img}) => {
  return (
    <div className='card'>
        <div className="img" style={{
            background:` url(${img}) center/cover no-repeat`
          }} />
        <div className="txtbk">
            <p className="txty">
                {children}
            </p>
        </div>
    </div>
  )
}

export default Cards