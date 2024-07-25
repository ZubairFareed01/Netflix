import React from 'react'

function Download() {
    return (
        <div>
            <div className="main flex   xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse justify-evenly items-center 
            lg:py-24 md:py-12 py-10 xl:px-20 lg:px-16 ">
                <div className="right xl:pl-28 xl:w-[50%] lg:w-[50%] ">
                    <video
                        className=' w-[24em] '
                        autoPlay={true}
                        muted
                    >
                        <source src='/videos/v2.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className="left  mb-10 px-4 xl:w-[50%] lg:w-[50%]">
                    <h2 className='text-white font-bold text-4xl xl:text-5xl lg:text-5xl  lg:mb-5 md:mb-5 mb-3
                    xl:text-left lg:text-left text-center'>
                        Download your shows to
                        <br className='xl:block lg:block  hidden' /> watch offline
                    </h2>
                    <p className='text-white tracking-wide text-md xl:text-2xl lg:text-2xl md:text-lg  xl:text-left lg:text-left text-wrap text-center '>
                    Save your favorites easily and always have something to watch.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Download
