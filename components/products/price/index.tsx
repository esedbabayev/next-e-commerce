import React from 'react'
import Image from 'next/image'
import topArrow from "@/assets/products/topArrow.png"

const Price = () => {
  return (
    <div>
      <div className='flex justify-between items-baseline'>
      <h1 className='text-[20px]  font-bold mb-4'>Price</h1>
      <button><Image src={topArrow} alt='topArrow' className='w-4 h-4'></Image></button>
      </div>

      <div className='relative flex items-center'>
        <input
          type='range'
          min='0'
          max='1000'     
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
          style={{ background: `linear-gradient(to right, #0E1422 %, #E6E7E8 %)` }}
        />
      </div>
      <hr className='mt-5 mb-5' />
    </div>
  )
}

export default Price
