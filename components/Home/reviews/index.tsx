import React from 'react'

import Container from '@/components/main-container'
import SingleReview from '../singleReview'

import Image from 'next/image'
import left from "@/assets/home/arrow-down-bold 1.png"
import right from "@/assets/home/arrow-down-bold 2.png"


const ReviewSection = () => {
  return (
    <section>
    <Container>
    <div className='max-w-[1240px] px-4 '>


<div className='flex flex-row items-end justify-between mb-6 lg:mb-10'>
    <h1 className='text-[32px] font-bold font-integral leading-[36px] w-[286px] lg:text-[48px] lg:leading-[57px] lg:w-full'>OUR HAPPY CUSTOMERS</h1>
    <div className='flex flex-row gap-4 '>
        <button><Image src={right} alt="right" className='w-6 h-6' /></button>
        <button><Image src={left} alt="left" className='w-6 h-6' /></button>
    </div>
</div>
 
    </div>
    </Container>

    <div className='space-x-4 w-full overflow-x-visible 
     overflow-y-hidden flex lg:w-full lg:items-center lg:justify-center'>

<SingleReview/>
<SingleReview/>
<SingleReview/>
<SingleReview/>
<SingleReview/>
<SingleReview/>

</div>
    </section>
  )
}

export default ReviewSection