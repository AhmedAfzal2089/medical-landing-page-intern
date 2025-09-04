import DoctorImage from "../images/doctor/image.png";
import HeroInput from "../svgs/HeroInput";
import SemiCircle from "../svgs/SemiCircle";

const HeroSection = () => {
  return (
    <div className="bg-blue-100 w-full flex flex-col h-170 items-center justify-center px-5 py-10 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-7xl mx-auto gap-10 relative">
        {/* Text and Input Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left z-10 w-full lg:w-1/2">
          <h1 className="text-gray-800 font-bold text-4xl lg:text-6xl">
            Find & Search Your
          </h1>
          <div className="flex justify-center lg:justify-start gap-2">
            <span className="text-blue-600 font-bold text-4xl lg:text-6xl">
              Favourite
            </span>
            <span className="font-bold text-4xl lg:text-6xl">Doctor</span>
          </div>
          <p className="text-gray-500 max-w-md mx-auto lg:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            omnis voluptate cupiditate quisquam provident laborum.
          </p>

          {/* Input */}
          <div className="mt-5 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
            <HeroInput className="w-full h-auto" />
          </div>
        </div>

        {/* SemiCircle - Hidden on Mobile */}
        <div className="absolute hidden lg:block -right-20 -bottom-23">
          <SemiCircle />
        </div>

        {/* Doctor Image - Hidden on Mobile */}
        <div className="hidden lg:block absolute right-0 -top-32 z-10">
          <img
            src={DoctorImage}
            alt="Doctor"
            className="w-[500px] xl:w-[800px]"
          />
        </div>
      </div>

      {/* Bottom Blue Bar */}
      {/* Bottom Blue Bar */}
      <div className="mt-5 absolute bg-blue-600 w-full bottom-0 py-4">
        {/* Bottom Blue Bar */}
        <div className="bg-blue-600 w-full py-6">
          <div className="max-w-2/3 mx-auto w-full flex flex-row lg:flex-row items-center sm:justify-start text-white text-center lg:px-4 lg:gap-15 gap-2">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-xl font-bold">24/7</span>
              <span className="text-sm text-blue-200">Online Support</span>
            </div>

            {/* Divider (Only on larger screens) */}
            <div className="hidden sm:block h-10 border-l border-blue-300" />

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-xl font-bold">100+</span>
              <span className="text-sm text-blue-200">Doctors</span>
            </div>

            {/* Divider (Only on larger screens) */}
            <div className="hidden sm:block h-10 border-l border-blue-300" />

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="text-xl font-bold">1M+</span>
              <span className="text-sm text-blue-200">Active Patients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
