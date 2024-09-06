import React from "react";

// Container
import Container from "@/main-container";

// Next Image
import Image from "next/image";

// Icons
import Email from "@/assets/images/icons/Vector.png";

const SubFooter = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between px-16 py-10 bg-black rounded-[20px]">
          {/* left */}
          <div>
            <p className="uppercase font-bold text-white text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>
          {/* right */}
          <div>
            {/* email */}
            <div>
              <Image src={Email} width={20} height={15} alt="emailIcon" />
            </div>
            {/* button */}
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubFooter;
