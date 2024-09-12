export const getArrivalProducts=async ()=>{
   const resp =await fetch("http://localhost:5000/api/new-arrivals")
  const data = await resp.json()
  return data
}