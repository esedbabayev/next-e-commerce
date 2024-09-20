export const getArrivalProducts = async () => {
   const resp = await fetch("http://localhost:5000/api/new-arrivals?limit=4")
  const data = await resp.json()

  console.log(data);
  
  return data
}

export const getArrivalProductsAll = async () => {
  const resp = await fetch("http://localhost:5000/api/new-arrivals")
 const data = await resp.json()

 console.log(data);
 
 return data.products
}


export const getSellerProducts = async () => {
  const sellerResp = await fetch("http://localhost:5000/api/top-sellers?limit=4")
 const sellerData = await sellerResp.json()
 console.log(sellerData);
 
 return sellerData
}

