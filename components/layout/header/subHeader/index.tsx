import React from 'react'
import Image from 'next/image'
import CloseIcon from "@/assets/images/icons/Frame.svg"

import Container from '@/components/main-container'


const SubHeader = () => {
  return (
    <div className='bg-[#000000]'>
       <Container>
       <div className='px-4 text-center flex items-center justify-between text-[12px] text-white py-[9px] xl:text-[14px]'>
      <div></div>
       
       <h1 className='font-normal'>Sign up and get 20% off to your first order. <a href="#" className='underline'>Sign Up Now</a></h1>
      

       <button className='invisible md:visible '>
        <Image src={CloseIcon} width={20} height={20} alt='closeIcon'/>
       </button>
       </div>
       </Container>
    </div>

  )
}
export default SubHeader
