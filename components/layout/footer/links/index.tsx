import React from "react";

// Link
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium uppercase tracking-[3px]">Company</p>
      <ul className="flex flex-col gap-3">
        <Link href="#">
          <li className="text-sm font-normal text-[#00000099] hover:underline">
            About
          </li>
        </Link>
        <Link href="#">
          <li className="text-sm font-normal text-[#00000099] hover:underline">
            Features
          </li>
        </Link>
        <Link href="#">
          <li className="text-sm font-normal text-[#00000099] hover:underline">
            Works
          </li>
        </Link>
        <Link href="#">
          <li className="text-sm font-normal text-[#00000099] hover:underline">
            Career
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Links;
