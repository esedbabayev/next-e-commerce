import React from 'react'

// Components
import ProductDetails from '@/components/ProductDetailPage/productDetail'
import Reviews from '@/components/ProductDetailPage/reviews'
import NewArrivals from '@/components/Home/newArrivals'

const ProductDetailContainer = () => {
  return (
    <main>
        <ProductDetails/>
        <Reviews/>
    
        
    </main>
  )
}

export default ProductDetailContainer