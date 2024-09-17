
import React from 'react'

// Components
import NewArrivals from '@/components/Home/newArrivals'

import ShopHome from "@/components/Home/homeShop"
import CategoryHome from '@/components/Home/homeCategory'
import ReviewSection from '@/components/Home/reviews'


import { IProduct } from '@/types/product'

interface IProps{
  title: string;
  arrivalProducts:IProduct[]
}

const HomeContainer = ({arrivalProducts}:IProps) => {
  return (
 <main>
 <ShopHome/> 
<NewArrivals title= "NEW ARRIVALS" arrivalProducts={arrivalProducts}/>

<NewArrivals title= "TOP SELLING" arrivalProducts={arrivalProducts}/>

<CategoryHome/>
<ReviewSection/>

 </main>
  )
}

export default HomeContainer


