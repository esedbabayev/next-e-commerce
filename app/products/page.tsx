import React from "react";

import ProductsContainer from "@/container/products-container";
import { getAllCategory,
  getAllColors,
  getAllProducts,
  getAllSizes} from "@/api/products";

const ProductsPage = async ({ searchParams }: any) => {
  const [categories, colors, sizes, products] = await Promise.all([
    getAllCategory(),
    getAllColors(),
    getAllSizes(),
    getAllProducts(searchParams),
  ]);
  return <ProductsContainer categories={categories} colors={colors} sizes={sizes} products={products} />;
};

export default ProductsPage;
