import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from "react-icons/io";

  function Faq(props) {
       const [open, setopen] = useState(false)

    return (
      <>
     
      <div className="faq_main container mx-auto lg:max-w-6xl md:max-w-6xl px-6">
        <div className=''>
          <div className="main_top flex justify-between px-5 items-center mt-2 py-5 cursor-pointer bg-[#2d2d2d]  hover:bg-[#414141]" onClick={()=> setopen(!open)} >
          
            <div className="left ">
              <h1 className='text-white font-bold lg:tracking-wider md:tracking-wider
                lg:text-xl md:text-xl'>
                {props.title}
              </h1>
            </div>

            <div className="right flex">
               {open ? <IoMdClose className='text-white lg:text-4xl md:text-4xl '/>
               :<AiOutlinePlus className='text-white lg:text-4xl md:text-4xl '/> 
               }
            </div>

          </div>
          {open && <div className="main_bottom px-5 py-4 my-[1px]  bg-[#2d2d2d]">
              <p className='text-white lg:text-xl md:text-xl text-lg '>
              Netflix is an American subscription video on-demand Internet streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages. Wikipedia
              </p>
          </div>}
        </div>
      </div> 
      
     
      </>
    )
  }

export default Faq
