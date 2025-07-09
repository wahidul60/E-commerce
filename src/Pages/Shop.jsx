import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Heading from '../Component/Heading'
import SubHeading from '../Component/SubHeading'
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slices/counterSlice'

const Shop = () => {  
  let dispatch = useDispatch()
  let data1 = useSelector((state)=> state.counter.value) 
  let handleIncrement =()=> {
    dispatch (increment(1))
  }
  return (
    <section>
      <Container>      
        <button onClick={handleIncrement}>increment</button>        
        <p>{data1}</p>
        <Heading text='Products' className='pt-[124px]'/>
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[127px]'>
          <p>Home</p> <span>></span> <p>Products</p>
        </Flex>
        <SubHeading text='Shop by Category' className='pb-[35px]'/>
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
