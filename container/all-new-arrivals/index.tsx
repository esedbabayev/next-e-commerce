import NewArrivals from '@/components/Home/newArrivals'
import { IProduct } from '@/types/product';
import React from 'react'

interface IProps{
  title?: string;
  arrivalProducts:IProduct[],
}


const AllNewArrivalsContainer = ({arrivalProducts}:IProps) => {
  return (
    <main>
        <NewArrivals title='NEW ARRIVALS'products={arrivalProducts} />
    </main>
  )
}

export default AllNewArrivalsContainer