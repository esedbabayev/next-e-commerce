import React from 'react'
import Image from 'next/image'
import close from "@/assets/products/close.png"

import SingleCategory from '../singleCategory'

const Categories = () => {
  return (
<div >
    <div className='flex justify-between'>
    <h1 className='text-[20px] font-bold '>Filters</h1>
    <Image src={close} alt='close'className='w-6 h-6'></Image>
    </div>
    <hr className='mt-4 mb-5' />

     <ul className='space-y-5' >
   <SingleCategory/>
   <SingleCategory/>
   <SingleCategory/>
   <SingleCategory/>
   <SingleCategory/>

    </ul>

    <hr className='mt-6 mb-5' />

  </div>
  )
}

export default Categories
