import image from "../images/PersonDps/image.png";
import janeImage from "../images/JaneCooper/image.png";
const MembersSayingAbt = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-30 p-10 py-30 gap-15 bg-blue-100">
      <div className="flex flex-col gap-4 lg:w-150">
        <div className="">
          <span className="text-5xl font-bold text-gray-600">What </span>
          <span className="text-5xl font-bold text-blue-600">Our Member's</span>
        </div>
        <span className="text-5xl font-bold text-gray-600">
          Saying About Us
        </span>
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-500 lg:pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            pariatur molestias dignissimos.
          </span>
        </div>

        <div className="lg:py-10">
          <img src={image} width={350} alt="" />
        </div>
      </div>
      <div className="flex flex-col p-8 lg:p-15 gap-15 bg-white rounded-3xl w-80 lg:w-200 border border-gray-500">
        <div>
          <img src={janeImage} width={500} alt="" />
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magni
          consectetur ducimus laboriosam cupiditate velit, provident
          repudiandae. Minus, corporis saepe soluta dolorem modi sunt ratione!
        </div>
      </div>
    </div>
  );
};

export default MembersSayingAbt;
