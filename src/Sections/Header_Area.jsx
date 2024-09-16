import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'

const Header_Area = () => {
  return (
    <div className='bg-[url(Header_Area.png)] bg-black text-white h-[100vh]'>
        <NavBar/>
        <Hero/>
    </div>
  )
}

export default Header_Area
