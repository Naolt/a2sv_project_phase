import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="w-full px-5 flex items-center py-3">
      <ul className="flex items-center gap-5 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
