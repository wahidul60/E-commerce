import React from 'react'
import SubHeading from '../Component/SubHeading'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import List from '../Component/List'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from 'react-router-dom'




const Footer = () => {
  return (
    <section className='bg-[#e4e4e4] w-full'>
        <Container>
            <div className='bg-[#e4e4e4] w-full'>
                <Flex className='justify-between pt-[55px] pb-[65px]'>
                <div className='w-2/12'>
                      <SubHeading className='pb-4' text='MENU'/>
                      <Link to='/'><List text="Home"/></Link>
                      <Link to='shop'><List text="Shop"/></Link>
                      <Link to='about'><List text="About"/></Link>
                      <Link to=''><List text="Contact"/></Link>                                    
                </div> 
                <div className='w-2/12'>
                    <SubHeading className='pb-4' text='SHOP'/>
                    <List text='Cat1'></List>
                    <List text='Cat2'></List>
                    <List text='Cat3'></List>
                    <List text='Cat4'></List>                    
                </div> 
                <div className='w-3/12'>
                    <SubHeading className='pb-4' text='HELP'/>
                    <List text='Privacy Policy'></List>
                    <List text='Terms & Conditions'></List>
                    <List text='Special E-shop'></List>
                    <List text='Shipping'></List>                    
                    <List text='Secure Payments'></List>                    
                </div> 
                <div className='w-3/12'> 
                    <SubHeading text='(052) 611-5711'/>
                    <SubHeading text='compa'/>
                    <p className='text-DM font-[500] text-[14px] text-[#767676]'>575 Crescent Ave. Quakertown, PA 18951</p>                                           
                </div> 
                <div className='w-3/12'>
                    <h1 className='font-DM text-2xl font-bold'>ORIBI</h1>
                </div> 
            </Flex>
            <Flex className='justify-between'>
              <div className='flex gap-x-4'><FaFacebook /> <FaLinkedin/><IoLogoInstagram /></div>
              <div> <p className='text-DM font-[500] text-[14px] text-[#767676]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p> </div>
            </Flex>
            </div>
        </Container>

    </section>
  )
}

export default Footer
