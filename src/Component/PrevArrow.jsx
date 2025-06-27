import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({className, style, onClick}) => {
  return (
    <div className={`${className} rounded-full w-[64px] h-[64px] bg-[#979797]  z-10 flex items-center justify-center absolute -left-5 top-[35%] -translate-y-1/2`}      
      onClick={onClick}>
      <FaLongArrowAltLeft className=' text-white'/>
    </div>
  )
}

export default PrevArrow
