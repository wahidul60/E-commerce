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
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  let [show, setShow] = useState(false)
  let dispatch = useDispatch()
  const handleClick = (value) => {
    dispatch(activeButton(value));                                               
    setShow(false);
  }

  let handleMenuBar = () => {
    setShow(!show)
  }
  return (
    <section>
      <Container>
        <nav className='py-8'>
          <Flex className='w-full'>
            <div className='w-4/12  max-sm:w-6/12' > <Link to='/'><Image src={Logo} /></Link>
              {
                show &&
                <div className='max-sm:w-full max-sm:h-full max-sm:top-0 max-sm:left-0 bg-white fixed z-10 h-screen max-sm:inline-block hidden '>
                  <Flex className='justify-center items-center flex-col mx-auto px-auto z-11' >
                    <Flex className='top-2 py-8 w-full '>
                      <div className='w-6/12  max-sm:w-1/2 ml-5' > <Link to='/'><Image src={Logo} /></Link></div>
                      <div onClick={handleMenuBar} className='mr-5 max-sm:w-1/2 max-sm:flex hidden max-sm:justify-end'><RxCross2 /></div>
                    </Flex>

                    <Link className='w-full justify-center  items-center border-b border-[#f0f0f0]' onClick={() => handleClick("Home")} to='/'>
                      <List className='max-sm:w-full py-3 text-center' text="Home" />
                    </Link>

                    <Link className='w-full justify-center items-center border-b border-[#f0f0f0]' onClick={() => handleClick("Shop")} to='shop'>
                      <List className='max-sm:w-full py-3 text-center' text="Shop" />
                    </Link>

                    <Link className='w-full justify-center items-center border-b border-[#f0f0f0]' onClick={() => handleClick("About")} to='about'>
                      <List className='max-sm:w-full py-3 text-center' text="About" />
                    </Link>

                    <Link className='w-full justify-center items-center border-b border-[#f0f0f0]' onClick={() => handleClick("Contacts")} to='contacts'>
                      <List className='max-sm:w-full py-3 text-center' text="Contact" />
                    </Link>

                    <Link className='w-full justify-center items-center border-b border-[#f0f0f0]' onClick={() => handleClick("Journal")} to=''>
                      <List className='max-sm:w-full  py-3 text-center' text="Journal" />
                    </Link>

                    <div className='flex pt-2'>
                      <Link to='login' onClick={()=> {setShow(false)}} ><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                      </Link>

                      <Link to='signup' onClick={()=> {setShow(false)}}>
                         <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>
                      </Link>
                     
                    </div>

                  </Flex>
                </div>
              }
            </div>
            <div onClick={handleMenuBar} className='max-sm:w-6/12 max-sm:flex hidden max-sm:justify-end'><IoMenu /></div>


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
