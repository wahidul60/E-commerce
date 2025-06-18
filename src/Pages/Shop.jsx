import React from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Heading from '../Component/Heading'
import Subheading from '../Component/Subheading'
import { FiPlus } from "react-icons/fi";

const Shop = () => {
  return (
    <section>
      <Container>
        <Heading text='Products' className='pt-[124px]'/>
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[127px]'>
          <p>Home</p> <span>></span> <p>Products</p>
        </Flex>
        <Subheading text='Shop by Category' className='pb-[35px]'/>
        <Flex className='gap-x-10'>
          <div className='w-3/12'>
            <Flex className='items-center justify-between border-b border-[#f0f0f0]'>
              <p className='text-[#767676] font-DM pb-5'>Mobile Phone</p>
              <FiPlus className='cursor-pointer' />
            </Flex>
            <div>
              <ul>
                <li>Redmi</li>
                <li>Xiomi</li>
                <li>Samsung</li>
                <li>Nokia</li>
              </ul>
            </div>
          </div>      
        </Flex>  
      </Container>
    </section>
  );
}

export default Shop;
