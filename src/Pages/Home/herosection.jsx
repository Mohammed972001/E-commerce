import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
export default function HeroSection() {
  return (
    <div className="mt-16  lg:mt-44  flex flex-col justify-between h-[60%]   ">
    <div className=" flex flex-col items-center justify-center text-center ">
      <h1 className="text-white  text-4xl lg:text-7xl font-algerian mb-6 leading-tight">
        Welcome to Code Flow
      </h1>
      <p className="text-white text-base lg:text-2xl  max-w-xs lg:max-w-3xl mx-auto opacity-90">
        With us, your ideas turn into innovative applications and your business
        takes leaps into the future
      </p>
     
    </div>
    <div className="flex items-center justify-center space-x-5 lg:space-x-16">
    <button className="bg-transparent border border-gray-500 text-white text-xl font-semibold py-3 px-8 rounded-3xl shadow-lg hover:bg-white hover:text-blue-700 transition duration-300">
      Services
    </button>
    <button className="bg-transparent border border-gray-500 text-white text-xl  font-semibold py-3 px-8 rounded-3xl  shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300">
      Contact
    </button>
  </div>
    <div className="flex  w-full">
    <div className="w-[28%] px-12 hidden md:block ">
      <button className=" bg-transparent border border-gray-500 text-white py-4 px-4 rounded-full  shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300">
        <IoIosArrowRoundDown className="text-3xl " />
      </button>
    </div>
    <div className="flex  justify-between items-center text-white text-opacity-80 w-full px-4 lg:pl-20 lg:pr-72 ">
  <div className="text-center text-xs flex ">
    <span className=" text-3xl  md:text-5xl px-2 lg:px-5">24</span>
    <p className="text-start">
      Years <br />
      Experience
    </p>
  </div>
  <div className="text-center text-xs flex ">
  <span className=" text-3xl  md:text-5xl px-2 lg:px-5">1M</span>
    <p className="text-start">
      User's <br />
      Satisfaction
    </p>
  </div>
  <div className="text-center text-xs flex ">
    <span className=" text-3xl  md:text-5xl px-2 lg:px-5">10k</span>
    <p className="text-start">
      Official <br /> Subscribers
    </p>
  </div>
</div>

  </div>
    </div>
  );
}

