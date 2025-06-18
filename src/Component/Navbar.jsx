import React from 'react'
import Image from './Image'
import Logo from '../assets/Logo.png'
import List from './List'
import Flex from './Flex'
import Container from './Container'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <section>
        <Container>
          <nav className='py-8'>
              <Flex>
                <div className='w-4/12'> <Image src={Logo} /></div>
                <div className='w-4/12'>
                    <Flex className='gap-[39px] w-full justify-center'>
                      <Link to='/'><List className='w-1/5' text="Home"/></Link>
                      <Link to='shop'><List className='w-1/5' text="Shop"/></Link>
                      <Link to='about'><List className='w-1/5' text="About"/></Link>
                      <Link to='contacts'><List className='w-1/5' text="Contact"/></Link>
                      <Link to=''><List text="Journal"/></Link>
                    </Flex>
                </div>
                <div className='w-4/12'></div>
              </Flex>
          </nav>
        </Container>
    </section>
  )
}

export default Navbar
