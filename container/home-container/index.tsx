
import React from 'react'

// Components
import NewArrivals from '@/components/pages/Home/newArrivals'

import ShopHome from "@/components/pages/Home/homeShop"


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

 </main>
  )
}

export default HomeContainer


