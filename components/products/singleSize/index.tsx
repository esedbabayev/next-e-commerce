import Link from "next/link";
import React from "react";

const SingleSize = ({ size }: any) => {
  return (
    <div>
      <li>
        <Link href={`/products?size=${size?.name}`}>
          <button
            className="py-[10px] px-5 bg-[#F0F0F0] rounded-[62px] text-[14px] 
          font-normal text-[##00000099] hover:bg-[#000000] hover:text-white"
          >
            {size?.name}
          </button>
        </Link>
      </li>
    </div>
  );
};

export default SingleSize;
