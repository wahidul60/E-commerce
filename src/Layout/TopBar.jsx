import React from 'react'
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';



const TopBar = () => {
  return (
   <section >
    <Container>
        <div className='bg-[#e4e4e4] w-full'>
            <Flex className='justify-center items-center '>
            <div className='w-4/16'>
                <Flex className='gap-3'>
                    <HiOutlineMenuAlt4 />
                    <h2 className='font-DM font-normal text-[14px] text-[#262626] '>Shop by Category</h2>
                </Flex> 
            </div>
            <div className='w-8/16 relative'>
                <input type="text" className='w-full bg-white font-DM font-normal text-[14px] px-4 py-4 mx-6 my-6 rounded-' placeholder='Search Products' />
                <div className='absolute top-1/2 right-0 -translate-1/2'><IoMdSearch /></div>
            </div>
            <div className='w-4/16 '>
                <Flex className=' justify-end gap-5'>
                   <Link to='login'>
                        <Flex>
                            <IoMdContact className='text-black' />
                            <IoMdArrowDropdown className='text-black' />  
                        </Flex>
                    </Link>
                    <IoCartOutline />   
                </Flex>
                           
            </div>
        </Flex>
        </div>
    </Container>
    
   </section>
  )
}

export default TopBar
