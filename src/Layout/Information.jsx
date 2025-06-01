import React from 'react'
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import { MdLocalShipping } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";


const Information = () => {
  return (
    <section className='border-b-1 border-[#e2e2e2]'>
        <Container>
                <Flex className='justify-between py-[30px]'>
                    <Flex className='gap-[16px] justify-center items-center'>
                        <h1 className='font-DM text-[30px] font-bold text-black'>2</h1>
                        <p className='font-DM text-[16px] text-[#6D6D6D]'>Two years warranty</p>
                    </Flex>
                    <Flex className='gap-[16px] justify-center items-center'>
                        <MdLocalShipping className='text-[30px]'/>
                        <p className='font-DM text-[16px] text-[#6D6D6D]'>Free shiipping</p>
                    </Flex>
                    <Flex className='gap-[16px] py-[30px] justify-center items-center'>
                        <FaArrowRotateLeft className='text-[20px]'/>
                        <p className='font-DM text-[16px] text-[#6D6D6D]'>Return policy in 30 days</p>
                    </Flex>
                </Flex>
        </Container>
    </section>
     
       
    
  )
}

export default Information
