import { getArrivalProducts } from "@/api/products";
import {getSellerProducts} from "@/api/products"
import HomeContainer from "@/container/home-container";
import React from "react";


const HomePage = async () => {

// New arrivals
const arrivalPromise= await getArrivalProducts()
const sellerPromise= await getSellerProducts()

const [arrivalProducts,sellerProducts ]= await Promise.all([arrivalPromise,sellerPromise])



return <HomeContainer 
arrivalProducts={arrivalProducts.products}
sellerProducts = {sellerProducts.products}
/>


};

export default HomePage;


