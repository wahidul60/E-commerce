import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NexArrow = ({className, onClick}) => {
  return (
     <div className={`${className} rounded-full w-[64px] h-[64px] bg-[#979797]  z-10 flex items-center justify-center absolute right-2 top-[35%] -translate-y-1/2`}  
      
          onClick={onClick}>  
        <FaLongArrowAltRight className='text-white'/>
    </div>
  )
}

export default NexArrow
