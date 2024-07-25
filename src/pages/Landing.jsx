import React from 'react'
import Enjoy from '../component/Enjoy'
import Download from '../component/Download'
import Watch from '../component/Watch'
import CreateProfile from '../component/CreateProfile'
import Faq from '../component/Faq'
import FaqData from '../Data/FaqData'
import Footer from '../component/Footer'

import HeroSection from '../component/HeroSection'

function Landing() {
    return (
        <>

            <HeroSection/>
            <div className="hr_line"></div>
            <Enjoy />
            <div className="hr_line"></div>
            <Download />
            <div className="hr_line"></div>
            <Watch />
            <div className="hr_line"></div>
            <CreateProfile />
            <div className="hr_line"></div>
            <div>
                <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold  py-10'>Frequently Asked <br className=' lg:hidden md:hidden' /> Questions</h2>
                <div className="">
                    {FaqData.map((item, index) => {
                        const { title, desc } = item
                        return (

                            <Faq
                                key={index}
                                title={title}
                                desc={desc}
                            />
                        )
                    })}

                </div>
                <div className="my-10">
                    <p className='text-white text-center lg:text-xl md:text-xl text-lg px-3 mb-5'>Ready to watch? Enter your email to
                        create or restart your
                        membership.</p>

                    <div className="flex px-2 gap-4 lg:gap-2 md:gap-2 items-center justify-center flex-wrap">
                        <input className='bg-[#1d1e1e] text-white text-lg py-3 px-3 w-96 lg:w-96 md:w-96 rounded-md opacity-80 border
                         border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none  '
                            placeholder='Email Address' type="text" />
                        <button type='button'
                            className='bg-[#e50815] flex items-center py-3 px-5 rounded-lg gap-2 '>
                            <p className='font-bold text-white text-xl '>Get Started</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Landing
