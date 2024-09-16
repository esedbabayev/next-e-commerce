import React from 'react'
import Container from '@/components/main-container'

import Image from 'next/image'
import casual from "@/assets/home/casual.png"
import formal from "@/assets/home/formal.png"
import party from "@/assets/home/party.png"
import gym from "@/assets/home/gym.png"

const CategoryHome = () => {
  return (

    <section className='mx-4'>
    <Container>
    <div className='bg-[#F0F0F0] max-w-[1240px] px-4 mb-[50px] lg:mb-[80px] pb-7 lg:pb-[76px] 
    pt-10 lg:pt-[70px]  lg:px-16 rounded-[20px] lg:rounded-[40px] flex flex-col items-center justify-center lg:w-full'>
        
      <h1 className='text-[32px] lg:text-[48px] font-bold font-integral w-[246px] lg:w-[687px] text-center mb-7'>BROWSE BY dress STYLE</h1> 

     <div className='flex flex-col gap-4'>
    
     <div className='flex flex-col gap-4 lg:flex-row'>
     <div>
     <Image src={casual} alt={casual} className='w-[310px] h-[190px] lg:w-[407px] lg:h-[289px] lg:mr-5'/>
    </div> 

    <div>
     <Image src={formal} alt={formal} className='w-[310px] h-[190px] lg:w-[684px] lg:h-[289px]' />
    </div>
    </div>

    <div className='flex flex-col gap-4 lg:flex-row'>
    <div>
     <Image src={party} alt={party}  className='w-[310px] h-[190px] lg:w-[684px] lg:h-[289px] lg:mr-5'/>
    </div>

    <div>
     <Image src={gym} alt={gym} className='w-[310px] h-[190px] lg:w-[407px] lg:h-[289px]'/>
    </div>
     </div>

     </div>
       
        
        
        </div>
        </Container>
        </section>
  )
}

export default CategoryHome