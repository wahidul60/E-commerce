import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { RxCross2 } from 'react-icons/rx'
import Button from './Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AddToCard = ({src}) => { 
     let cardItem = useSelector((state)=>state.addtocard.cardObj)   
     let total = cardItem.map(item=>(item.quantity*item.price)) 
  return (
    <div className='bg-[#F0F0F0] absolute top-8 right-0 w-[360px] h-auto z-10 '>
           
        { cardItem.length > 0 ? 
            <>
                {cardItem.map(item=>(
                    
                    <>
                        <Flex className='m-5' >
                        <div className='w-1/3'>
                            <Image className='w-[80px] h-[80px] bg-amber-100' 
                                src={item.image}/>
                        </div> 

                        <Flex className='justify-between w-2/3 items-center'>
                            <div>
                                <p className='font-DM font-bold text-[14px]'>{item.title}</p>
                                <p className='font-DM font-bold text-[14px] mb-0 pb-0'>$ {item.price}</p>
                                <p className='font-DM text-[#7b7b7b] font-noramal text-[10px] mt-0 pt-0'>Quantity: {item.quantity}</p>
                            </div>
                            <RxCross2 className='text-5'/>
                        </Flex>

                        </Flex>
                    </> 
                        ))
                    }

                        
                </> : <p className='text-center mt-10'>Card is empty!</p>}
                
                <Flex className='ml-5 mb-3 mt-7'>
                    <p className='font-DM font-normal text-[16px] mr-2 text-[#767676]'>Subtotal : </p>
                    <p className='font-DM font-normal text-[16px] '>{total+=total}</p>
                </Flex>

                <Flex className='gap-x-5 items-center justify-center mb-5'>
                    <Link to='card'>
                        <Button className='w-[148px] duration-300 h-[50px] !py-[12px] !px-[30px] border hover:border hover:text-black hover:border-[#767676] hover:bg-white' text='View Card'/>
                    </Link>
                    <Button className='duration-300 w-[148px] h-[50px] !py-[12px] !px-[30px] border hover:border hover:text-black hover:border-[#767676] hover:bg-white ' text='Checkout'/>    
                </Flex>
                                                                                              
    </div>
  )
}

export default AddToCard
