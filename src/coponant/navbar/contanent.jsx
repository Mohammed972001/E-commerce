import React from "react";
export default function Contanent() {
  return (
    <div className=" container  h-24 w-full  ">
      <div className="  flex px-4 py-10">
        <div className="Left section w-[40%] flex space-x-4 ">
          <div className=" said Bar w-1/3 ">

          </div>
          <div className=" logo w-2/3 ">
          <a  className="cursor-pointer">
          <img src="/assets/logo.png" alt="Logo" />
          </a>

          </div>
        </div>
        <div className="Right section w-[60%]"></div>
      </div>
    </div>
  );
}
