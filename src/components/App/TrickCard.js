import React from 'react' 
import './TrickCard.css'

const TrickCard = ({ stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick-card" key={id} id={name}>
      <h2 className="trick-name">Trick: {stance} {name}</h2>
      <p>Obstacle: {obstacle}</p>
      <a href={tutorial} className='link'>Tutorial</a>
    </div>
  )
}

export default TrickCard