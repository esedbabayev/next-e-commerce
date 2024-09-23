import React from "react";

import ProductsContainer from "@/container/products-container";
import { getAllProducts } from "@/api/products";

const ProductsPage = async ({ searchParams }: any) => {
  const productsPromise = await getAllProducts(searchParams);

  const [allProducts] = await Promise.all([productsPromise]);

  return <ProductsContainer allProducts={allProducts.products} />;
};

export default ProductsPage;
