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
<div className='max-w-[1240px] flex flex-col items-center pt-10 '>

<div className='flex flex-col lg:flex-row'>
<div className='px-4 lg:pt-[103px]'>
<h1 className='text-[36px] font-bold font-integral text-start leading-[34px] lg:text-[64px] lg:leading-[64px] '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

<p className='text-[14px] font-normal text-[#00000099] leading-[20px] mt-5 mb-6 lg:text-[16px] lg:w-[545px]'>Browse through our diverse range of meticulously crafted garments, designed to 
    bring out your individuality and cater to your sense of style.</p>

<div className='py-4 px-14 w-full lg:w-[210px] justify-center items-center flex bg-[#000000] rounded-[62px] text-[16px] font-medium text-white'>
    <button >
    Shop Now
    </button>
</div>

<div className='flex flex-wrap mt-5 mx-10 w-full lg:w-[596px] lg:flex-nowrap lg:mx-0'>
  <div className='w-[106px] lg:w-[141px]'>
    <h1 className='text-[24px] font-bold lg:w-[141px] lg:text-[40px]'>200+</h1>
    <p className='text-[12px] text-[#00000099] font-normal lg:text-[16px]'>International Brands</p>
  </div>

  <div className='border border-[#0000001A] mx-8 '></div>

  <div className='w-[156px]'>
    <h1 className='text-[24px] font-bold lg:text-[40px]'>2,000+</h1>
    <p className='text-[12px] text-[#00000099] font-normal lg:w-[156px] lg:text-[16px]'>High-Quality Products</p>
  </div>

  <div className='lg:border lg:border-[#0000001A] lg:mx-8 '></div>

  <div className='w-full flex flex-col items-center justify-center mr-20 mt-3 lg:mt-0 lg:w-[171px]'>
    <h1 className='text-[24px] font-bold lg:text-[40px]'>30,000+</h1>
    <p className='text-[12px] text-[#00000099] font-normal lg:text-[16px]'>Happy Customers</p>
  </div>
</div>
</div>


<div className='w-full '>
    <Image src={shop} alt="shop" className = 'lg:h-[663px]'></Image>
</div>
</div>


</div>

</Container>

<div className='lg:w-full lg:mt-0 '>
<div className='bg-[#000000] flex flex-wrap py-10 w-full  items-center justify-center lg:flex-nowrap lg:w-full lg:flex lg:flex-row lg:gap-[106px] lg:mx-auto'>
<Image src={logo1} alt="logo1" width={117} height={24} className = 'mb-[22px] lg:mb-0 lg:w-[166px] lg: h-[34px]'></Image>
<Image src={zara} alt="zara" width={64} height={27} className = 'mx-8 mb-[22px] lg:mb-0 lg:mx-0 lg:w-[91px] lg: h-[38px]' />
<Image src={gucci} alt="gucci" width={110} height={23} className = 'mb-[22px] lg:mb-0 lg:w-[156px] lg: h-[36px]'></Image>
<Image src={prada} alt="prada" width={127} height={21} className = 'mr-8 lg:mr-0 lg:w-[194px] lg: h-[32px]'></Image>
<Image src={calvin} alt="calvin" width={134} height={22} className = 'lg:w-[207px] lg: h-[34px]'></Image>
</div>
</div>



</section>



    
  )
}

export default ShopHome