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
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../Component/PrevArrow'
import NexArrow from '../Component/NexArrow'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Home = () => {

  let [data, setData] = useState([])
  
  
  useEffect(()=> {
   async function allData(){
      let data = await axios.get('https://dummyjson.com/products')
      setData(data.data.products)
    } 
    allData()
  },[])
  
 
        const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",        
  };
   const Bestsellers = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        nextArrow : <NexArrow/> ,
        prevArrow : <PrevArrow />        
  };
  return (
    
    <div>
      <Banner/>
      <Information/>
      <Ads/>
      <Container>        
        <Heading text='New Arrivals' className='pb-12'/>    
        <div className="slider-container">
        <Slider {...settings}>
            
            {
              data.map(item=>(
                <Card 
                  src= {item.thumbnail}  productName= {item.title} price= {item.price} text1='New' />
              ))
            }
            
        </Slider>
        </div>      
        <Flex className='gap-x-10 justify-between pb-[118px]'>             
        </Flex>
        <Heading text='Our Bestsellers' className='pb-12'/>       
        <Slider {...Bestsellers} className='pb-[118px]' >     
            
            {
               data.map(item=>(                
                <Card src={item.thumbnail} productName={item.title}  price= {item.price} text1='New' />
              ))
            }
            
           
        </Slider>      
        <div className='relative pb-[128px]'>
          <Image src={Ad4} className='w-[1673px] h-auto'/>
          <div className='absolute top-[61px] left-[700px]'>
            <Heading text='Phone of the year' className='pb-[38px]'/>
            <p className='w-[513px] pb-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
            <Button text='Shop Now'/>
          </div>
        </div>
        <Heading text='Special Offers' className='pb-[48px]'/>
        <Flex className='gap-x-10 justify-between pb-[118px]'>
          <Card src={CardImage9} productName='Basic Crew Neck Tee' price={44} text1='New' />
          <Card src={CardImage10} productName='Basic Crew Neck Tee' price={44} text1='New'/>
          <Card src={CardImage11} productName='Basic Crew Neck Tee' price={44} text1='New'/>
          <Card src={CardImage12} productName='Basic Crew Neck Tee' price={44} text1='New'/>
        </Flex>
      </Container>
    </div>
  )
}

export default Home 
