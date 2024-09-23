import React from "react";
import Image from "next/image";
import rightArrow from "@/assets/productDetails/rightArrow.png";
import Link from "next/link";

const SingleCategory = ({ category }:any) => {
  return (
    <li className={` flex  flex-col  justify-between items-baseline`}>
      {/* <button >
      
      <h1>{category.name}</h1>
      
      
      </button> */}

      <Link href={`/products?category=${category.name}`}>{category.name}</Link>
    </li>
  );
};

export default SingleCategory;
