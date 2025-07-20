
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import { RxCross2 } from 'react-icons/rx'
import Image from '../Component/Image'
import CardImage12 from '../assets/CardImage12.png'
import { FaAngleRight, FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../Component/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItem } from '../Slices/addToCardSlice'
import { useEffect, useState } from 'react'


const Card = () => {
  let cardItem = useSelector((state)=> state.addtocard.cardObj);
  let dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  let handleDecrement=(item)=>{
    item.quantity>0 &&
    dispatch(decrement (item))    
  }

  let handleIncrement = (item) => {
    dispatch(increment(item))    
  }
  

  useEffect(()=>{
    let total = 0
    cardItem.map(item=>{total+=item.quantity*item.price})
    setTotal(total)
  },[cardItem]
  )
 
  let handleRemove =(item)=> {
    dispatch(removeItem(item))
  }
  

  return (
    <section>
      <Container>
        <h4 className='font-DM text-[39px] font-bold pt-[124px]'>Cart</h4>

        <div className='gap-x-2 text-[#767676] font-DM pb-[136px]'>          
          <p>Add to Card</p>
        </div>

        <Flex className='bg-[#f0f0f0] w-full h-[90px] justify-center items-center font-DM font-bold mb-8'>
          <div className='w-3/12 pl-5'>Product</div>
          <div className='w-3/12 pl-5'>Price</div>
          <div className='w-3/12 pl-5'>Quantity</div>
          <div className='w-3/12 pl-5'>Total</div>
        </Flex>

      {
        cardItem.map(item=>(
          <div className='flex flex-col mb-1'>
            <Flex className='justify-center items-center font-DM font-bold border-[0.6px] border-[#ebeaea]'>
          
          <Flex className='w-3/12 items-center'>
            
            <div onClick={()=>handleRemove(item)} className='pl-5 pr-10 font-bold text-[20px] cursor-pointer'><RxCross2 /></div>
            <div>
              <Image src={item.image} className='w-[100px] h-[100px]' />
            </div>
            <h2 className='pl-5'>{item.title}</h2>
         
          </Flex>

          <div className='w-3/12 font-bold font-DM text-[20px]'>
            <h1>$ {item.price}</h1>
          </div>
         
          <div className='w-3/12'>
            <div className='px-5 py-1 inline-flex gap-x-6 text-[#767676] items-center border border-[#ebeaea]'>
              <span className='cursor-pointer'><FaMinus onClick={()=>handleDecrement(item)} /></span>
              <span className='font-dm text-[20px]'>{item.quantity}</span>
              <span className='cursor-pointer'><FaPlus onClick={()=>handleIncrement(item)} /></span>
            </div>
          </div>

          <div className='w-3/12 font-bold font-DM text-[20px]'>
            <h1>${item.price*item.quantity}</h1>
          </div>
        </Flex>
          </div>
        ))
      }
        

        <Flex className='justify-between items-center border-b-[0.6px] border-[#ebeaea] p-5 mb-[54px]'>
          <Flex className='gap-x-6 items-center w-3/12 p-2.5 '>
            <select className='p-2.5 rounded pr-30 text-[#767676] border-[0.6px] border-[#ebeaea]'>
              <option name='size' value="">Select Size</option>
              <option name='size' value="">Small</option>
              <option name='size' value="">M</option>
              <option name='size' value="">L</option>
              <option name='size' value="">XL</option>
              <option name='size' value="">XXL</option>
            </select>
            <h4 className='font-DM text-[14px] font-bold'>Apply coupon</h4>
          </Flex>
          <h3 className='font-DM text-[14px] font-bold'>Update cart</h3>
        </Flex>

        <div className="w-full flex justify-end">
          <div className='flex flex-col'>
            <h1 className='font-DM text-[18px] font-bold mb-4'>Cart totals</h1>

            <Flex className='w-[320px] mb-2'>
              <div className='flex font-DM text-[16px] font-bold w-1/2'>
                <h1>Subtotal</h1>
              </div>
              <div className='text-[#767676] font-DM w-1/2'>
                <p>{total} $</p>
              </div>
            </Flex>

            <Flex className='w-[320px]'>
              <div className='flex font-DM text-[16px] font-bold w-1/2'>
                <h1>Total</h1>
              </div>
              <div className='font-DM w-1/2'>
                <p>{total} $</p>
              </div>
            </Flex>
          </div>
        </div>
       
       <Link to='/checkout'><div className='w-full flex justify-end my-15' ><Button text='Proceed to Checkout'/>  </div></Link>
        
      </Container>
    
    </section>
  )
}

export default Card
