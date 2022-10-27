import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-stone-300 flex justify-between h-[6rem]'>
        <div className='ml-5 p-8 w-[50rem] flex justify-center items-center text-2xl text-cyan-700'>
            <h1>Delicous</h1>
        </div>
        <div className='p-8 w-[60rem] flex justify-center items-center text-xl text-white'>
            <ul className='flex gap-12 '>
                <li className='text-red-700'>Home</li>
                <li className='hover:text-red-700'>About</li>
                <li className='hover:text-red-700'>Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar