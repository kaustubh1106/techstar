import React from 'react'

const Card = (items) => {
  return (
    <div>
      <div className="card">
        <img src={`${items.img}`} alt="Image Description" />
        <p className="type">{items.content}</p>
      </div>
    </div>
  )
}

export default Card