import NewArrivals from '@/components/pages/Home/newArrivals'
import React from 'react'

import { IProduct } from '@/types/product'

interface IProps{
  title: string;
  arrivalProducts:IProduct[]
}

const HomeContainer = ({arrivalProducts}:IProps) => {
  return (
 <main>
    
<NewArrivals title= "NEW ARRIVALS" arrivalProducts={arrivalProducts}/>
<NewArrivals title= "TOP SELLING" arrivalProducts={arrivalProducts}/>

 </main>
  )
}

export default HomeContainer


