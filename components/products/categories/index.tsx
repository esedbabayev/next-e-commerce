
import Image from 'next/image'
import close from "@/assets/products/close.png"

import SingleCategory from '../singleCategory'
import { getCategories } from '@/api/products'




const Categories = async() => {


const categoriesPromise = await getCategories()
const [allCategories] = await Promise.all([categoriesPromise])



  return (
<div >
    <div className='flex justify-between'>
    <h1 className='text-[20px] font-bold '>Filters</h1>
    <Image src={close} alt='close'className='w-6 h-6'></Image>
    </div>
    <hr className='mt-4 mb-5' />

     <ul className='space-y-4' >
  {
    allCategories&& allCategories.map((category:any) => (
      <SingleCategory 
      category={category} 
      key={category}
    
      />
    ))
  }
          
    </ul>

    <hr className='mt-6 mb-5' />

  </div>
  )
}

export default Categories
