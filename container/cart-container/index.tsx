import React from "react";

import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";

const CartContainer = () => {
  return (
    <main className="flex flex-col">
      <div className="px-4">
        <h1 className="uppercase font-bold text-3xl font-integral">
          Your cart
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-6">
        <div className="w-full md:w-1/2 mb-5">
          <CartItems />
        </div>
        <div className="w-full md:w-1/2">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default CartContainer;
