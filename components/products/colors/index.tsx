import React from 'react'

import Image from 'next/image'
import topArrow from "@/assets/products/topArrow.png"
import SingleColor from '../color'
import { getColors } from '@/api/products'

const Colors = async() => {

const colorsPromise = await getColors()
const [allColors] = await Promise.all([colorsPromise])

  return (
    <div>
      <div className='flex justify-between items-baseline'>
      <h1 className='text-[20px]  font-bold mb-4'>Colors</h1>
      <button><Image src={topArrow} alt='topArrow' className='w-4 h-4'></Image></button>
      </div>

      <ul className='flex gap-4 flex-wrap' >
     
{
  allColors && allColors.map((color) => (
    <SingleColor key={color} color={color}/>
  ))
}

      </ul>

      <hr className='my-5' />
      
    </div>
  )
}

export default Colors
