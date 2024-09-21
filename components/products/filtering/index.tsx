import React, { useEffect, useState } from 'react'

import Container from '@/components/main-container'
import Categories from '../categories'
import Price from '../price'
import Colors from '../colors'
import Sizes from '../sizes'
import Button from '../button'



const Filtering = () => {




  return (
   <Container>
    <div className='col-span-3 border border-[##0000001A] rounded-[20px] pt-5 pb-6 px-5 lg:px-6 lg:pb-7 w-[390px] h-[1066px] lg:w-[295px] lg:h-[1220px]' >
      <Categories/>
      <Price/>
      <Colors/>
      <Sizes/>
      <Button/>
    </div>
    </Container>
  )
}

export default Filtering
