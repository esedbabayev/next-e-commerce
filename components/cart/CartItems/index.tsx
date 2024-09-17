import React from "react";

import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <div className="px-4 flex flex-col gap-5">
      <div>
        <h1 className="uppercase font-bold text-3xl font-integral">
          Your cart
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-[14px] border border-[#0000001A] rounded-[20px] max-h-[390px] overflow-x-hidden overflow-y-visible ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartItems;
