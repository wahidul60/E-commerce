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
import CardImage9 from '../assets/CardImage9.png'
import CardImage10 from '../assets/CardImage10.png'
import CardImage11 from '../assets/CardImage11.png'
import CardImage12 from '../assets/CardImage12.png'
import Ad4 from '../assets/Ad4.png'
import Image from '../Component/Image'
import Button from '../Component/Button'
import Slider from "react-slick";
import PrevArrow from '../Component/PrevArrow'
import NexArrow from '../Component/NexArrow'
import { useEffect, useState } from 'react'
import axios from 'axios'




const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 })
  })
  let [data, setData] = useState([])


  useEffect(() => {
    async function allData() {
      let data = await axios.get('https://dummyjson.com/products')
      setData(data.data.products)
    }
    allData()
  }, [])


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <NexArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Bestsellers = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    nextArrow: <NexArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  

  };

  return (

    <div>
      <Banner />
      <Information />
      <Ads />
      <Container>
        <Heading text='New Arrivals' className='pb-12' />
        <div className="slider-container">
          <Slider {...settings}>

            {
              data.map(item => (
                <Card
                  src={item.thumbnail} productName={item.title} price={item.price} text1='New' />
              ))
            }

          </Slider>
        </div>
        <Flex className='gap-x-10 justify-between pb-[118px]'>
        </Flex>
        <Heading text='Our Bestsellers' className='pb-12' />
        <Slider {...Bestsellers} className='pb-[118px]' >

          {
            data.map(item => (
              <Card src={item.thumbnail} productName={item.title} price={item.price} text1='New' />
            ))
          }


        </Slider>
        <div className='relative pb-[128px] w-100% max-w-container h-auto mx-auto px-5'>
          <Image src={Ad4} className='' />
          <div className='absolute max-sm:relative max-sm:top-0 max-sm:left-0 top-[61px] left-[700px] w-100% max-w-container h-auto mx-auto px-5'>
            <Heading text='Phone of the year' className='pb-[38px]' />
            <p className='w-full pb-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
            <Button text='Shop Now' />
          </div>
        </div>
        <Heading text='Special Offers' className='pb-[48px]' />
        <Flex className='gap-x-10 justify-between pb-[118px] flex-wrap'>
          <Card src={CardImage9} productName='Basic Crew Neck Tee' price={44} text1='New' />
          <Card src={CardImage10} productName='Basic Crew Neck Tee' price={44} text1='New' />
          <Card src={CardImage11} productName='Basic Crew Neck Tee' price={44} text1='New' />
          <Card src={CardImage12} productName='Basic Crew Neck Tee' price={44} text1='New' />
        </Flex>
      </Container>
    </div>
  )
}

export default Home 
