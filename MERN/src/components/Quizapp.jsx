import React from 'react'
import { Link } from 'react-router-dom'

function Quizapp() {
  return (
    <>
      <div className='bg-blue-100 w-full text-center py-5 min-h-screen'>
        <h1 className="text-black  text-2xl font-bold mb-6">
          WELCOME TO OUR MERN QUIZ TEST
        </h1>

        <div className='bg-white w-[75%] py-20 flex right-7 flex-col gap-6 justify-center items-center px-5 rounded-lg h-1/1 m-10'>
          <Link 
            to="/mongodb" 
            className='bg-blue-950 w-[25%] text-white text-center py-3 rounded-lg hover:bg-blue-800 cursor-pointer'
          >
            MONGODB-QUIZES
          </Link>

          <Link 
            to="/express" 
            className='bg-blue-950 w-[25%] text-white text-center py-3 rounded-lg hover:bg-blue-800 cursor-pointer'
          >
            EXPRESS-QUIZE
          </Link>

          <Link 
            to="/react" 
            className='bg-blue-950 w-[25%] text-white text-center py-3 rounded-lg hover:bg-blue-800 cursor-pointer'
          >
            REACT-QUIZE
          </Link>

          <Link 
            to="/nodejs" 
            className='bg-blue-950 w-[25%] text-white text-center py-3 rounded-lg hover:bg-blue-800 cursor-pointer'
          >
            NODEJS-QUIZE
          </Link>
        </div>
      </div>
    </>
  )
}

export default Quizapp
