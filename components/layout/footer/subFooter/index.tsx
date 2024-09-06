import React from "react";

// Container
import Container from "@/components/main-container";

// Next Image
import Image from "next/image";

// Icons
import Email from "@/assets/images/icons/Vector.png";

const SubFooter = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col px-6 pt-8 bg-black rounded-[20px]">
          {/* text */}
          <div>
            <p className="uppercase font-bold text-white text-[32px] leading-9">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>
          {/* form */}
          <div>
            <form>
              {/* email */}
              <div>
                <Image src={Email} width={20} height={15} alt="emailIcon" />
              </div>
              {/* button */}
              <div>
                <button></button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubFooter;
