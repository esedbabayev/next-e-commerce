import React from "react";

// Container
import Container from "@/components/main-container";

// Next Image
import Image from "next/image";

// Icons
import Email from "@/assets/images/icons/Vector.png";

const SubFooter = () => {
  return (
    <section className="absolute bottom-[85%] md:bottom-[80%] w-full px-4">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center desktop:px-16 desktop:py-9 gap-8 px-6 pt-8 pb-7 bg-black rounded-[20px]">
          {/* text */}
          <div>
            <p className="uppercase font-bold font-integral text-white text-[32px] leading-9 desktop:px-16 desktop:max-w-xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>
          {/* form */}
          <div>
            <form
              
              className="flex flex-col gap-3"
            >
              {/* email */}
              <div className="flex items-center gap-3 px-4 py-3 desktop:w-[349px] bg-white rounded-[62px]">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image src={Email} width={20} height={20} alt="emailIcon" />
                </div>
                <input
                  className="flex-grow outline-none placeholder:text-[#00000066]"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
              {/* button */}
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white rounded-[62px]">
                <button className="flex items-center gap-3 text-center">
                  Subscribe to Newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubFooter;
