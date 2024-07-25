import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <div className=''>
    <div className="flex justify-between  items-center
     lg:py-5 md:py-5 py-5 px-5 xl:px-44  lg:mb-28 md:mb-28 mb-4">
        <div className="left">
            <div className="netflix_logo">
                <img
                    className=' w-28 lg:w-40 md:w-40'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="logo"
                />
            </div>
        </div>

        <div className="right">
            <div className=" ">
            

                <Link to={'/signin'}>
                <button
                    className=' bg-[#e50815] hover:bg-[#d80c1a] text-white px-4 py-1 rounded-sm '>
                    Sign In
                </button>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar2
