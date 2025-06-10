import React from 'react'
import SubHeading from '../Component/SubHeading'
import Container from '../Component/Container'
import Flex from '../Component/Flex'

const Footer = () => {
  return (
    <section className='bg-[#e4e4e4]'>
        <Container>
            <Flex>
                <div>
                    <SubHeading text='MENU'/>
                    
                </div> 

            </Flex>
        </Container>

    </section>
  )
}

export default Footer
