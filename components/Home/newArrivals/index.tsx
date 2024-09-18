
import React, { useEffect, useState } from 'react'
import "./style.css"

import Container from '@/components/main-container'

// Components
import NewProduct from './newProduct'
import { IProduct } from '@/types/product'

interface IProps{
  title: string;
  products:IProduct[],
}
const NewArrivals:  React.FC<IProps> = ({products, title }) => {

return (

<section>
    <Container>
    <div className='max-w-[1240px] mx-auto  flex flex-col items-center justify-center px-4 mt-[50px]'>
    <div className='flex items-center justify-center'>
        <h1 className='text-[32px] text-center font-bold font-integral mb-3 lg:mb-10'>{title}</h1>
    </div>
     
     <div className='space-x-4 w-full whitespace-nowrap overflow-x-visible 
     overflow-y-hidden flex lg:overflow-x-hidden lg:grid grid-cols-4' >
      {
        products && products.map((newArrival) => {
          return <NewProduct newArrival={newArrival} />
        })
      }

     </div>

     <div className='py-4 px-13 mt-6 mb-10 border border-[#0000001A] rounded-full flex justify-center w-full lg:w-[17%] lg:mb-16'>
        <button className='text-[14px] font-medium '>View All</button>
      </div>

      <hr className='border border-[#0000001A] w-full mb-10 lg:mb-16' />

    </div>
    </Container>

</section>

  )
}

export default NewArrivals
