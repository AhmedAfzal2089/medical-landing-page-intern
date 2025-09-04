import React from "react";
import image from "../images/QualityHealth/image.png";
import Tick from "../svgs/Tick";
import Arrow from "../svgs/Arrow";

const QualityHealth = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-30 p-10 gap-5">
      <div className="flex flex-col gap-4 lg:w-150">
        <span className="text-5xl font-bold text-gray-600">Your Future</span>
        <div className="flex gap-3">
          <span className="text-5xl font-bold text-gray-600">of</span>
          <span className="text-5xl font-bold text-blue-600">
            Quality Health
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            pariatur molestias dignissimos. Mollitia magnam rem nesciunt nemo
            temporibus, animi quos veniam voluptate amet?
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-500 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis et cumque voluptates mollitia facilis enim! Minus
            commodi amet dolorum eveniet accusamus iste fuga?
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repellat consequuntur quia error rerum animi expedita ullam ex
            dolore eveniet, ab aliquam natus.
          </span>
        </div>
        <button className="text-blue-600 font-semibold text-xl py-4 px-4 rounded-lg w-40 flex items-center justify-center gap-2 cursor-pointer">
          Learn More <Arrow />
        </button>
      </div>
      <div>
        <img src={image} width={500} alt="image" />
      </div>
    </div>
  );
};

export default QualityHealth;
