import React from "react";

// Container
import Container from "@/components/main-container";

// Components
import Links from "../links";

// Next Image
import Image from "next/image";

// Icons
import Twitter from "@/assets/images/icons/logo-twitter 2.png";
import Facebook from "@/assets/images/icons/logo-facebook.png";
import Instagram from "@/assets/images/icons/logo-instagram.png";
import GitHub from "@/assets/images/icons/logo-github 1.png";
import Visa from "@/assets/images/icons/Visa.png";
import MasterCard from "@/assets/images/icons/Mastercard.png";
import PayPal from "@/assets/images/icons/Paypal.png";
import ApplePay from "@/assets/images/icons/ Pay.png";
import GooglePay from "@/assets/images/icons/G Pay.png";

// Link
import Link from "next/link";

const FooterMain = () => {
  return (
    <section className="bg-main pb-20">
      <Container>
        {/* holder of all */}
        <div>
          <div className="flex flex-col">
            {/* logo and links */}
            <div className="pt-[180px] md:pt-[150px] flex flex-col md:flex-row md:justify-between md:items-center">
              {/* logo and social media icons */}
              <div className="flex flex-col mb-6 md:justify-center md:w-[35%]">
                {/* logo */}
                <div className="mb-[5px]">
                  <h2 className="text-3xl font-bold">SHOP.CO</h2>
                </div>
                {/* text */}
                <div className="mb-5">
                  <p className="text-sm font-normal text-[#00000099]">
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </p>
                </div>
                {/* social media icons */}
                <div className="flex gap-3">
                  <Link href="#">
                    <div className="w-7 h-7 rounded-full border border-[#00000033] flex justify-center items-center">
                      <Image
                        src={Twitter}
                        width={12}
                        height={12}
                        alt="twitterLogo"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="w-7 h-7 bg-black rounded-full border border-[#00000033] flex justify-center items-center">
                      <Image
                        src={Facebook}
                        width={7}
                        height={10}
                        alt="facebookLogo"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="w-7 h-7 rounded-full border border-[#00000033] flex justify-center items-center">
                      <Image
                        src={Instagram}
                        width={14}
                        height={14}
                        alt="instagramLogo"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="w-7 h-7 rounded-full border border-[#00000033] flex justify-center items-center">
                      <Image
                        src={GitHub}
                        width={14}
                        height={14}
                        alt="githubLogo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* links */}
              <div className="grid grid-cols-2 gap-6 md:grid md:grid-cols-4 md:gap-5 desktop:gap-16">
                <Links />
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-medium uppercase tracking-[3px]">
                    HELP
                  </p>
                  <ul className="flex flex-col gap-3">
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Customer Support
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Delivery Details
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Terms & Conditions
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Privacy Policy
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-medium uppercase tracking-[3px]">
                    FAQ
                  </p>
                  <ul className="flex flex-col gap-3">
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Account
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Manage Deliveries
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Orders
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Payment
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-medium uppercase tracking-[3px]">
                    RESOURCES
                  </p>
                  <ul className="flex flex-col gap-3">
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Free eBook
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Development Tutorial
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        How to - Blog
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="text-sm font-normal text-[#00000099] hover:underline">
                        Youtube Playlist
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* line */}
            <div className="h-[2px] w-full bg-[#0000001A] mt-8 md:mt-[50px]"></div>
            {/* all rights reserved */}
            <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div>
                <p className="text-sm font-normal text-[#00000099]">
                  Shop.co © 2000-2024, All Rights Reserved
                </p>
              </div>
              {/* logos */}
              <div className="flex gap-3">
                <div className="w-8 h-6 bg-white border rounded flex justify-center items-center">
                  <Image src={Visa} width={24} height={9} alt="visa" />
                </div>
                <div className="w-8 h-6 bg-white border rounded flex justify-center items-center">
                  <Image src={MasterCard} width={24} height={9} alt="mastercard" />
                </div>
                <div className="w-8 h-6 bg-white border rounded flex justify-center items-center">
                  <Image src={PayPal} width={24} height={9} alt="paypal" />
                </div>
                <div className="w-8 h-6 bg-white border rounded flex justify-center items-center">
                  <Image src={ApplePay} width={24} height={9} alt="applepay" />
                </div>
                <div className="w-8 h-6 bg-white border rounded flex justify-center items-center">
                  <Image src={GooglePay} width={24} height={9} alt="googlepay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterMain;
