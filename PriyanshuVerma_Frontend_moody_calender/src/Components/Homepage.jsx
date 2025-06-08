import React from 'react'
import Calendar from './Calender'


const Homepage = () => {
  return (
    <>
    <div className='bg-black text-white'>
       <h1 className="text-6xl font-light py-6 text-center">🗓️<span className='text-white bg-sky-400 rounded-2xl font-bold '> Moody </span> {"  "}Calendar</h1>
      <Calendar />
       
    </div>
   
    </>
  )
}

export default Homepage
