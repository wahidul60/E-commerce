import React from 'react'
import Image from '../Component/Image'
import Bannerx from '../assets/Slider.png'
import Container from '../Component/Container'
import Button from '../Component/Button'


const Banner = () => {
  return (
    <section className='bg-[#F5F7F9] h-[597px]'>
      <Container>
          <div className='justify-center items-center'>              
              <div className='relative'>
                <Image src={Bannerx}/>
                <div className='absolute left-0 top-40'>
                  <h1 className='text-[49px] font-DM font-bold'>Final Offer</h1>
                  <p className='pb-[49px] pt-[33px]'>Up to <span className='font-bold text-[40px]'>50%</span> sale for all furniture items!</p>
                  <Button text="Shop Now"/>
                </div>
              </div>
          </div>         
      </Container>
    </section>
  )
}

export default Banner
