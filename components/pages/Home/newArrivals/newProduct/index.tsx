import React from 'react'

import Image from 'next/image'
import tshirt from "@/assets/home/Frame 32.png"
// import review from "@/assets/home/stars.png"

// Review
import { Rate } from "antd";

const NewProduct = () => {
  return (
    <div className='inline-block'>
    <div className='mb-[10px]'>
        <Image src={tshirt} alt='t-shirt' width={200} height={200} className='md: w-[300px] md:h-[300px]' />
    </div>
    <p className='text-[16px] font-bold lg:text-[20px]'>T-shirt with Tape Details</p>
    
    <div className='flex'>
    <div className='flex gap-1'>
       <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633"}}/>
    </div>
    <p className='text-[12px] font-normal ml-[11px] leading-4 md:text-[14px] md:ml-[13px] md:leading-5'>4.5/5</p>
    </div>

    <div className='flex items-center gap-[5px]'>
    <h3 className='text-[20px] font-bold lg:text-[24px]'>$120</h3>
    <span className=' text-[#00000066] text-[20px] font-bold line-through'>$260</span>
    <span className='text-[#FF3333] text-[10px] font-medium 
    py-[6px] px-[14px] bg-[#FF33331A] rounded-lg my-auto'>-20%</span>
   </div>
  </div>
  )
}

export default NewProduct
