import React from 'react'
import Container from '../../components/Container'
import NYPhoto from "../../assets/New-Year-Photo.png"

const OffSection = () => {
  return (
    <Container>

    <div className='flex flex-col items-center mt-48 text-center'>
      <h2 className='text-bold text-6xl sm:text-7xl md:text-8xl text-[#ff0000]'>65% OFF</h2>
      <hr className='border-[#ff0000] w-6 my-10' />
      <h3 className='font-medium text-lg sm:text-2xl text-[#ff0000]'>OUR HOLIDAY DEALS ARE BETTER</h3>
      <h2 className='font-bold text-3xl sm:text-5xl text-[#070211] mt-4 mb-16'>ALL CATEGORIES</h2>
      <img className='w-xl sm:max-w-3xl' src={NYPhoto } alt="" />
    </div>
    </Container>
  )
}

export default OffSection