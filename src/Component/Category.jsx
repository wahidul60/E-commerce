import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Flex from './Flex'

const Category = () => {
    let [category, setCategory] = useState(false)
    let handleCategory =()=>{
        setCategory(!category)
    }
    
  return (
        <Flex className='w-full items-center justify-between border-b border-[#f0f0f0]'>
            <p className='text-[#767676] font-DM pb-5'>Mobile Phone</p>
            <div onClick={handleCategory}>
                {
                category ? <FiMinus /> : <FiPlus />
                }                    
            </div>
        </Flex>
   
  )
}

export default Category
