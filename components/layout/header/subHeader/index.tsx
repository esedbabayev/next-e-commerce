import React from 'react'
import Image from 'next/image'
import CloseIcon from "@/assets/images/icons/Frame.svg"



const SubHeader = () => {
  return (
    <div className='bg-[#000000]'>

       <div className='container mx-auto max-w-[1240px] flex items-center justify-center text-[14px] text-white py-[9px]'>
       <div className='w-full flex items-center justify-center '>
       <h1 className='font-normal'>Sign up and get 20% off to your first order. <a href="#" className='underline'>Sign Up Now</a></h1>
       </div>

       <button>
        <Image src={CloseIcon} width={20} height={20} alt='closeIcon'/>
       </button>
       </div>

    </div>
  )
}

export default SubHeader
