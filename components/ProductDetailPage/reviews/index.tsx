import React from 'react'
import Container from '@/components/main-container'
import SingleReview from '@/components/Home/singleReview'

// Images
import Image from 'next/image'
import filter from "@/assets/products/filter.png"
import downArrow from "@/assets/products/downarrow.png"

const Reviews = () => {
  return (
    <section>
      <Container>
         <div className='px-4'>
          
          <div className='flex lg:justify-evenly lg:mt-20 justify-between'>
            <button className='text-[16px] lg:text-[20px]'>Product Details</button>
            <button className='text-[16px] font-medium lg:text-[20px]'>Rating & Reviews</button>
            <button className='text-[16px] lg:text-[20px]'>FAQs</button>
          </div>
          <hr className='mt-5' />

          <div className='mt-5 flex items-center mb-5'>
            <h1 className='lg:text-[24px] font-bold '>All Reviews
              <span className='text-[14px] font-normal text-[#00000099] ml-[6px]'>(451)</span>
            </h1>

          <div className='ml-auto flex'>
          <button >
            <Image src={filter} alt='filter' className='w-10 h-10 ml-14 mr-2'></Image>
          </button>

          <div className='items-center gap-5 px-4 py-3 bg-[#F0F0F0] mr-[10px] rounded-[62px] lg:block lg:flex hidden'>
          <button className='font-medium'>Latest</button>
          <Image src={downArrow} alt='downArrow' className='w-4 h-4'></Image>
          </div>

          <div className='flex items-center px-4 py-3 bg-[#000000] rounded-[62px] '>
          <button className='font-medium text-[12px] text-white lg:text-[16px]'>Write a Review</button>
          </div>
          </div>

          </div>
          
          <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:gap-5'>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          </div>

          <div className='py-[14px] px-4 border border-[#0000001A] rounded-[62px] mt-5 text-center w-[195px] mx-auto'>
            <button className='text-[14px] font-medium'>Load More Reviews</button>
          </div>

         </div>
      </Container>
    </section>
  )
}

export default Reviews