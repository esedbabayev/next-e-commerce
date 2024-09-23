import React from 'react'

import Image from 'next/image'

import arrowIcon from "@/assets/images/icons/arrow.png"
import graySearch from "@/assets/images/icons/searchGray.png"
import menu from "@/assets/images/icons/menu.png"
import blackSearch from "@/assets/images/icons/blackSearch.png"
import bucket from "@/assets/images/icons/bucket.png"
import profile from "@/assets/images/icons/profile.png"

import Container from '@/components/main-container'
import Link from 'next/link'


const MainHeader = () => {
  return (
 
    <Container>
    <div className='max-w-[1240px] mx-auto py-6 flex items-center justify-between px-4 gap-10'>
     
     <div className='flex gap-3 items-baseline' >
     <Image src={menu} width={24} height={24} alt='menu' className='block lg:hidden '/>
     <h1 className='text-[32px] font-bold font-integral'>SHOP.CO</h1>
     </div>

   
     <div className='hidden lg:block' >
       <ul className='flex flex-row gap-4 items-center'>
         <li className='flex gap-1'>
           Shop
           <Image src={arrowIcon} width={20} height={20} alt='arrowIcon'/>
           </li>
         <li>On Sale</li>
         <li>New Arrivals</li>
         <li>Brands</li>
       </ul>
     </div>

     <div className='hidden md:flex mx-10 bg-[#F0F0F0] py-3 px-4 rounded-[62px] flex-grow flex gap-3'>
       <button>
       <Image src={graySearch} width={24} height={24} alt='graySearch' className="my-auto"></Image>
       </button>
       <input 
       type="text"
       placeholder='Search for products...'
       className='placeholder:text-[16px] font-normal text-[#00000066] bg-[#F0F0F0] outline-none w-full'
        />
     </div>


     <div className='flex gap-[14px] shrink-0'>
       <button>
       <Image src={blackSearch} width={24} height={24} alt='blackSearch' className="visible md:invisible"></Image>
       </button>

       <button>
       <Image src={bucket} width={24} height={24} alt='bucket'></Image>
       </button>

       <button>
       <Link href="/sign-in"><Image src={profile} width={24} height={24} alt='profile'></Image></Link>
       </button>


     </div>


    </div>

    </Container>
 
  )
}

export default MainHeader
