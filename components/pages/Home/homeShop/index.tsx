import React from 'react'

import Container from '@/components/main-container'

import Image from 'next/image'
import shop from "@/assets/home/shop.png"
import logo1 from "@/assets/home/logo1.png"
import zara from "@/assets/home/zara-logo-1 1.png"
import gucci from "@/assets/home/gucci.png"
import prada from "@/assets/home/prada-logo-1 1.png"
import calvin from "@/assets/home/Group (1).png"

const ShopHome = () => {
  return (
    

<section className='bg-[#F2F0F1]'>
        
<Container>
<div className='max-w-[1240px] mx-auto  flex flex-col items-center px-4 py-10'>

<h1 className='text-[36px] font-bold font-integral text-start leading-[34px] '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

<p className='text-[14px] font-normal text-[#00000099] leading-[20px] mt-5 mb-6'>Browse through our diverse range of meticulously crafted garments, designed to 
    bring out your individuality and cater to your sense of style.</p>

<div className='py-4 px-14 w-full justify-center items-center flex bg-[#000000] rounded-[62px] text-[16px] font-medium text-white'>
    <button >
    Shop Now
    </button>
</div>


<div className='flex flex-wrap mt-5 mx-10'>
  <div className='w-[106px]'>
    <h1 className='text-[24px] font-bold'>200+</h1>
    <p className='text-[12px] text-[#00000099] font-normal'>International Brands</p>
  </div>

  <div className='border border-[#0000001A] mx-6 '></div>

  <div className='w-[117px]'>
    <h1 className='text-[24px] font-bold'>2,000+</h1>
    <p className='text-[12px] text-[#00000099] font-normal'>High-Quality Products</p>
  </div>



  <div className='w-full flex flex-col items-center justify-center mt-3'>
    <h1 className='text-[24px] font-bold '>30,000+</h1>
    <p className='text-[12px] text-[#00000099] font-normal'>Happy Customers</p>
  </div>
</div>



</div>

</Container>

<div className='w-full'>
    <Image src={shop} alt="shop" ></Image>
</div>

<div className='bg-[#000000] flex flex-wrap  py-10 w-full  items-center justify-center'>
<Image src={logo1} alt="logo1" width={117} height={24}></Image>
<Image src={zara} alt="zara" width={64} height={27} className = 'mx-8'/>
<Image src={gucci} alt="gucci" width={110} height={23}></Image>
<Image src={prada} alt="prada" width={127} height={21}></Image>
<Image src={calvin} alt="calvin" width={134} height={22}></Image>
</div>

</section>



    
  )
}

export default ShopHome