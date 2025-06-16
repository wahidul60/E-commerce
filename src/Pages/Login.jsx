import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import SubHeading from '../Component/SubHeading'
import Flex from '../Component/Flex'
import Button from '../Component/Button'

const Login = () => {
  return (
    <section>
      <Container>
        <Heading text='Login' className='pt-[124px]'/>
         <Flex className='gap-x-2 text-[#767676] font-DM pb-[125px] pb-[127px]'>
        <p>Home</p> <span>></span> <p>Contact</p>
        </Flex>
        <div className='pb-[62px] border-b border-[#f0f0f0]'>
          <p className='text-[#767676] font-DM w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>        
        <Heading text='Returning Customer' className='pt-[57px] pb-[42px]'/>
        <Flex className='gap-x-10 pb-7'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='name'> <SubHeading  text='Email address:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='email' id='name' placeholder='company@domain.com'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='password'> <SubHeading  text='Password:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='password' placeholder='company@domain.com'></input>
          </label>
        </Flex>
       <div className='pb-[70px] border-b border-[#f0f0f0]'> <Button className='hover:bg-white hover:text-black hover:border-black border duration-500'  text='Log in'/></div>
       <Heading text='New Customer' className='pt-[58px] pb-[38px]'/>
       <p className='w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
       <div className='pt-[51px] pb-[140px]'><Button text='Continue'/></div>
      </Container>
    </section>
  )
}

export default Login
