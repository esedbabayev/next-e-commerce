"use client"

export const getArrivalProducts = async () => {
   const resp = await fetch("http://localhost:5000/api/new-arrivals?limit=4")
  const data = await resp.json()
  
  return data
}

export const getArrivalProductsAll = async () => {
  const resp = await fetch("http://localhost:5000/api/new-arrivals")
 const data = await resp.json()
 
 return data.products
}


export const getSellerProducts = async () => {
  const sellerResp = await fetch("http://localhost:5000/api/top-sellers?limit=4")
 const sellerData = await sellerResp.json()
 
 return sellerData
}


export const getSellerProductsAll = async () => {
  const sellerResp = await fetch("http://localhost:5000/api/top-sellers")
 const sellerData = await sellerResp.json()
 
 return sellerData.products
}


export const getCategories = async () => {
  const categoriesResp = await fetch("http://localhost:5000/api/categories");
  const categoriesData = await categoriesResp.json();
   
  return categoriesData; 
};

export const getSizes = async () => {
  const sizesResp = await fetch("http://localhost:5000/api/sizes");
  const sizesData = await sizesResp.json();
   
  return sizesData; 
};


export const getColors = async () => {
  const colorsResp = await fetch("http://localhost:5000/api/colors");
  const colorsData = await colorsResp.json();
   
  return colorsData; 
};


export const getAllProducts = async () => {
  const productsResp = await fetch("http://localhost:5000/api/products");
  const productsData = await productsResp.json();

  return productsData; 
};

