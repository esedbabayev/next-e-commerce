import React from "react";
import Container from "@/components/main-container";
import {
  getArrivalProducts,
  getArrivalProductsAll,
  getSellerProducts,
} from "@/api/products";
import AllNewArrivalsContainer from "@/container/all-new-arrivals";

const AllNewArrivalsPage = async () => {
  const allArrivalPromise = await getArrivalProductsAll();

  const [arrivalProducts] = await Promise.all([allArrivalPromise]);
  

  return (
    <Container>
      <AllNewArrivalsContainer arrivalProducts={arrivalProducts} />
    </Container>
  );
};

export default AllNewArrivalsPage;
