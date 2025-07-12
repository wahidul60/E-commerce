import Image from './Image'
import Flex from './Flex'
import { IoMdHeart} from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";


const CardList = ({productName,src,price,text1}) => {
  return (
    <section>
        <div className='w-full relative group overflow-hidden hover:bg-[#f0f0f0] cursor-pointer duration-200 '>
            
            <Flex className='items-center justify-between'>
                <Flex className=' gap-y-2 items-center'>
                <Image src={src} className='w-[150px] h-[150px] border border-[#f0f0f0] mr-5'/>
                <div>
                    <h1 className='font-DM text-[20px] text-[#262626] font-bold pb-4'>{productName}</h1>
                    <h3 className='font-DM text-[16px] text-[#6D6D6D]'>{price}</h3>
                    <h3 className='font-DM text-[16px] text-[#6D6D6D]'>Black</h3>
                </div>
                <p className='ml-5 w-[800px] h-auto' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Voluptatum quod consectetur sit dolor. <br/> Ipsa tempore voluptatibus rerum dolorum eum accusamus nam nemo fugiat atque. .</p>
            </Flex>           
            <div className='mr-4'>
                <div className=' cursor-pointer '>
                <ul className='flex flex-col items-end gap-y-4'>
                  <li className='flex items-center gap-x-3 font-DM text-[16px]'>
                    Add to Wish List 
                    <IoMdHeart />
                  </li>
                  <li className='flex items-center gap-x-3 font-DM text-[16px]'>
                    Compare <TfiReload />
                  </li>
                  <li className='flex items-center gap-x-3 font-DM text-[16px] font-bold'>
                    Add to Cart 
                    <MdShoppingCart />
                    </li>
                </ul>
                 </div> 
            </div>
            </Flex>               
        </div>        
    </section>       
    
  )
}

export default CardList
