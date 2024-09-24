import React from 'react'
import Container from '@/components/main-container'
import SingleColor from '@/components/products/color'
import SingleSize from '@/components/products/singleSize'


// Images
import Image from 'next/image'
import img1 from "@/assets/productDetails/image 5.png"
import img2 from "@/assets/productDetails/image 1.png"
import img3 from "@/assets/productDetails/image 6.png"
import submit from "@/assets/productDetails/submit.png"

// Review
import { Rate } from 'antd'

const ProductDetails = () => {


  return (
    <section>
      <Container>
      
            <div className='px-4 flex flex-col lg:flex-row items-center'>

            <div className='flex flex-col lg:flex-row-reverse lg:w-[90%]'>
            <Image src={img1} alt="img1" className='w-[358px] h-[290px] lg:w-[400px] lg:h-[530px] lg:mt-4 lg:mr-10 object-cover rounded-lg lg:rounded-none'></Image>
    
            <div className='flex flex-row gap-3 mt-3 lg:flex-col lg:ml-3 lg:mr-3 '>
            <Image src={img1} alt="img1"  className='w-[111px] h-[106px] lg:w-[152px] lg:h-[168px] object-cover rounded-lg '></Image>
            <Image src={img2} alt="img2" className='w-[111px] h-[106px] lg:w-[152px] lg:h-[168px] object-cover rounded-lg '></Image>
            <Image src={img3} alt="img3" className='w-[111px] h-[106px] lg:w-[152px] lg:h-[168px] object-cover rounded-lg '></Image>
            </div>
            </div>
    
    
    <div className='lg:flex lg:flex-col lg:mt-6' >
    
      <h1 className='text-[24px] font-bold lg:text-[40px] font-integral w-[267px] leading-[28px] lg:w-[600px] mt-6 mb-4'>One Life Graphic T-shirt</h1>
    
    <div className='flex mt-3'>
      <div className='flex gap-1'>
        <Rate allowHalf defaultValue={4.5} style={{ fontSize: "16px", color: "#FFC633" }} />
      </div>
      <p className='text-[12px] font-normal ml-[11px] leading-4 md:text-[14px] md:ml-[13px] md:leading-5'>4.5/5</p>
    </div>
    
    <div className='flex items-center gap-[5px] mt-3 mb-3'>
      { <h3 className='text-[24px] font-bold lg:text-[32px]'>$260</h3>}
    
      <span className=' text-[#00000066] text-[24px] font-bold line-through lg:text-[32px]'>$300</span>
    
      <span className='text-[#FF3333] text-[14px] font-medium 
    py-[6px] px-[14px] bg-[#FF33331A] rounded-lg my-auto lg:text-[16px]'>-40%</span>
    
    </div>
    
    <h2 className='text-[14px] font-normal text-[#00000099] lg:text-[16px]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</h2>
    
    <hr className='mt-2 mb-3 lg:mt-3' />
    
    {/* Select Colors */}
    <div>
      <h4 className='text-[14px] font-normal text-[#00000099] lg:text-[16px]'>Select Colors</h4>
      <div className='flex gap-3 lg:mt-4'>
       <SingleColor/>
       <SingleColor/>
       <SingleColor/>
      </div>
    </div>
    
    
    <hr className='mt-2 mb-3 lg:mt-3' />
    
    {/* Choose Size */}
    <div>
      <h4 className='text-[14px] font-normal text-[#00000099] lg:text-[16px]'>Choose Size</h4>
      <ul className='flex gap-3 mt-2 lg:mt-4'>
        
          <SingleSize/>
          <SingleSize/>
          <SingleSize/>
      </ul>
    </div>
    
    <hr className='mt-2 mb-3 lg:mt-3' />
    
    {/* Counter/ Add To cart button */}
    <div>
    
      
            {/* quantity */}
            <div className='flex flex-row mt-2 gap-4 lg:mt-6'>    
            <div className="flex w-[110px] px-4 py-3 mb-10 border border-[#E6E7E8] rounded-[62px] bg-[#F0F0F0]">
            <button  className="text-2xl text-[#000000]">-</button>
            <input
              value={1}
              type="number"
              min="1"
              max="100"
              className=" text-[14px] bg-[#F0F0F0] text-center font-medium outline-none border-none w-full ml-3 "
              />
            <button  className="text-2xl text-[#000000]">+</button>     
          </div>
          
          <div>
          <button className=' px-12 py-4 w-[236px] rounded-[62px] text-[14px] font-medium text-[#FFFFFF] bg-[#000000]'>
         Add to Cart
        </button>
        </div>
    
        </div>
    
    
    
    
    </div>
    
    
    
            </div>
    
    
            </div>
          
        

        </Container>
    </section>
  )
}

export default ProductDetails