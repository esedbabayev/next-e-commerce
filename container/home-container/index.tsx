import NewArrivals from '@/components/pages/Home/newArrivals'
import TopSelling from '@/components/pages/Home/topSelling'
import React from 'react'

interface IProps{
  arrivalProducts:IProduct[]
}

const HomeContainer = ({arrivalProducts}:IProps) => {
  return (
 <main>
    
<NewArrivals arrivalProducts={arrivalProducts}/>
<TopSelling/>

 </main>
  )
}

export default HomeContainer
