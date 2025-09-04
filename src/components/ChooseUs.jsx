import React from "react";
import image from "../images/ChooseUs/image.png";
import Tick from "../svgs/Tick";
import Arrow from "../svgs/Arrow";

const ChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-30 p-10 gap-5">
      <div>
        <img src={image} width={500} alt="image" />
      </div>
      <div className="flex flex-col gap-4 lg:w-150">
        <span className="text-4xl font-bold text-gray-600">
          Why You Choose Us ?
        </span>
        <div className="flex items-center justify-center gap-4">
          <span>
            <Tick />
          </span>
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam ab
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>
            <Tick />
          </span>
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam ab
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>
            <Tick />
          </span>
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam ab
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>
            <Tick />
          </span>
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam ab
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>
            <Tick />
          </span>
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam ab
          </span>
        </div>
        <button className="text-blue-600 font-semibold text-xl py-4 px-4 rounded-lg w-40 flex items-center justify-center gap-2 cursor-pointer">
          Learn More <Arrow />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
