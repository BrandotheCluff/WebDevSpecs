import React from 'react'

const GifDisplay = ({workout}) => {
  return (
    <div className='gifBox'><img className='gif' src={workout.gifUrl} /></div>
  )
}

export default GifDisplay