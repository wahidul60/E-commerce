import Container from '../Component/Container'
import Heading from '../Component/Heading'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import ImageWithButton from '../assets/Image_with_button_1.png'
import ImageWithButton2 from '../assets/Image_with_button_2.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'

const About = () => {
  const data1 = useSelector((state)=>state.counter.value)
  let previousValue = useSelector((state)=>state.active.previousValue)
  let currentValue = useSelector((state)=>state.active.currentValue)
  return (
    <Container>
      <div>
      <p>this is : {data1}</p>    
      <Heading className='pt-[124px] pb-3' text='About'/>
        <Flex className='gap-x-2 text-[#767676] font-DM pb-[125px] items-center'>
        <p> <Link to = {previousValue=="Home"? "/": `/${previousValue?.toLowerCase()}`}>{!previousValue || previousValue === currentValue? previousValue="Home" : previousValue }</Link> </p> <span><FaAngleRight/></span> <p>{currentValue || 'About' }</p> 
        </Flex>        
      </div>
      <Flex className='w-full pb-[128px]'>
          <Image className='w-[780px]' src={ImageWithButton}/>
          <Image className='w-[780px]' src={ImageWithButton2}/>
      </Flex>
        <p className='font-DM font-normal text-[39px] text-[#262626] pb-[118px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
      <Flex className='gap-x-10 pb-[131px]'>
        <div className='w-4/12'>
          <Heading text='Our Vision'/>
          <p className='font-DM font-normal text-4 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-4/12'>
          <Heading text='Our Story'/>
          <p className='font-DM font-normal text-4 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-4/12'>
          <Heading text='Our Brands'/>
          <p className='font-DM font-normal text-4 text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>        
      </Flex>  
    </Container>
  )
}
export default About
About