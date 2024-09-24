import React from "react";
import Container from "@/components/main-container";

import Filtering from "@/components/products/filtering";
import AllProducts from "@/components/products/allProducts";
import { ICategory, IProduct } from "@/types/product";

interface IProps {
  categories: ICategory[];
  colors: ICategory[];
  sizes: ICategory[];
  products: IProduct[];
}

const ProductsContainer = ({products, colors, sizes, categories }:IProps) => {
  return (
    <Container>
      <main className="lg:flex lg:flex-row ">
        <Filtering categories={categories} colors={colors} sizes={sizes} />
        <AllProducts products={products} />
      </main>
    </Container>
  );
};

export default ProductsContainer;
