import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NexArrow = ({ className, onClick }) => {
  return (
    <div className={`!${className} !rounded-full !w-[64px] !h-[64px] !bg-[#e5e5e5]  !z-15 !flex !items-center !justify-center !absolute !right-2 !top-[55%] !-translate-y-1/2`}
      onClick={onClick}>
      <FaLongArrowAltRight className='!text-black' />
    </div>
  )
}

export default NexArrow
