import { getArrivalProducts } from "@/api/products";
import HomeContainer from "@/container/home-container";
import React from "react";

const HomePage = async () => {
  const arrivalPromise= await getArrivalProducts()

  const [arrivalProducts]= await Promise.all([arrivalPromise])
console.log(arrivalProducts,"arrivalProducts")

  return <HomeContainer arrivalProducts={arrivalProducts.products}/>


};

export default HomePage;
