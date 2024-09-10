import React from 'react'
import "./style.css"

import Container from '@/components/main-container'

import Image from 'next/image'
import tshirt from "@/assets/home/Frame 32.png"

const NewArrivals = () => {
  return (

<section>
    <Container>
    <div className='max-w-[1240px] mx-auto py-6 flex flex-col items-center justify-center px-4'>
    <div className='flex items-center justify-center'>
        <h1 className='text-[32px] font-bold'>NEW ARRIVALS</h1>
    </div>
     
     <div className='box space-x-4' >

      <div className='item'>
        <div className='mb-[10px]'>
            <Image src={tshirt} alt='t-shirt' width={200} height={200} />
        </div>
        <p className='text-[16px] font-bold '>T-shirt with Tape Details</p>
        <h3 className='text-[20px] font-bold'>$120</h3>
      </div>

      <div className='item'>
        <div className='mb-[10px]'>
            <Image src={tshirt} alt='t-shirt' width={200} height={200} />
        </div>
        <p>T-shirt with Tape Details</p>
        <h3>$120</h3>
      </div>

      <div className='item'>
        <div className='mb-[10px]'>
            <Image src={tshirt} alt='t-shirt' width={200} height={200} />
        </div>
        <p>T-shirt with Tape Details</p>
        <h3>$120</h3>
      </div>


     </div>

    </div>
    </Container>

</section>

  )
}

export default NewArrivals
