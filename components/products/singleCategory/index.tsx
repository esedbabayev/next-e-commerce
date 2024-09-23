import React from "react";
import Link from "next/link";

const SingleCategory = ({ category }: any) => {
  return (
    <li className={` flex  flex-col  justify-between items-baseline`}>
      <Link href={`/products?category=${category.name}`}>{category.name}</Link>
    </li>
  );
};

export default SingleCategory;
