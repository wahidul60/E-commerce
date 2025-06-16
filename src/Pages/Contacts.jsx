import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import Flex from '../Component/Flex'
import SubHeading from '../Component/SubHeading'
import Button from '../Component/Button'

const Contacts = () => {
  return (
    <section>
      <Container>
        <Heading className='pt-[124px] pb-3' text='Contacts'/>
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[125px]'>
        <p>Home</p> <span>></span> <p>Contact</p>
        </Flex>
        <Heading text='Fill up a Form' className='pb-10'/>
         <label className='pb-4 block border-b border-[#f0f0f0] w-1/2' htmlFor='name'> <SubHeading  text='Name:'/> 
                <input className='text-[#767676] font-DM text-[10px] p-1 rounded' id='name' placeholder='Enter your name here'></input>
             </label>
              
             <label className='pb-4 block border-b border-[#f0f0f0] pt-5 w-1/2' htmlFor='email'> <SubHeading  text='Email:'/> 
                <input className='text-[#767676] font-DM text-[10px] p-1 rounded' id='email' placeholder='Enter your email here'></input>
             </label> 

             <label className='pb-4 block border-b border-[#f0f0f0] pt-5 w-1/2' htmlFor='review'> <SubHeading  text='Message:'/> 
                <textarea id="review" rows="10" cols="100" className='text-[#767676] font-DM text-[10px] p-1 rounded' placeholder='Enter your message here'></textarea>
             </label> 
             <div className='pt-4 pb-[140px]'><Button text='Post'/></div>
        <div className="flex justify-center items-center pb-[100px]">
          <iframe
            className="w-[1000px] h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.449832840806!2d90.4042250111606!3d24.74917334960957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f03d30bf7d3%3A0xb6396ad75ac2da40!2sCreative%20IT%20Solution!5e1!3m2!1sen!2sbd!4v1750074482140!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  )
}

export default Contacts
