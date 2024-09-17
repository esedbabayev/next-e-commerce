import React from "react";

import Image from "next/image";

import PriceTag from "@/assets/cart/PriceTag.png";
import ArrowRight from "@/assets/cart/arrow-right-bold.png";

const OrderSummary = () => {
  return (
    <div className="px-4">
      <div className="p-[14px] border border-[#0000001A] rounded-[20px]">
        {/* Order Summary */}
        <div className="mb-4">
          <p className="text-xl font-bold">Order Summary</p>
        </div>
        {/* Calculations */}
        <div className="flex flex-col gap-5">
          {/* Subtotal */}
          <div className="flex justify-between">
            <span className="text-[#00000099] text-base font-normal">
              Subtotal
            </span>
            <span className="text-black font-bold text-base">$565</span>
          </div>
          {/* Discount */}
          <div className="flex justify-between">
            <span className="text-[#00000099] text-base font-normal">
              Discount
            </span>
            <span className="text-[#FF3333] font-bold text-base">-$565</span>
          </div>
          {/* Delivery Fee */}
          <div className="flex justify-between">
            <span className="text-[#00000099] text-base font-normal">
              Delivery Fee
            </span>
            <span className="text-black font-bold text-base">$565</span>
          </div>
        </div>
        <hr className="my-5" />
        {/* Total */}
        <div className="flex justify-between">
          <span className="text-[#00000099] text-base font-medium">Total</span>
          <span className="text-black font-bold text-base">$565</span>
        </div>
        <div className="mt-5">
          {/* Promo Code */}
          <form className="flex gap-3">
            <div className="bg-[#F0F0F0] py-3 px-4 flex gap-2 rounded-[62px] flex-grow">
              <Image src={PriceTag} alt="price tag" width={20} height={20} />
              <input
                type="text"
                className="bg-inherit outline-none"
                placeholder="Add promo code"
              />
            </div>
            <div className="bg-black rounded-[62px] py-3 px-7 flex-grow flex justify-center">
              <button className="text-white text-center">Apply</button>
            </div>
          </form>
          {/* Go to Checkout */}
          <div className="bg-black py-5 mt-6 rounded-[62px] flex items-center justify-center">
            <button className="text-white">Go to Checkout</button>
            <Image src={ArrowRight} alt="arrow" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
