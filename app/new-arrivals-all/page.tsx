import React from 'react'
import Container from '@/components/main-container'
import AllNewArrivalsContainer from '@/container/all-new-arrivals'
import { getArrivalProductsAll } from '@/api/products'


const AllNewArrivalsPage = async() => {

    const allArrivalPromise= await getArrivalProductsAll()
    const [arrivalProducts]= await Promise.all([allArrivalPromise])

  return (
    <Container>
        <AllNewArrivalsContainer arrivalProducts={arrivalProducts}/>
    </Container>
  )
}

export default AllNewArrivalsPage