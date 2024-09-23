import React from 'react'
import Image from 'next/image'
import rightArrow from "@/assets/productDetails/rightArrow.png"

const SingleCategory = ({category}) => {
  return (
    <li className={` flex  flex-col  justify-between items-baseline`}>
     <button ><h1>{category.name}</h1></button>

    </li>
  )
}

export default SingleCategory
