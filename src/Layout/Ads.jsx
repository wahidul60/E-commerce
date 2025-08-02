import React from 'react'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import Ad1 from '../assets/Ad1.jpg'
import Ad2 from '../assets/Ad2.jpg'
import Ad3 from '../assets/Ad3.jpg'
import Container from '../Component/Container'

const Ads = () => {
  return (
    <section>
        <Container>
            <Flex className='pt-[104px] max-sm:py-7 pb-[128px] justify-between max-sm:flex-col'>
                <div><Image src={Ad1} className='cursor-pointer'/></div>
                <div>
                    <div className='pb-[30px]'><Image src={Ad2} className='cursor-pointer'/></div>
                    <div><Image src={Ad3} className='cursor-pointer'/></div>
                </div>
            </Flex>
        </Container>
       
    </section>
  )
}

export default Ads
