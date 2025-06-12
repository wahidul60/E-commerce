import React from 'react'
import Banner from '../Layout/Banner'
import Information from '../Layout/Information'
import Ads from '../Layout/Ads'
import Heading from '../Component/Heading'
import Container from '../Component/Container'
import Card from '../Component/Card'
import Flex from '../Component/Flex'
import CardImage1 from '../assets/CardImage1.jpg'
import CardImage2 from '../assets/CardImage2.jpg'
import CardImage3 from '../assets/CardImage3.jpg'
import CardImage4 from '../assets/CardImage4.jpg'
import CardImage5 from '../assets/CardImage5.png'
import CardImage6 from '../assets/CardImage6.png'
import CardImage7 from '../assets/CardImage7.png'
import CardImage8 from '../assets/CardImage8.png'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Ads/>
      <Container>
        <Heading text='New Arrivals' className='pb-12'/>        
        <Flex className='gap-x-10 justify-between pb-[118px]'>
          <Card src={CardImage1} productName='Basic Crew Neck Tee' price='$44.00' text1='New' />
          <Card src={CardImage2} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
          <Card src={CardImage3} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
          <Card src={CardImage4} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
        </Flex>
        <Heading text='Our Bestsellers' className='pb-12'/>
        <Flex className='gap-x-10 justify-between pb-[118px]'>
          <Card src={CardImage5} productName='Basic Crew Neck Tee' price='$44.00' text1='New' />
          <Card src={CardImage6} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
          <Card src={CardImage7} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
          <Card src={CardImage8} productName='Basic Crew Neck Tee' price='$44.00' text1='New'/>
        </Flex>
      </Container>
    </div>
  )
}

export default Home
