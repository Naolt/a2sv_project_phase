import { AppContextProvider } from "@/context/index";
import React from "react";

interface Props {
  children: React.ReactNode;
}
// how can i kill y
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppContextProvider>
      <div className="bg-white min-h-screen w-screen text-black">
        <h1 className="text-4xl my-7 bg-black text-white text-center py-8">
          TECH BLOG
        </h1>
        <div className="px-10 py-5 flex items-center justify-center ">
          {children}
        </div>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
