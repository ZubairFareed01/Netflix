import React from 'react'

function Enjoy() {
    return (
        <div>
            <div className="main flex   xl:flex-nowrap lg:flex-nowrap flex-wrap justify-evenly items-center 
            lg:py-28 md:py-20 py-10 xl:px-20 lg:px-16 ">
                <div className="left  mb-10 px-4 xl:w-[50%] lg:w-[50%]">
                    <h2 className='text-white font-bold text-4xl xl:text-5xl lg:text-5xl lg:mb-5 md:mb-5 mb-3
                    xl:text-left lg:text-left text-center'>
                        Enjoy on your TV
                    </h2>
                    <p className='text-white tracking-wider text-md xl:text-2xl lg:text-2xl md:text-lg  xl:text-left lg:text-left text-wrap text-center '>
                        Watch on Smart TVs, Playstation, Xbox, 
                        <br className='xl:block hidden'/>Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                <div className="right xl:w-[50%] lg:w-[50%]">
                    <video
                        className='xl:w-[36em] lg:w-[36em] md:w-[36em] w-[24em]'
                        autoPlay={true}
                        muted
                         >
                        <source src='/videos/v1.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Enjoy
