import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { foodData } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen bg-[#ffcc00] text-white py-40  ">
      <h1 className="text-center text-4xl font-serif font-bold">
        Food Recipes
      </h1>
      <div
        className="grid 
      lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  lg:px-40 pt-32 gap-8  md:px-10 sm:px-2 w-full"
      >
        {foodData.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
