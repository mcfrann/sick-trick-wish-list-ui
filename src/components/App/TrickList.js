import React from 'react' 
import TrickCard from './TrickCard'
import './TrickList.css'

const TrickList = ({ tricks }) => {
  const trickCards = tricks.map(trick => {
    return <TrickCard
              stance={trick.stance}
              name={trick.name}
              obstacle={trick.obstacle}
              tutorial={trick.tutorial}
              id={trick.id}
              key={trick.id}
              />
  })

  return(
    <div className="trick-list">
      {trickCards}
    </div>
  )
}

export default TrickList