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
            <Flex className='pt-[104px] pb-[128px] justify-between'>
                <div><Image src={Ad1}/></div>
                <div>
                    <div className='pb-[30px]'><Image src={Ad2}/></div>
                    <div><Image src={Ad3}/></div>
                </div>
            </Flex>
        </Container>
       
    </section>
  )
}

export default Ads
