import React from 'react'
import Container from '@/components/main-container'

import Filtering from '@/components/products/filtering'
import AllProducts from '@/components/products/allProducts'



const ProductsContainer = ({allProducts}:any) => {
  return (
     <Container>
    <main className='lg:flex lg:flex-row '>
      <Filtering />
      <AllProducts allProducts={allProducts}/>


    </main>
    </Container>
  )
}

export default ProductsContainer
