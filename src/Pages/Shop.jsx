import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Heading from '../Component/Heading'
import SubHeading from '../Component/SubHeading'
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slices/counterSlice'
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Pagination from '../Component/Pagination';
import PaginationList from '../Component/PaginationList';
import { RxDashboard } from 'react-icons/rx';
import { TfiViewListAlt } from 'react-icons/tfi';
import { useState } from 'react';

const Shop = () => {  
  let [dash, setDash] = useState(true)
  let [list, setList] = useState(false)
  let dispatch = useDispatch()
  let data1 = useSelector((state)=> state.counter.value) 
  let previousValue = useSelector((state)=> state.active.previousValue) 
  let currentValue = useSelector((state)=>state.active.currentValue)
  
  let handleDashboard =()=>{    
    setDash(true);
    setList(false);
  }
  
  let handleListview =()=>{
    setDash(false);
    setList(true);
  }

  
  let handleIncrement =()=> {
    dispatch (increment(1))    
  }  
  return (
    <section>
      <Container>      
        <button onClick={handleIncrement}>increment</button>        
        <p>{data1}</p>
                
        <Heading text='Products' className='pt-[124px]'/>
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[127px] items-center'>
          <p> <Link to={previousValue=="Home"? "/" : `/${previousValue?.toLowerCase()}`}>{!previousValue || previousValue===currentValue? previousValue="Home":previousValue}</Link> </p> <span><FaAngleRight /></span> <p>{currentValue || 'Shop'}</p>
        </Flex>
       
       <Flex className= 'w-[full]'>
        <div className='w-3/12'>
          <SubHeading text='Shop by Category' className='pb-[35px]'/>
            <Flex className='gap-x-10'>
              <div>
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
        </div>
        
        <div className='w-9/12'>
          <Flex className='pb-[60px] w-full justify-between'>
            <div className='w-[1/2]'>
              <Flex className='gap-x-5'>
               
                <div onClick={handleDashboard}> 
                  <RxDashboard className= {`${dash? 'bg-[#262626] text-white ':'hover:bg-[#262626] duration-300 hover:text-white'} cursor-pointer text-[#737373]   w-[36px] h-[36px] text-[10px] p-2 border border-[#bfbfbf]`}/>
                </div>
               
                <div onClick={handleListview}>
                  <TfiViewListAlt className={`${list?'bg-[#262626] text-white':'hover:bg-[#262626] duration-300 hover:text-white'} cursor-pointer text-[#737373] duration-300 hover:bg-[#262626] hover:text-white w-[36px] h-[36px] text-[10px] p-2 border border-[#bfbfbf]`}/>
                </div>

              </Flex>                
            </div>
           
            <div className='w-[1/2]'>
              <Flex className='gap-x-10'>
                
                <div>
                  <label for='short' className='cursor-pointer font-DM font-normal text-4 text-[#767676] mr-6'>Sort by:</label>
                    <select name="" id="short" className='border rounded border-[#bfbfbf] p-2 pr-[120px] text-[#767676]'>
                      <option value="Feature">Feature</option>
                      <option value="Colour">Colour</option>
                      <option value="Price">Price</option>
                    </select>
                </div>
                          
                <div>
                  <label for='show' className='cursor-pointer font-DM font-normal text-4 text-[#767676] mr-4 '>Show:</label>
                    <select name="" id="show" className='font-normal text-[16px] font-DM p-2 pr-[66px] border rounded border-[#bfbfbf] text-[#767676]'>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="24">36</option>
                      <option value="24">48</option>
                    </select>
                </div>

              </Flex>
            </div>
          </Flex>
          
          {dash ? <Pagination itemsPerPage={8} /> : <PaginationList itemsPerPage={8} /> }
        
          
             
        </div> 
       </Flex>
        

      </Container>
    </section>
  );
}

export default Shop;
