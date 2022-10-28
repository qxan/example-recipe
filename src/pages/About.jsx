import React from 'react'
import coding from '../assets/coding.svg'

const About = () => {
  return (
    <div className='genediv'>
      <div className='flex justify-center items-center mt-10'>
        <img className='w-[25rem]' src={coding} alt="coding" />
      </div>
        <div className=' flex flex-col justify-center items-center text-center mt-10 mb-5'>
            <h1 className='text-3xl'>ABOUT THIS PAGE</h1>
            <p className='bg-green-700 w-[17rem] h-[0.3rem] rounded-lg mb-3'></p>
            <p>NOTE: Some informations are missing because of the API. If you can't see the page properly please go back and try again.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl'>TOOLS</h1>
            <p className='bg-green-700 w-[15rem] h-[0.3rem] rounded-lg'></p>
            <p>React</p>
            <p>HTML</p>
            <p>TAILWIND CSS</p>
            <p>JAVASCRIPT</p>
            <p>AXIOS</p>
            <p>REACT ROUTER DOM v6</p>
            <p>REACT ICONS</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 mb-10 gap-3'>
            <h1 className='text-2xl'>Usefull Links</h1>
            <p className='bg-green-700 w-[15rem] h-[0.3rem] rounded-lg'></p>
            <a href="https://www.linkedin.com/in/menfavakitsayan/" className="hover:underline hover:text-red-800">Linkedin</a>
            <a href="https://github.com/qxan" className="hover:underline hover:text-red-800">Github</a>
            <a href="https://github.com/qxan/react-reacipe-app" className="hover:underline hover:text-red-800">Source Code</a>
        </div>
    </div>
  )
}

export default About