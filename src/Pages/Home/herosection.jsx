import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
export default function HeroSection() {
  return (
    <div className="">
    <div className="w-full mt-44 flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24">
      <h1 className="text-white text-5xl md:text-6xl font-algerian mb-6 leading-tight">
        Welcome to Code Flow
      </h1>
      <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
        With us, your ideas turn into innovative applications and your business
        takes leaps into the future
      </p>
      <div className="flex space-x-16">
        <button className="bg-transparent border border-gray-500 text-white text-xl font-semibold py-3 px-8 rounded-3xl shadow-lg hover:bg-white hover:text-blue-700 transition duration-300">
          Services
        </button>
        <button className="bg-transparent border border-gray-500 text-white text-xl  font-semibold py-3 px-8 rounded-3xl  shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300">
          Contact
        </button>
      </div>
    </div>
    <div className="flex mt-20 w-full">
    <div className="w-[28%] px-12 ">
      <button className=" bg-transparent border border-gray-500 text-white  font-semibold py-4 px-4 rounded-full  shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300">
        <IoIosArrowRoundDown className="text-3xl " />
      </button>
    </div>
    <div className="flex justify-center items-center  space-x-40 text-white text-opacity-80">
      <div className="text-center flex">
        <span className="text-5xl  px-5">24</span>
        <p className="text-start">
          Years <br />
          Experience
        </p>
      </div>
      <div className="text-center flex">
        <span className="text-5xl  px-5">1M</span>
        <p className="text-start">
          User's <br />
          Satisfaction
        </p>
      </div>
      <div className="text-center flex">
        <span className="text-5xl   px-5">10k</span>
        <p className="text-start">
          Official <br /> Subscribers
        </p>
      </div>
    </div>
  </div>
    </div>
  );
}
