import React from 'react'

function Watch() {
  return (
    <div>
    <div className="main flex   xl:flex-nowrap lg:flex-nowrap flex-wrap justify-evenly items-center 
    lg:py-16 md:py-16 py-10 xl:px-20 lg:px-16 ">
        <div className="left  mb-10 xl:pl-56 lg:pl-40  ">
            <h2 className='text-white  font-bold text-4xl xl:text-5xl lg:text-5xl lg:mb-5 md:mb-5 mb-3
            xl:text-left lg:text-left text-center'>
                Watch
                <br className='xl:block lg:block hidden '/> everywhere
            </h2>
            <p className='text-white tracking-wider text-md xl:text-2xl lg:text-2xl md:text-lg  xl:text-left lg:text-left text-wrap text-center '>
            Stream unlimited movies and TV
            <br className='xl:block  hidden'/> shows on your phone, tablet, laptop,and TV.
            
            </p>
        </div>
        <div className="right w-[50%] ">
            
        </div>
    </div>
</div>
  )
}

export default Watch
