import React from 'react'

import Image from 'next/image'
import topArrow from "@/assets/products/topArrow.png"
import SingleSize from '../singleSize'

const Sizes = () => {
  return (
    <div>
     <div className='flex justify-between items-baseline'>
      <h1 className='text-[20px]  font-bold mb-4'>Size</h1>
      <button><Image src={topArrow} alt='topArrow' className='w-4 h-4'></Image></button>
      </div>

      <ul className='flex gap-2 flex-wrap' >
 
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>

       </ul>
       <hr className='my-5' />
    </div>
  )
}

export default Sizes
