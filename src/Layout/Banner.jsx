import Image from '../Component/Image'
import slider from '../assets/Slider.png'
import slider2 from '../assets/Slider2.png'
import slider3 from '../assets/Slider3.png'
import Container from '../Component/Container'
import Button from '../Component/Button'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,

  };

  return (

    <section className='bg-[#F5F7F9] h-[597px] max-sm:h-auto'>
      <Container>
        <div className='max-sm:py-5 relative'>
          <div className='slider-container max-sm:hidden'>
            <Slider {...settings}>
              <div><Image className='max-sm:w-full' src={slider} /></div>
              <div><Image className='max-sm:w-full' src={slider2} /></div>
              <div><Image className='max-sm:w-full' src={slider3} /></div>
              <div><Image className='max-sm:w-full' src={slider} /></div>
              <div><Image className='max-sm:w-full' src={slider2} /></div>
            </Slider>
          </div>
         
          <div className='absolute left-0 top-40 max-sm:top-0 max-sm:py-5 max-sm:relative max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <h1 className='text-[49px] max-sm:text-[26px] font-DM font-bold'>Final Offer</h1>
            <p className='pb-[49px] max-sm:pt-0 pt-[33px] max-sm:pb-0'>Up to <span className='font-bold text-[40px] max-sm:text-[30px]'>50%</span> sale for all furniture items!</p>
            <Button className='text-center block max-sm:hidden ' text="Shop Now" />
          </div>

          
          <div className='slider-container max-sm:w-full hidden max-sm:inline pb-5'>
            <Slider {...settings}>
              <div><Image className='' src={slider} /></div>
              <div><Image className='' src={slider2} /></div>
              <div><Image className='' src={slider3} /></div>
              <div><Image className='' src={slider} /></div>
              <div><Image className='' src={slider2} /></div>
            </Slider>
          </div>
          
          {/* <Image className='max-sm:w-full hidden max-sm:inline pb-5 ' src={slider} /> */}
          <Button className='text-center hidden mt-8 mx-auto max-sm:block' text="Shop Now" />
          
        </div>
      </Container>
    </section>
  )
}

export default Banner;

