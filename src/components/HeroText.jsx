import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const HeroText = () => {
  return (
    <div className='flex justify-between h-100 w-full mt-20'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default HeroText