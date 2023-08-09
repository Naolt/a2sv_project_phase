import React from "react";
import Nav from "./Nav";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="min-h-screen px-2 flex flex-col justify-start items-center bg-white text-black">
        <main className=" py-20 flex-1 flex flex-col justify-start items-center text-lg">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
