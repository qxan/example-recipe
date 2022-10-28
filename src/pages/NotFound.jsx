import React from 'react'
import notfound from '../assets/notfound.webp'

const NotFound = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
        <img className='w-[60rem]' src={notfound} alt="" />
    </div>
  )
}

export default NotFound