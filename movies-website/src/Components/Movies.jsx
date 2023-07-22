import React from 'react'

const Movies = ({title,year,img}) => {
  return (
    <div className='movie'>
       <img src={img}alt="" />
       <p> Title: {title}</p>
       <p>Year: {year}</p>
    </div>
  )
}

export default Movies
