import NewArrivals from '@/components/Home/newArrivals';
import { IProduct } from '@/types/product';
import React from 'react'

interface IProps{
    title?: string;
    topSellerProducts:IProduct[],
  }

const AllTopSellingProductsContainer = ({topSellerProducts}:IProps) => {
  return (
    <main>
         <NewArrivals title='TOP SELLING' products={topSellerProducts} />
    </main>
  )
}

export default AllTopSellingProductsContainer