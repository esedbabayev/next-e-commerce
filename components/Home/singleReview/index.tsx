import React from 'react'
import Image from 'next/image'
import submit from "@/assets/home/submit.png"

import { Rate } from "antd";

const SingleReview = () => {
  return (
    <div className='p-6 border border-[#0000001A] rounded-[20px] w-[358px]
    lg: px-8 lg:py-7 lg:w-[400px] 
    '>
<div className='flex gap-1'>
    <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633" }} />
</div>

<div className='flex gap-1 mt-4'>
<h1 className='text-[16px] font-bold lg:text-[20px]'>Sarah M.</h1>
<Image src={submit} alt="submit" className='w-[19px] h-[19px] items-baseline lg:w-6 lg:h-6'></Image>
</div>

<p className='text-[14px] lg:text-[16px] text-[#00000099] font-normal w-[310px] lg:w-[336px] leading-[20px] lg:leading-[22px]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, 
every piece 
I've bought has exceeded my expectations.”</p>

<h4 className='text-[14px] font-medium text-[#00000099] mt-4'>Posted on August 14, 2023</h4>

</div>
  )
}

export default SingleReview