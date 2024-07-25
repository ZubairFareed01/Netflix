import React from 'react'

function Navbar() {
  return (
    <nav  className='flex justify-between p-4 z-[100] w-full absolute xl:mb-28 md:mb-28 mb-10'>
    <h1 className="text-red-600 text-2xl">
      NETFLIX
    </h1>
    <div>
          <button className='text-white mr-4'>Sign In</button>
    <button className="bg-red-600 px-4 py-1 rounded text-white cursor-pointer">Sign Up</button>
    </div>
  
  </nav>
  )
}

export default Navbar
