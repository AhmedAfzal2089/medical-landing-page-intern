import React from "react";
import NewLetter from "../svgs/NewLetter";

const SubscribeNews = () => {
  return (
    <div className="w-[80%] bg-blue-600 flex flex-col items-center justify-center m-auto h-65 rounded-3xl gap-8 mt-30">
      <div className="text-white font-semibold text-3xl px-2 lg:px-0">
        Subscribe To Our NewsLetter
      </div>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto  px-5 lg:py-0">
        <NewLetter className="w-full h-auto" />
      </div>
    </div>
  );
};

export default SubscribeNews;
