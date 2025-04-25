import React from 'react'
import Image from './Image'
import Logo from '../assets/Logo.png'


const Navbar = () => {
  return (
    <section>
        <nav>
            <div className='w-4/12'> <Image src={Logo} /> </div>
            <div className='w-4/12'></div>
            <div className='w-4/12'></div>
        </nav>
    </section>
  )
}

export default Navbar
