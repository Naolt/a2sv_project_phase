import { Food } from "@/model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  food: Food;
}

const Card: React.FC<Props> = ({ food }) => {
  return (
    <Link href={`food/${food.id}`}>
      <div className="flex flex-col w-[250px] bg-neutral-100 gap-4 pb-5 col-span-1 h-fit rounded-md overflow-hidden mx-auto hover:scale-105 transition-all ease-linear shadow shadow-black/[0.2] contrast-75 hover:contrast-100">
        {/* image container */}
        <div className="w-[250px] h-[250px] overflow-hidden bg-neutral-400">
          <img
            src={food.url}
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-center text-xl font-semibold capitalize text-yellow-600">
          {food.name}
        </h1>
      </div>
    </Link>
  );
};

export default Card;
