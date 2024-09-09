import React from "react";

interface AuxProps {
  children: JSX.Element;
}

const Container: React.FC<AuxProps> = ({ children }) => {
  return <div className=" mx-auto max-w-[1240px]">{children}</div>;
};

export default Container;
