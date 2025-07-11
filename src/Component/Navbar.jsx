import Image from './Image'
import Logo from '../assets/Logo.png'
import List from './List'
import Flex from './Flex'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeButton } from '../Slices/breadcumb'

const Navbar = () => {
  let dispatch = useDispatch()
  const handleClick =(value)=> {
    dispatch(activeButton(value))
  }
  return (
    <section>
        <Container>
          <nav className='py-8'>
              <Flex>
                <div className='w-4/12'> <Image src={Logo} /></div>
                <div className='w-4/12'>
                    <Flex className='gap-[39px] w-full justify-center'>
                      <Link onClick={()=>handleClick("Home")} to='/'><List className='w-1/5' text="Home"/></Link>
                      <Link onClick={()=>handleClick("Shop")}to='shop'><List className='w-1/5' text="Shop"/></Link>
                      <Link onClick={()=>handleClick("About")}to='about'><List className='w-1/5' text="About"/></Link>
                      <Link onClick={()=>handleClick("Contacts")}to='contacts'><List className='w-1/5' text="Contact"/></Link>
                      <Link onClick={()=>handleClick("Journal")}to=''><List text="Journal"/></Link>
                    </Flex>
                </div>
                <div className='w-4/12'></div>
              </Flex>
          </nav>
        </Container>
    </section>
  )
}

export default Navbar
