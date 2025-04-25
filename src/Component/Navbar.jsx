import React from 'react'
import Image from './Image'
import Logo from '../assets/Logo.png'
import List from './List'
import Flex from './Flex'
import Container from './Container'


const Navbar = () => {
  return (
    <section>
        <Container>
          <nav className='py-8'>
              <Flex>
                <div className='w-4/12'> <Image src={Logo} /></div>
                <div className='w-4/12'>
                    <Flex className='gap-[39px]'>
                      <List text="Home"/>
                      <List text="Shop"/>
                      <List text="About"/>
                      <List text="Contacts"/>
                      <List text="Journal"/>
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
