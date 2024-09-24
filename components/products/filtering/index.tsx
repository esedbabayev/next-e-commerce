"use client"
import React, { useState } from "react";
import { ICategory } from "@/types/product";
import { useRouter } from "next/navigation";

import Container from '@/components/main-container'
import Categories from '../categories'
import Price from '../price'
import Colors from '../colors'
import Sizes from '../sizes'
import Button from '../button'


interface IProps {
  categories: ICategory[];
  colors: ICategory[];
  sizes: ICategory[];
}

interface ISelected {
  category: string;
  color: string;
  size: string;
}


const Filtering = async({ categories, colors, sizes }: IProps) => {

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedColorId, setSelectedColorId] = useState<string>("");
  const [selectedSizeId, setSelectedSizeId] = useState<string>("");
  
  const route = useRouter();
  
  const goToRoute = (key: string, item: ICategory) => {
    const params = new URLSearchParams(window.location.search);
  
    if (params.has(key) && params.get(key) === item.name) {
      params.delete(key);
  
      switch (key) {
        case "category":
          setSelectedCategoryId("");
          break;
        case "color":
          setSelectedColorId("");
          break;
        case "size":
          setSelectedSizeId("");
          break;
  
          break;
        default:
        // code block
      }
    } else {
      params.set(key, item.name);
  
      switch (key) {
        case "category":
          setSelectedCategoryId(item.id);
          break;
        case "color":
          setSelectedColorId(item.id);
          break;
        case "size":
          setSelectedSizeId(item.id);
          break;
  
          break;
        default:
        // code block
      }
    }
  
    route.push(`/products?${params.toString()}`);
  };  

  return (
   <Container>
    <div className='col-span-3 border border-[##0000001A] rounded-[20px] pt-5 pb-6 px-5 lg:px-6 lg:pb-7 w-[390px] h-[1066px] lg:w-[295px] lg:h-[1220px]' >
      <Categories categories={categories} goToRoute= {goToRoute}/>
      <Price />
      <Colors colors={colors}/>
      <Sizes sizes={sizes} />
      <Button/>
    </div>
    </Container>
  )
}

export default Filtering
