import React from 'react'
import Image from 'next/image'
import submit from "@/assets/productDetails/submit.png"

const SingleColor = () => {
  return (
    <div>
    
    <li className={"h-9 w-9 p-2 relative rounded-full border border-x-2 border-[#00C12B] bg-green-600  flex items-center justify-center"}>
     
     <button >
        <Image src={submit} alt='submit'></Image>
     </button>
  
    </li>
      
    </div>
  )
}

export default SingleColor
