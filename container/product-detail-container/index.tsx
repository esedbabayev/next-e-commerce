import React from 'react'

// Components
import ProductDetails from '@/components/ProductDetailPage/productsDetails'
import Reviews from '@/components/ProductDetailPage/reviews'
import NewArrivals from '@/components/Home/newArrivals'

import { IProduct } from '@/types/product'

interface IProps{
  title: string;
  arrivalProducts:IProduct[]
}

const ProductDetailContainer = ({arrivalProducts}:IProps) => {
  return (
    <main>
        <ProductDetails/>
        <Reviews/>
        <NewArrivals title= "You might also like" arrivalProducts={arrivalProducts}/>
    
        
    </main>
  )
}

export default ProductDetailContainer