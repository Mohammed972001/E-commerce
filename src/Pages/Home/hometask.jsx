import React from "react";
import NavBar from "./navbar";
import HeroSection from "./herosection";

export default function Hometask() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url("/public/assets/taskbg.jpg")`, // طبقة تعتيم فوق الخلفية
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute w-[98%] h-[90%]
      bg-white bg-opacity-0 rounded-[50px]
      shadow-[0_25px_45px_rgba(0,0,0,0.2)] border border-white border-opacity-0
      border-r-2 border-r-white border-r-opacity-20 border-b-2 border-b-white border-b-opacity-20"
        style={{
          boxShadow: "inset 5px 5px 40px 10px rgba(0, 153, 255, 0.5)",
        }}
      >
      <NavBar/>
      <HeroSection/>
      </div>
    </div>
  );
}
