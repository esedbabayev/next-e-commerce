import React from 'react'

import Container from '@/components/main-container'
import NewProduct from '../newArrivals/newProduct'

const TopSelling = () => {
  return (
<section>
    <Container>
    <div className='max-w-[1240px] mx-auto  flex flex-col items-center justify-center px-4'>
    <div className='flex items-center justify-center'>
        <h1 className='text-[32px] font-bold font-integral mb-3 lg:mb-10'>TOP SELLING</h1>
    </div>
     
     <div className='space-x-4 w-full whitespace-nowrap overflow-x-visible 
     overflow-y-hidden flex lg:overflow-x-hidden lg:grid grid-cols-4' >

      <NewProduct/>
      <NewProduct/>
      <NewProduct/>
      <NewProduct/>
  
     </div>

     <div className='py-4 px-13 mt-6 mb-10 border border-[#0000001A] rounded-full flex justify-center w-full lg:w-[17%] lg:mb-16'>
        <button className='text-[14px] font-medium '>View All</button>
      </div>

    </div>
    </Container>

</section>
  )
}

export default TopSelling
