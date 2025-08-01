import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Heading from '../Component/Heading'
import SubHeading from '../Component/SubHeading'
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slices/counterSlice'
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Pagination from '../Component/Pagination';
import PaginationList from '../Component/PaginationList';
import { RxDashboard } from 'react-icons/rx';
import { TfiViewListAlt } from 'react-icons/tfi';
import { useState } from 'react';
import Category from '../Component/Category';
import SubCategory from '../Component/SubCategory';

const Shop = () => {
  let [dash, setDash] = useState(true)
  let [list, setList] = useState(false)
  let [store, setStore] = useState(12)
  let dispatch = useDispatch()
  let data1 = useSelector((state) => state.counter.value)
  let previousValue = useSelector((state) => state.active.previousValue)
  let currentValue = useSelector((state) => state.active.currentValue)
  let categoryData = useSelector((state) => state.category.value)

  let handleDashboard = () => {
    setDash(true);
    setList(false);
  }

  let handleListview = () => {
    setDash(false);
    setList(true);
  }


  let handleIncrement = () => {
    dispatch(increment(1))
  }

  let handleChange = (e) => {
    setStore(+e.target.value)
  }



  return (
    <section>
      <Container>

        <Heading text='Products' className='pt-[124px]' />
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[127px] items-center'>
          <p> <Link to={previousValue == "Home" ? "/" : `/${previousValue?.toLowerCase()}`}>{!previousValue || previousValue === currentValue ? previousValue = "Home" : previousValue}</Link> </p> <span><FaAngleRight /></span> <p>{currentValue || 'Shop'}</p>
        </Flex>

        <Flex className='w-[full] gap-x-[40px]'>

          <div className='w-3/12'>
            <SubHeading text='Shop by Category' className='pb-[35px]' />


            <Category categoryName='Mobile'>
              <SubCategory subCategoryName='Xiomi' />
              <SubCategory subCategoryName='Nokia' />
              <SubCategory subCategoryName='Samsung' />
              <SubCategory subCategoryName='Vivo' />
            </Category>

            <Category categoryName='Desktop'>
              <SubCategory subCategoryName='Monitor' />
              <SubCategory subCategoryName='Nokia' />
              <SubCategory subCategoryName='Samsung' />
              <SubCategory subCategoryName='Vivo' />
            </Category>

            <Category categoryName='TV'>
              <SubCategory subCategoryName='sdfsdf' />
              <SubCategory subCategoryName='wwww' />
              <SubCategory subCategoryName='cxcvc' />
              <SubCategory subCategoryName='sdfsdf' />
            </Category>




          </div>

          <div className='w-9/12'>
            <Flex className='pb-[60px] w-full justify-between'>
              <div className='w-[1/2]'>
                <Flex className='gap-x-5'>

                  <div onClick={handleDashboard}>
                    <RxDashboard className={`${dash ? 'bg-[#262626] text-white ' : 'hover:bg-[#262626] duration-300 hover:text-white'} cursor-pointer text-[#737373]   w-[36px] h-[36px] text-[10px] p-2 border border-[#bfbfbf]`} />
                  </div>

                  <div onClick={handleListview}>
                    <TfiViewListAlt className={`${list ? 'bg-[#262626] text-white' : 'hover:bg-[#262626] duration-300 hover:text-white'} cursor-pointer text-[#737373] duration-300 hover:bg-[#262626] hover:text-white w-[36px] h-[36px] text-[10px] p-2 border border-[#bfbfbf]`} />
                  </div>

                </Flex>
              </div>

              <div className='w-[1/2]'>
                <Flex className='gap-x-10'>

                  <div>
                    <label htmlFor='short' className='cursor-pointer font-DM font-normal text-4 text-[#767676] mr-6'>Sort by:</label>
                    <select name="" id="short" className='border rounded border-[#bfbfbf] p-2 pl-[60px] pr-[50px] text-[#767676]'>
                      <option value="Feature">Feature</option>
                      <option value="Colour">Colour</option>
                      <option value="Price">Price</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='show' className='cursor-pointer font-DM font-normal text-4 text-[#767676] mr-4 '>Show:</label>
                    <select onChange={handleChange} name="" id="show" className='font-normal text-[16px] font-DM p-2 pl-[30px] pr-[20px] border rounded border-[#bfbfbf] text-[#767676]'>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={36}>36</option>
                      <option value={48}>48</option>
                    </select>
                  </div>

                </Flex>
              </div>
            </Flex>

            {dash ? <Pagination itemsPerPage={store} /> : <PaginationList itemsPerPage={store} />}



          </div>
        </Flex>


      </Container>
    </section>
  );
}

export default Shop;
