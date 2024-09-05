import React from "react";

// Container
import Container from "@/main-container";



// Icons
import Email from "@/assets/images/icons/Vector.png"
import Image from "next/image";

const SubFooter = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between px-16 py-10 bg-black rounded-[20px]">
          {/* left */}
          <div>
            <p className="uppercase font-bold text-white text-4xl">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
          </div>
          {/* right */}
          <div>
            {/* email */}
            <div>
              <Image src={Email} w=[20] h=[15] alt="emailIcon" />
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
