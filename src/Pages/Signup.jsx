import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import Flex from '../Component/Flex'
import SubHeading from '../Component/SubHeading'
import Button from '../Component/Button'

const Signup = () => {
  return (
    <section>
      <Container>
          <Heading text='Signup' className='pt-[124px]'/>
          <Flex className='gap-x-2 text-[#767676] font-DM pb-[125px]'>
            <p>Home</p> <span>></span> <p>Signup</p>
          </Flex>
          <div className='pb-[62px] border-b border-[#f0f0f0]'>
            <p className='text-[#767676] font-DM w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          </div>  
            <Heading text='Your Personal Details' className='pt-[57px] pb-[42px]'/>
        <Flex className='gap-x-10 pb-7'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='name'> <SubHeading  text='First Name:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='text' id='name' placeholder='Type your first name'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='password'> <SubHeading  text='Last Name:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='password' placeholder='Type your Last Name'></input>
          </label>
        </Flex>
        <Flex className='gap-x-10 pb-[69px]'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='name'> <SubHeading  text='Email address:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='email' id='name' placeholder='Your first name'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='password'> <SubHeading  text='Telephone:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='password' placeholder='Your phone number'></input>
          </label>
        </Flex>
        <div className='border-b border-[#f0f0f0] '></div>
        <Heading text='New Customer' className='pt-[57px] pb-[43px]'/>
        <Flex className='gap-x-10 pb-[16px]'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address1'> <SubHeading  text='Address 1:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded w-[250px]' type='email' id='address1' placeholder='4279 Zboncak Port Suite 6212'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address2'> <SubHeading  text='Address 2:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='address2' placeholder='Enter your address'></input>
          </label>
        </Flex>
        <Flex className='gap-x-10 pb-[16px]'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address1'> <SubHeading  text='City:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded w-[250px]' type='email' id='address1' placeholder='4279 Zboncak Port Suite 6212'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address2'> <SubHeading  text='Post Code:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='address2' placeholder='Enter your address'></input>
          </label>
        </Flex>
        <Flex className='gap-x-10 pb-[69px]'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address1'> <SubHeading  text='Country:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded w-[250px]' type='email' id='address1' placeholder='4279 Zboncak Port Suite 6212'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address2'> <SubHeading  text='Region/State:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='address2' placeholder='Enter your address'></input>
          </label>
        </Flex>
        <div className='border-b border-[#f0f0f0] '></div>
         <Heading text='Your Password' className='pt-[57px] pb-[43px]'/>
        <Flex className='gap-x-10 pb-[70px]'>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address1'> <SubHeading  text='Password:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded w-[250px]' type='email' id='address1' placeholder='4279 Zboncak Port Suite 6212'></input>
          </label>
          <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='address2'> <SubHeading  text='Repeat Password:'/> 
            <input className='text-[#767676] font-DM text-[10px] p-1 rounded' type='password' id='address2' placeholder='Enter your address'></input>
          </label>
        </Flex>
        <div className='border-b border-[#f0f0f0] '></div>
        <Flex className='gap-4 pt-[65px] pb-[23px]'>
          <input className='text-[#767676]' type="checkbox" />
          <p className='text-[#767676] font-DM'>I have read and agree to the Privacy Policy</p>
        </Flex>
        <Flex className='gap-x-[33px] pb-7'>
           <p className='text-[#767676] font-DM'>Subscribe Newsletter</p>
           <Flex className='gap-x-4'>
            <input type="checkbox" />
            <p className='text-[#767676] font-DM'>Yes</p>
           </Flex>
           <Flex className='gap-x-4'>
              <input type="checkbox" />
              <p className='text-[#767676] font-DM'>No</p>
           </Flex>
        </Flex>
        <div className='pb-[104px]'><Button text='Log in'/></div>
      </Container>
    </section>
    
  )
}

export default Signup
