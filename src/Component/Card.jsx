import Image from './Image'
import Flex from './Flex'
import { IoMdHeart } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { useDispatch } from 'react-redux';
import { addToCard } from '../Slices/addToCardSlice';
import { Link } from 'react-router-dom';

const Card = ({ productName, src, price, text1 }) => {
  let dispatch = useDispatch()

  let handleAddToCard = () => {
    dispatch(addToCard({
      title: productName,
      price: price,
      image: src,
      quantity: 1
    }))

  }
  return (
    <section>
      <div className='w-[300px] p-1 relative group overflow-hidden hover:scale-[1.03] duration-200 border border-[#e4e4e4]'>
        <Image src={src} className='w-full h-[300px] mb-6  ' />
        <Flex className='justify-between items-center pb-4 '>
          <Link to={`/product/${productName}`}><h1 className='font-DM text-[20px] text-[#262626] font-bold pl-1'>{productName.substring(0, 15) + " ..."}  </h1></Link>
          <h1 className='font-DM text-[16px] text-[#6D6D6D] pr-1'>$ {price} </h1>
        </Flex>

        <h3 className='font-DM text-[16px] text-[#6D6D6D] pl-1'>Black</h3>
        <div className='bg-black w-[100px] h-[35px] absolute top-[20px] left-[20px] justify-center items-center flex'>
          <p className='text-white px-2 py-2 font-DM text-[16px] font-bold'>{text1}</p>
        </div>

        <div className='w-[300px] absolute bg-white group-hover:bg-white/90 opacity-0 group-hover:opacity-100 group-hover:bottom-[92px] duration-500 cursor-pointer '>
          <ul className='flex flex-col items-end gap-y-4 pr-7 py-7'>
            <li className='flex items-center gap-x-3 font-DM text-[16px]'>
              Add to Wish List
              <IoMdHeart />
            </li>
            <li className='flex items-center gap-x-3 font-DM text-[16px]'>
              Compare <TfiReload />
            </li>
            <div >
              <li onClick={handleAddToCard} className='flex items-center gap-x-3 font-DM text-[16px] font-bold'>
                Add to Cart
                <MdShoppingCart />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Card
