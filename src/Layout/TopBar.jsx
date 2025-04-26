import React from 'react'
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const TopBar = () => {
  return (
   <section>
    <Container>
        <Flex>
            <div className='w-4/12 bg-red-500'>
                <Flex className='gap-3'>
                    <HiOutlineMenuAlt4 />
                    <h2 className='font-DM font-normal text-[14px] text-[#262626] '>Shop by Category</h2>
                </Flex> 
            </div>
            <div className='w-7/12 bg-black'>
                <input type="text" className='w-full bg-white font-DM font-normal text-[14px] px-6 py-6' placeholder='Search Products' />
            </div>
            <div className='w-1/12 h-5 bg-green-200'></div>
        </Flex>
    </Container>
    
   </section>
  )
}

export default TopBar
