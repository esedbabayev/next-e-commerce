import { getSellerProductsAll } from '@/api/products'
import AllTopSellingProductsContainer from '@/container/all-top-selling-products'
import React from 'react'

const AllTopSellingProductsPage = async() => {


    const allTopSellerPromise= await getSellerProductsAll()
    const [topSellerProducts]= await Promise.all([allTopSellerPromise])


  return (
    <AllTopSellingProductsContainer topSellerProducts={topSellerProducts}/>
  )
}

export default AllTopSellingProductsPage