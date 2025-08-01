import Image from './Image'
import Logo from '../assets/Logo.png'
import List from './List'
import Flex from './Flex'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeButton } from '../Slices/breadcumb'
import { IoMenu } from 'react-icons/io5'
import { useState } from 'react'

const Navbar = () => {
  let [show, setShow] = useState(false)
  let dispatch = useDispatch()
  const handleClick = (value) => {
    dispatch(activeButton(value))
  }

  let handleMenuBar = () => {
    setShow(!show)
  }
  return (
    <section>
      <Container>
        <nav className='py-8'>
          <Flex className='w-full'>
            <div onClick={handleMenuBar} className='max-sm:w-6/12 max-sm:inline hidden'><IoMenu /></div>
            <div className='w-4/12 flex max-sm:w-6/12 max-sm:justify-end' > <Image src={Logo} /></div>

            {
              show &&
              <div className='w-[100px] bg-white absolute z-10 top-15 left-0 border'>
                <Flex className='gap-[13px] w-full pl-4 justify-center flex-col' >
                  <Link onClick={() => handleClick("Home")} to='/'><List className='w-1/5' text="Home" /></Link>
                  <Link onClick={() => handleClick("Shop")} to='shop'><List className='w-1/5' text="Shop" /></Link>
                  <Link onClick={() => handleClick("About")} to='about'><List className='w-1/5' text="About" /></Link>
                  <Link onClick={() => handleClick("Contacts")} to='contacts'><List className='w-1/5' text="Contact" /></Link>
                  <Link onClick={() => handleClick("Journal")} to=''><List text="Journal" /></Link>
                </Flex>
              </div>
            }
            <div className='w-4/12 max-sm:hidden'>
              <Flex className='gap-[39px] w-full justify-center' >
                <Link onClick={() => handleClick("Home")} to='/'><List className='w-1/5' text="Home" /></Link>
                <Link onClick={() => handleClick("Shop")} to='shop'><List className='w-1/5' text="Shop" /></Link>
                <Link onClick={() => handleClick("About")} to='about'><List className='w-1/5' text="About" /></Link>
                <Link onClick={() => handleClick("Contacts")} to='contacts'><List className='w-1/5' text="Contact" /></Link>
                <Link onClick={() => handleClick("Journal")} to=''><List text="Journal" /></Link>
              </Flex>
            </div>


            <div className='w-4/12 max-sm:hidden'></div>
          </Flex>
        </nav>
      </Container>
    </section>
  )
}

export default Navbar
