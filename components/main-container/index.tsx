import React from "react";

interface AuxProps {
  children: JSX.Element;
}

const Container: React.FC<AuxProps> = ({ children }) => {
  return (
    <div className="max-w-[1240px] px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
