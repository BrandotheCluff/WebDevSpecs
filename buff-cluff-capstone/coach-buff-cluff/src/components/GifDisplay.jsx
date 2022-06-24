import React from 'react'

const GifDisplay = ({workout}) => {
  return (
    <div><img src={workout.gifUrl} /></div>
  )
}

export default GifDisplay