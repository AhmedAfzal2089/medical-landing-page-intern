import React from "react";
import Covid from "../svgs/Covid";
import Lungs from "../svgs/Lungs";
import Suppliment from "../svgs/Suppliment";
import MentalHealth from "../svgs/MentalHealth";

const ConsultingSpec = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-30 gap-4 px-14 mb-12">
        <span className="text-4xl font-bold text-gray-600 flex ">
          Our Consulting Specialist
        </span>
      </div>
      <div className="lg:m-8 m-4 flex flex-col lg:flex-row gap-10 lg:gap-10 items-center justify-around">
        <div className="flex flex-col px-5 justify-center border rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <Covid />
          </div>
          <span className="text-2xl font-bold text-gray-600">
            Covid-19 Test
          </span>
          <span className="w-60 flex items-center justify-center  text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            officiis quos fugiat, quis laudantium explicabo.
          </span>
        </div>
        <div className="flex flex-col px-5 justify-center border rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1 bg-blue-600">
          <div>
            <Lungs />
          </div>
          <span className="text-2xl font-bold text-white">Heart Lungs</span>
          <span className="w-60 flex items-center justify-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            officiis quos fugiat, quis laudantium explicabo.
          </span>
        </div>
        <div className="flex flex-col px-5 justify-center border rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <Suppliment />
          </div>
          <span className="text-2xl font-bold text-gray-600">Suppliments</span>
          <span className="w-60 flex items-center justify-center  text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            officiis quos fugiat, quis laudantium explicabo.
          </span>
        </div>
        <div className="flex flex-col px-5 justify-center border rounded-2xl shadow-xl w-3/4 lg:w-1/5 py-8 gap-1">
          <div>
            <MentalHealth />
          </div>
          <span className="text-2xl font-bold text-gray-600">
            Mental Health
          </span>
          <span className="w-60 flex items-center justify-center  text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            officiis quos fugiat, quis laudantium explicabo.
          </span>
        </div>
      </div>
    </>
  );
};

export default ConsultingSpec;
