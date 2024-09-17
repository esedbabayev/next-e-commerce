import React from "react";

// Component sections
import BlankSection from "./blankSection";
import SubFooter from "./subFooter";
import FooterMain from "./footerMain";

const Footer = () => {
  return (
    <footer className="mt-[220px] md:mt-[200px]">
      <BlankSection />
      <div className="relative">
        <div className="flex justify-center">
          <SubFooter />
        </div>
        <FooterMain />
      </div>
    </footer>
  );
};

export default Footer;
