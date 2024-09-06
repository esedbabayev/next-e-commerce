import React from "react";

// Component sections
import BlankSection from "./blankSection";
import SubFooter from "./subFooter";
import FooterMain from "./footerMain";

const Footer = () => {
  return (
    <footer className="">
      <BlankSection />
      <div className="relative">
        <SubFooter />
        <FooterMain />
      </div>
    </footer>
  );
};

export default Footer;
