import React, { useState } from 'react'
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Image from '../Component/Image';
import { RxCross2 } from 'react-icons/rx';
import Button from '../Component/Button';

const TopBar = ({src}) => {
    let [card, setCard] = useState(false);
    let handleAddToCard =()=>{
        setCard(!card)
    }
  return (
   <section className='bg-[#e4e4e4] w-full'>
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
                    <input type="text" className='w-full bg-white font-DM font-normal text-[14px] px-4 py-4 mx-6 my-6 rounded' placeholder='Search Products' />
                    <div className='absolute top-1/2 right-0 -translate-x-1/2'><IoMdSearch /></div>
                </div>
                <div className='w-4/16 '>
                    <Flex className=' justify-end gap-5'>
                    <Link to='login'>
                            <Flex>
                                <IoMdContact className='text-black' />
                                <IoMdArrowDropdown className='text-black' />  
                            </Flex>
                        </Link>
                        
                        <div className='relative cursor-pointer'>
                            <IoCartOutline onClick={handleAddToCard}  />
                        {
                            card && (
                                <div className='bg-[#F0F0F0] absolute top-8 right-0 w-[360px] h-[241px] z-10'>
                                   <Flex className='items-center'>
                                       
                                        <div className='mt-5 ml-5 mb-[34px] w-1/3'>
                                            <Image className='w-[80px] h-[80px] bg-amber-100' src={src}/>
                                        </div>                                        
                                        
                                        <Flex className='justify-between w-2/3 mr-5 items-center'>
                                            <div >
                                                <p className='font-DM font-bold text-[14px]'>Black Smart Watch</p>
                                                <p className='font-DM font-bold text-[14px]'>$44.00</p>
                                            </div>
                                            <RxCross2 className='text-5'/>
                                        </Flex>                                    

                                    </Flex> 

                                    <Flex className='ml-5 mb-3'>
                                        <p className='font-DM font-normal text-[16px] text-[#767676]'>Subtotal:</p>
                                        <p className='font-DM font-normal text-[16px] '>$44.00</p>
                                    </Flex>     

                                    <Flex className='gap-x-5 items-center justify-center'>
                                        <Button className='w-[148px] h-[50px] !py-[12px] !px-[30px] border hover:border hover:text-black hover:border-[#767676] hover:bg-white' text='View Card'/>
                                        <Button className='w-[148px] h-[50px] !py-[12px] !px-[30px] border hover:border hover:text-black hover:border-[#767676] hover:bg-white ' text='Checkout'/>    
                                    </Flex>                                                                      
                                </div>
                            )
                        }
                        </div>
                           
                    </Flex>
                </div>
            </Flex>

        </div>
    </Container>
    
   </section>
  )
}

export default TopBar
