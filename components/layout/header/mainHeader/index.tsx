import React from 'react'

import Image from 'next/image'

import arrowIcon from "@/assets/images/icons/arrow.png"
import graySearch from "@/assets/images/icons/searchGray.png"
import menu from "@/assets/images/icons/menu.png"
import blackSearch from "@/assets/images/icons/blackSearch.png"
import bucket from "@/assets/images/icons/bucket.png"
import profile from "@/assets/images/icons/profile.png"


const MainHeader = () => {
  return (
    <div>
     
    <div className='container max-w-[1240px] mx-auto py-6 flex items-center'>
     
     <div className='mr-4 hidden'>
     <Image src={menu} width={24} height={24} alt='menu' className="hidden"/>
     </div>

     <div>
       <h1 className='text-[32px] font-bold mr-10 '>SHOP.CO</h1>
     </div>

     <div >
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

     <div className='mx-10 bg-[#F0F0F0] py-3 px-4 rounded-[62px] w-[577px] flex gap-3'>
       <button>
       <Image src={graySearch} width={24} height={24} alt='graySearch' className="my-auto"></Image>
       </button>
       <input 
       type="text"
       placeholder='Search for products...'
       className='placeholder:text-[16px] font-normal text-[#00000066] bg-[#F0F0F0] outline-none w-full'
        />
     </div>


     <div className='flex gap-[14px]'>
       <button>
       <Image src={blackSearch} width={24} height={24} alt='blackSearch' className="hidden"></Image>
       </button>

       <button>
       <Image src={bucket} width={24} height={24} alt='bucket'></Image>
       </button>

       <button>
       <Image src={profile} width={24} height={24} alt='profile'></Image>
       </button>


     </div>


    </div>


   </div>
  )
}

export default MainHeader
