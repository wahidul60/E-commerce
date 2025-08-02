import React from 'react'
import Image from '../Component/Image'
import Bannerx from '../assets/Slider.png'
import Container from '../Component/Container'
import Button from '../Component/Button'


const Banner = () => {
  return (
    <section className='bg-[#F5F7F9] h-[597px] max-sm:h-auto'>
      <Container>
        <div className='justify-center items-center max-sm:py-5'>
          <div className='relative'>
              <Image className='max-sm:hidden pb-5' src={Bannerx} />
            <div className='absolute left-0 top-40 max-sm:top-5 max-sm:relative max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center '>
              <h1 className='text-[49px] max-sm:text-[26px] font-DM font-bold'>Final Offer</h1>
              <p className='pb-[49px] max-sm:pt-0 pt-[33px] max-sm:pb-5'>Up to <span className='font-bold text-[40px] max-sm:text-[30px]'>50%</span> sale for all furniture items!</p>
              <Image className='max-sm:w-full max-sm:inline pb-5 hidden' src={Bannerx} />
              <Button text="Shop Now" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
