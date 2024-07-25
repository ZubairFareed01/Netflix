import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <>
            <div className='w-full sm:h-[100vh] h-[90vh] '
                style={{ background: "url(https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/c1550f4b-4af4-4950-b2ae-51ca02b94a10/PK-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_d9d8c5d6-135c-4e04-9c6c-88de974b3794_large.jpg)" }} >
                <div
                    style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)"
                    }}
                    className='w-full h-full ' >
                    <Link to={'/'}>
                        <div className="netflix_logo">
                            <img
                                className=' absolute top-5 xl:left-44 left-5 w-24 lg:w-40 md:w-40'
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                                alt="logo"
                            />
                        </div></Link>
                    <div className="xl:flex lg:flex md:flex sm:flex block justify-center items-end h-screen  ">

                        <div className="bg-black sm:bg-opacity-80 text-white   rounded-md  ">
                            <div className="sm:px-16 px-6 py-20 sm:py-11
                       lg:h-max md:h-max sm:h-max h-[100vh] ">
                                <h2 className=' text-3xl font-bold mb-7'>Sign In</h2>
                                <div className=" mb-4">
                                    <input
                                        type="email"
                                        placeholder='Email or phone number'
                                        className='w-full px-3 py-4 text-[#ccc1c1] rounded-sm bg-stone-900 bg-opacity-70 outline-none 
                                    border border-stone-600 '
                                    />
                                </div>

                                <div className=" mb-4">
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        className='lg:w-80 md:w-80 sm:w-80 w-[100%] px-3 py-4 rounded-sm bg-stone-900 bg-opacity-70 
                                    border border-stone-600 outline-none '
                                    />
                                </div>
                                <div className="flex justify-center mb-2">
                                    <button
                                        className='bg-[#e50815] font-bold  rounded-sm w-full py-2'>
                                        Signin
                                    </button>
                                </div>
                                <div>
                                    <p className='text-center my-4 text-[#ccc1c1] '>
                                        OR
                                    </p>
                                </div>
                                <div className="flex justify-center mb-2">
                                    <button
                                        className='bg-[#424040] font-bold rounded-sm w-full py-2'>
                                        Use a sign-in code
                                    </button>
                                </div>
                                <div>
                                    <p className='text-center my-4 text-[#ccc1c1] '>
                                        Forget Password?
                                    </p>
                                </div>
                                <div className=" mb-4">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-1">
                                            <input type="checkbox"
                                                className='w-5 h-5'
                                            />
                                            <label className=' text-white pl-2 font-light text-sm'>Remember Me</label>
                                        </div>

                                    </div>
                                </div>

                                <div className=" mb-4">
                                    <span className='font-light text-gray-400'>
                                        New to Netflix?
                                    </span>
                                    <Link to={'/'}>
                                        <span className=" font-light hover:underline">
                                            {" "} Sign up now.
                                        </span>
                                    </Link>
                                </div>

                                <div className=" mb-20">
                                    <p className=' text-xs text-gray-400'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <span className=' text-blue-600'>Learn more.</span></p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
            <div className=" ">
                <div className="sm:hidden block h-[1px] bg-[rgb(78,78,78)]"></div>
                <div className=' container mx-auto max-w-7xl  md:pt-44 sm:py-16 py-8 px-6'>
                    <p className='text-gray-300 mb-5 underline'>Questions? Contact Us</p>
                    <div className="text-gray-300 w-full flex flex-wrap justify-between mb-4 cursor-pointer">
                        <div className="w-full">
                            <ul className='underline flex flex-wrap '>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>FAQ</li>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>Help Center</li>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>Terms of Use</li>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>Privacy</li>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>Cookie Preferences</li>
                                <li className='mb-3 flex md:basis-[25%] basis-[50%]'>Corporate Information</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className=" bg-[#111112] text-white lg:px-5 md:px-5  py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 w-28 mb-2 ">
                        <select
                            name=""
                            id=""
                            className='sm:pl-0 pl-5 bg-transparent outline-none'
                        >
                            <option className='text-black' value="English">English</option>
                            <option className='text-black' value="हिन्दी">हिन्दी</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signin
