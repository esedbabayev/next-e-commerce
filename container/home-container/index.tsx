
import React from 'react'

// Components
import NewArrivals from '@/components/Home/newArrivals'

import ShopHome from "@/components/Home/homeShop"
import CategoryHome from '@/components/Home/homeCategory'
import ReviewSection from '@/components/Home/reviews'


import { IProduct } from '@/types/product'

interface IProps{
  title?: string;
  arrivalProducts:IProduct[],
  sellerProducts:IProduct[],
}

const HomeContainer = ({arrivalProducts, sellerProducts}:IProps) => {
  return (
 <main>

 <ShopHome/> 
<NewArrivals title= "NEW ARRIVALS" viewAllLink="/new-arrivals-all"  products={arrivalProducts} />

<NewArrivals title= "TOP SELLING" viewAllLink="/top-sellers-all"  products={sellerProducts}/>

<CategoryHome/>
<ReviewSection/>

 </main>
  )
}

export default HomeContainer


