import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({className, style, onClick}) => {
  return (
    <div className={`!rounded-full !w-[64px] !h-[64px] !bg-[#dadada]  !z-10 !flex !items-center !justify-center !absolute !-left-5 !top-[55%] !-translate-y-1/2 !${className} `}      
      onClick={onClick}>
      <FaLongArrowAltLeft className=' text-red-700'/>
    </div>
  )
}

export default PrevArrow
