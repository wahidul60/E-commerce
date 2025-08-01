import React, { useEffect, useState } from 'react'
import Image from '../Component/Image'
import Flex from '../Component/Flex'
import Container from '../Component/Container'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import Heading from '../Component/Heading'
import SubHeading from '../Component/SubHeading'
import { IoMdStar } from "react-icons/io";
import Button from '../Component/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Product = ({ src }) => {
  let singleProduct = useParams()
  let [data, setData] = useState([])

  useEffect(() => {
    let Data = async () => {
      let data = await axios.get('https://dummyjson.com/products');
      setData(data.data.products)
    }; Data()
  }, [])
  console.log(data)

  return (
    <section>
      <Container>
        {
          data.map(item => {
            if (item.title === singleProduct.id) {
              return (
                <>
                  <Flex className='gap-x-10 pt-[140px] pb-10'>
                    <div><Image className='w-[400px] h-[400px]' src={item.thumbnail} /></div>
                  </Flex>
                  <Heading text={singleProduct.id} className='pb-4' />
                  <Flex>
                    <div className='pr-5 pb-5'>
                      <ul className='flex text-[#FFD881]'>
                        <li><IoMdStar /></li>
                        <li><IoMdStar /></li>
                        <li><IoMdStar /></li>
                        <li><IoMdStar /></li>
                        <li><IoMdStar /></li>
                      </ul>
                    </div>
                    <p className='text-[#767676]'>1 Review</p>
                  </Flex>
                  <Flex className='items-center pb-4 border-b border-[#f0f0f0]'>
                    <del className='pr-6 text-[#767676] text-[16px]'><p>${item.price}</p></del>
                    <SubHeading className='text-[20px]' text={`${item.price}`} />
                  </Flex>
                  <Flex className='py-7'>
                    <SubHeading text='COLOR:' className='pr-[53px] ' />
                    <ul className='flex gap-x-4 '>
                      <li className='w-5 h-5 rounded-full hover:scale-[1.5] duration-300 transition- bg-[#000000]'></li>
                      <li className='w-5 h-5 rounded-full bg-[#FF8686] hover:scale-[1.5] duration-300'></li>
                      <li className='w-5 h-5 rounded-full bg-[#7ED321] hover:scale-[1.5] duration-300'></li>
                      <li className='w-5 h-5 rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-300'></li>
                      <li className='w-5 h-5 rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-300'></li>
                    </ul>
                  </Flex>
                  <Flex className='items-center pb-8'>
                    <SubHeading text='SIZE:' className='pr-[65px]' />
                    <select className='border p-2.5 border-[#c2c2c2] rounded pr-4 text-[#767676] '>
                      <option name='size' value="">Select Size</option>
                      <option name='size' value="">Small</option>
                      <option name='size' value="">M</option>
                      <option name='size' value="">L</option>
                      <option name='size' value="">XL</option>
                      <option name='size' value="">XXL</option>
                    </select>
                  </Flex>
                  <Flex className='items-center pb-8 border-b border-[#f0f0f0]'>
                    <SubHeading text='QUANTITY:' className='pr-5' />
                    <div className='px-5 py-1 flex gap-x-6 border border-[#c2c2c2] text-[#767676]'>
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </Flex>
                  <Flex className='items-center border-b border-[#f0f0f0]'>
                    <SubHeading text='STATUS:' className='pr-5 border-b py-5 border-[#f0f0f0]' />
                    <p className='text-[#767676]'>In stock</p>
                  </Flex>
                  <Flex className='gap-x-5 pt-7 pb-7 border-b border-[#f0f0f0]'>
                    <Button text='Add to Wish List' className='hover:bg-white hover:text-black duration-300 hover:border border' />
                    <Button text='Add to Cart' className='hover:bg-white hover:text-black duration-300 hover:border border' />
                  </Flex>
                  <Flex className='py-7 w-1/2 border-b border-[#f0f0f0] justify-between'>
                    <SubHeading text='FEATURES & DETAILS' />
                    <span className='font-bold font-DM text-[20px]'>+</span>
                  </Flex>
                  <Flex className='py-7 w-1/2 border-b border-[#f0f0f0] justify-between'>
                    <SubHeading text='SHIPPING & RETURNS' />
                    <span className='font-bold font-DM text-[20px]'>+</span>
                  </Flex>
                  <p className='font-DM text-[#767676] pb-[123px] w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Flex className='gap-x-5 pb-10'>
                    <div><p className='font-DM text-[#767676] text-[20px]'>Description</p></div>
                    <div><p className='font-DM font-bold text-[20px]'>Reviews (1) </p></div>
                  </Flex>
                  <p className='font-DM text-[#767676] pb-[17px] border-b border-[#f0f0f0] '>1 review for Product</p>
                  <Flex className='pt-6 pb-4 border-b w-full border-[#f0f0f0] justify-between'>
                    <Flex className='gap-x-10'>
                      <p className='font-DM'>John Ford</p>
                      <div className='pr-5 pb-5'>
                        <ul className='flex text-[#FFD881]'>
                          <li><IoMdStar /></li>
                          <li><IoMdStar /></li>
                          <li><IoMdStar /></li>
                          <li><IoMdStar /></li>
                          <li><IoMdStar /></li>
                        </ul>
                      </div>
                    </Flex>
                    <p className='font-DM text-[#767676]'>6 months ago</p>
                  </Flex>
                  <p className='font-DM text-[#767676] pb-[15px] pt-4 border-b border-[#f0f0f0]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <SubHeading className='py-13 text-[22px]' text='Add a Review' />
                  <label className='pb-4 block border-b border-[#f0f0f0]' htmlFor='name'> <SubHeading text='Name:' />
                    <input className='text-[#767676] font-DM text-[10px] p-1 rounded' id='name' placeholder='Enter your name here'></input>
                  </label>

                  <label className='pb-4 block border-b border-[#f0f0f0]' htmlFor='email'> <SubHeading text='Email:' />
                    <input className='text-[#767676] font-DM text-[10px] p-1 rounded' id='email' placeholder='Enter your email here'></input>
                  </label>

                  <label className='pb-4 block border-b border-[#f0f0f0]' htmlFor='review'> <SubHeading text='Review:' />
                    <textarea id="review" rows="10" cols="100" className='text-[#767676] font-DM text-[10px] p-1 rounded' placeholder='Enter your review here'></textarea>
                  </label>
                  <div className='pt-4 pb-[341px]'><Button text='Post' /></div>
                </>
              )
            }

          })
        }
      </Container>
    </section>
  )
}

export default Product
