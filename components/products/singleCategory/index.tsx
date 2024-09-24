import React from "react";
import Link from "next/link";

const SingleCategory = ({ goToRoute, item }: any) => {
  return (
    <li onClick={() => goToRoute(item)} className={` flex  flex-col  justify-between items-baseline`}>
      <Link href={`/products?category=${item.name}`}>{item.name}</Link>
    </li>
  );
};

export default SingleCategory;
