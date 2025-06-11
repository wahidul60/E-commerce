import React from 'react'
import Image from './Image'
import Flex from './Flex'

const Card = ({productName,src,price,text1}) => {
  return (
    <section>
        <div className='w-[370px] h-[465px] relative'>
            <Image src={src} className='w-full h-[370px] pb-6 '/>
            <Flex className='justify-between'>
                <h1 className='font-DM text-[20px] text-[#262626] font-bold pb-4'>{productName}</h1>
                <h3 className='font-DM text-[16px] text-[#6D6D6D]'>{price}</h3>
            </Flex>
            <h3 className='font-DM text-[16px] text-[#6D6D6D]'>Black</h3>
            <div className='bg-black w-[100px] h-[35px] absolute top-[20px] left-[20px] justify-center items-center flex'>
                <p className='text-white px-2 py-2 font-DM text-[16px] font-bold'>{text1}</p>
            </div>                
        </div>        
    </section>       
    
  )
}

export default Card
