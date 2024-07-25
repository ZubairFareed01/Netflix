import React from 'react'
import Navbar2 from '../component/Navbar2'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='w-full lg:h-[42em] md:h-[40em] h-[32em] bg-center  '

                style={{
                    background: " url(https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/c1550f4b-4af4-4950-b2ae-51ca02b94a10/PK-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_d9d8c5d6-135c-4e04-9c6c-88de974b3794_large.jpg)"

                }} >
                    <div  style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.9) 100%)"  }}
                        className='w-full lg:h-[42em] md:h-[40em] h-[32em] bg-center  ' >
                       
                {/* <div className='absolute w-full lg:h-[42em] md:h-[40em] h-[32em] bg-gradient-to-b from-black '>
                <div className='absolute w-full lg:h-[42em] md:h-[40em] h-[32em] bg-gradient-to-t from-black '> */}

                    <Navbar2 />
                    <div className='z-10 container mx-auto flex justify-center items-center h-96'>
                        <div className='px-4'>
                            <h1 className='text-white text-center lg:text-5xl md:text-5xl text-3xl px-5 font-bold mb-2 lg:mb-5 md:mb-5 sm:mb-5'>Unlimited movies, TV shows, and more</h1>
                            <p className='text-white text-center lg:text-2xl md:text-2xl text-lg mb-2  lg:mb-5 md:mb-5 sm:mb-5'>Watch anywhere. Cancel anytime.</p>
                            <p className='text-white text-center lg:text-xl md:text-xl text-lg mb-2  lg:mb-5 md:mb-5 sm:mb-5'>Ready to watch? Enter your email to
                            create or restart your
                                 membership.</p>

                            <div className="flex gap-4 lg:gap-2 md:gap-2 items-center justify-center flex-wrap">
                                <input className='bg-[#1d1e1e] text-white text-lg py-3 px-3 w-[80%] lg:w-96 md:w-96 rounded-md opacity-80 border
                         border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none  '
                                    placeholder='Email Address' type="text" />
                                <Link to={'/home'}>
                                <button type='button'
                                    className='bg-[#e50815] flex items-center py-3 px-5 rounded-lg gap-2 '>
                                    <p className='font-bold text-white text-xl '>Get Started</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>                    </button>
                                    </Link>
                            </div>
                        </div>
                    </div>  </div>
                    {/* </div>
                </div> */}
            </div>
  )
}

export default HeroSection
