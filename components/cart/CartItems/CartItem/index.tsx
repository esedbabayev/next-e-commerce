import React from "react";

import Image from "next/image";

import TShirt from "@/assets/cart/Frame 33.png";
import TrashIcon from "@/assets/cart/Frame.png";
import Minus from "@/assets/cart/Frame (1).png";

const CartItem = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* image div */}
        <div className="w-[100px] h-[100px]">
          <Image src={TShirt} alt="tshirt" />
        </div>
        {/* details div */}
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-base">Gradient Graphic T-shirt</p>
            <div className="w-5 h-5">
              <Image src={TrashIcon} alt="trash icon" />
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-xs font-normal">
              Size: <span className="font-light">Large</span>
            </p>
            <p className="text-xs font-normal">
              Color: <span className="font-light">White</span>
            </p>
          </div>
          <div className="flex justify-between">
            {/* price */}
            <div>
              <p className="font-bold text-xl">$145</p>
            </div>
            <div className="bg-[#F0F0F0] py-3 px-5 rounded-[62px]">
              <span>
                <Image src={Minus} alt="minus" width={16} height={16}/>
              </span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
