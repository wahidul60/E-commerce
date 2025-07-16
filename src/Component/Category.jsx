import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Flex from './Flex'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCategory } from '../Slices/categorySlice'


const Category = ({categoryName, children}) => {   
    let dispatch = useDispatch () 

    let handleCategory =()=>{
        dispatch(toggleCategory(categoryName))
        
    }
    let categoryData = useSelector((state)=>state.category.openCategories[categoryName] || false)
    
  return (
        <div>
            <Flex className='w-full items-center justify-between border-b border-[#f0f0f0]'>
            <p className='text-[#767676] font-DM pb-5 pt-5'>{categoryName}</p>
            <div onClick={handleCategory} className='pb-5 pt-5'>
                
                {
                categoryData ? <FiMinus className='cursor-pointer text-[#767676]'/> : <FiPlus className='cursor-pointer text-[#767676]' />
                }                    

            </div>
            </Flex>
            {categoryData && <>{children}</>}
        </div>
        

   
  )
}

export default Category
