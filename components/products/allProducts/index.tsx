import React from 'react'
// Images
import Image from 'next/image'
import filter from "@/assets/products/filter.png"
import right from "@/assets/products/arrow-right.png"
import left from "@/assets/products/arrow-left.png"
import down from "@/assets/productDetails/Frame (8).png"

// Components
import Container from '@/components/main-container'
import NewProduct from '@/components/Home/newArrivals/newProduct'


import { Rate } from "antd";
import tshirt from "@/assets/products/Frame 33.png"

const AllProducts = () => {

  return (
  <section>
    <Container>

    <div className='max-w-[1240px] flex flex-col justify-between mx-auto px-4 '>
    <div className='flex mb-7 '>

       
        <h1 className='text-[24px] font-bold lg:text-[32px] lg:mr-auto'>Casual</h1>
        <p className='text-[14px] text-[#00000099] mt-3 ml-2 mr-14 lg:text-[16px] lg:mr-3 lg:ml-0'>Showing 1-10 of 100 Products</p>
        

        <button className='lg:flex lg:items-baseline'>
            <p className='lg:text-[16px] lg:mt-3 '>Sort by: Most Popular</p>
            <Image src={down} alt={down} className ='w-4 h-4'></Image>
        </button>

        <button>
          <Image src = {filter} alt={filter} width={32} height={32}></Image>
        </button>
    </div>
     
     <div className='space-x-4 w-full whitespace-nowrap 
     grid grid-cols-2 auto-rows-auto  lg:grid lg:grid-cols-3' >
  


  <div className='inline-block'>
      <div className='mb-[10px]'>
        <Image src={tshirt} alt='t-shirt' width={200} height={200} className='md: w-[300px] md:h-[300px]' />
      </div>
      <p className='text-[16px] font-bold lg:text-[20px]'>T-shirt</p>
      <div className='flex'>
        <div className='flex gap-1'>
          <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633" }} />
        </div>
        <p className='text-[12px] font-normal ml-[11px] leading-4 md:text-[14px] md:ml-[13px] md:leading-5'>4.5/5</p>
      </div>
      <div className='flex items-center gap-[5px]'>
        <h3 className='text-[20px] font-bold lg:text-[24px]'>$20.00</h3>
        <span className=' text-[#00000066] text-[20px] font-bold line-through'>$59.00</span>
       <span className='text-[#FF3333] text-[10px] font-medium 
    py-[6px] px-[14px] bg-[#FF33331A] rounded-lg my-auto'>10%</span>
      </div>
    </div>



    <div className='inline-block'>
      <div className='mb-[10px]'>
        <Image src={tshirt} alt='t-shirt' width={200} height={200} className='md: w-[300px] md:h-[300px]' />
      </div>
      <p className='text-[16px] font-bold lg:text-[20px]'>T-shirt</p>
      <div className='flex'>
        <div className='flex gap-1'>
          <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633" }} />
        </div>
        <p className='text-[12px] font-normal ml-[11px] leading-4 md:text-[14px] md:ml-[13px] md:leading-5'>4.5/5</p>
      </div>
      <div className='flex items-center gap-[5px]'>
        <h3 className='text-[20px] font-bold lg:text-[24px]'>$20.00</h3>
        <span className=' text-[#00000066] text-[20px] font-bold line-through'>$59.00</span>
       <span className='text-[#FF3333] text-[10px] font-medium 
    py-[6px] px-[14px] bg-[#FF33331A] rounded-lg my-auto'>10%</span>
      </div>
    </div>





    <div className='inline-block'>
      <div className='mb-[10px]'>
        <Image src={tshirt} alt='t-shirt' width={200} height={200} className='md: w-[300px] md:h-[300px]' />
      </div>
      <p className='text-[16px] font-bold lg:text-[20px]'>T-shirt</p>
      <div className='flex'>
        <div className='flex gap-1'>
          <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633" }} />
        </div>
        <p className='text-[12px] font-normal ml-[11px] leading-4 md:text-[14px] md:ml-[13px] md:leading-5'>4.5/5</p>
      </div>
      <div className='flex items-center gap-[5px]'>
        <h3 className='text-[20px] font-bold lg:text-[24px]'>$20.00</h3>
        <span className=' text-[#00000066] text-[20px] font-bold line-through'>$59.00</span>
       <span className='text-[#FF3333] text-[10px] font-medium 
    py-[6px] px-[14px] bg-[#FF33331A] rounded-lg my-auto'>10%</span>
      </div>
    </div>

      
   

     </div>



     <hr className='mt-4 mb-5' />  
  {/* pagination */}
  <div className='py-[2px] px-2
rounded-[4px] flex flex-row mt-5  w-full items-center mx-auto'>

<button className='flex p-[10px] border border-[#0000001A] rounded-[8px] gap-3 mr-auto'>
  <Image src={left} alt={left} width={16} height={16} className ='lg:w-5 lg:h-5'></Image>
  <p className='text-[12px] font-medium pr-4 lg:text-[14px] '> Previous</p>
</button>

<button className='p-3 bg-[#F6F6F6] rounded-[8px] text-[12px] lg:p-4 lg:text-[14px] font-medium text-[#0E1422]'>1</button>
<button className='p-3 text-[12px] lg:p-4 lg:text-[14px] font-medium text-[#474B57]'>2</button>
<button className='p-3 text-[12px] lg:p-4 lg:text-[14px] font-medium text-[#474B57]'>...</button>
<button className='p-3 text-[12px] lg:p-4 lg:text-[14px] font-medium text-[#474B57]'>9</button>
<button className='p-3 text-[12px] lg:p-4 lg:text-[14px] font-medium text-[#474B57]'>10</button>

<button className='flex p-[10px] border border-[#0000001A] rounded-[8px] gap-2 ml-auto'>
  <p className='text-[12px] font-medium lg:text-[14px]'> Next</p>
  <Image src={right} alt={right} width={16} height={16} className ='lg:w-5 lg:h-5'></Image>
</button>
</div>



     </div>
    
    </Container>
    </section>
  )
}

export default AllProducts
