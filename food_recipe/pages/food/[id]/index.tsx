import { foodData } from "@/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Display: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const food = foodData.filter(
    (food) => food.id.toString() === id.toString()
  )[0];
  return (
    <div className="bg-[#ffcc00] max-w-screen min-h-screen md:h-screen overflow-hidden text-black flex flex-col md:flex-row  font-serif  ">
      <span
        className="absolute top-10 left-16 cursor-pointer flex justify-center items-center bg-yellow-200 hover:bg-yellow-300 transition-all w-10  h-10 rounded-full"
        onClick={() => {
          router.push("/");
        }}
      >
        <span className="absolute top-2 left-4.5  h-6 w-1 bg-neutral-600  rotate-45"></span>
        <span className="absolute top-2 left-4.5  h-6 w-1 bg-neutral-600 -rotate-45"></span>
      </span>
      {/* image */}
      <div className="w-screen h-96 md:w-5/12 bg-neutral-500 md:bg-neutral-500 md:h-screen overflow-hidden ">
        <img src={food.url} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Detail */}
      <div className="flex flex-col pt-20 px-8 md:w-7/12 md:overflow-y-scroll w-screen ">
        <h1
          className="text-3xl font-semibold font-serif text-neutral-800
        "
        >
          {food.name}
        </h1>
        <p className="text-neutral-600 mt-4 text-lg">
          {food.description + food.description}
        </p>
        {/* numbers */}
        <div className="flex items-center gap-1 mt-5 ">
          <div className="flex flex-col justify-center pr-4 py-1 text-[#3A4750] items-center">
            <span className="font-bold">{food.cookingTime}</span>
            <span>mins</span>
          </div>
          <span className="h-9 w-0.5 border-r border-neutral-400 "></span>
          <div className="flex flex-col justify-center  px-4 py-1 text-neutral-700  items-center">
            <span className="font-bold">{food.recipe.ingredients.length}</span>
            <span>ingredients</span>
          </div>
          <span className="h-9 w-0.5 border-r border-neutral-400"></span>
          <div className="flex flex-col justify-center  px-4 py-1 text-neutral-700  items-center">
            <span className="font-bold">{food.recipe.steps.length}</span>
            <span>steps</span>
          </div>
        </div>

        {/* ingredients */}
        <h1
          className="text-2xl font-semibold font-serif text-neutral-700 mt-20
        "
        >
          Ingredients
        </h1>
        <ul className="mt-4 text-neutral-600 text-lg">
          {food.recipe.ingredients.map((ing, index) => (
            <li key={ing}>
              {index + 1}.&nbsp;&nbsp;{ing}
            </li>
          ))}
        </ul>

        {/* Steps */}
        <h1
          className="text-2xl font-semibold font-serif text-neutral-700 mt-20
        "
        >
          Steps
        </h1>
        <ul className="mt-4 text-[#3A4750] pb-10 text-lg">
          {food.recipe.steps.map((ing, index) => (
            <li key={ing}>
              {index + 1}.&nbsp;&nbsp;{ing}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Display;
