import React from "react";

import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <div className="px-4">
      <div className="flex flex-grow flex-col gap-4 p-[14px] border border-[#0000001A] rounded-[20px] max-h-[410px] md:max-h-[508px] overflow-x-hidden overflow-y-auto">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartItems;
