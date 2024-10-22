import React, { useEffect, useState } from 'react'
import imaga1 from '/image/22.jpg'
import imaga2 from '/image/21.jpg'
export default function Slayder() {
    const images = [
        imaga1,
        imaga2,
      ];

      const [currentIndex,setCurrntIndex]=useState(0);

      useEffect(()=>{

        const interval = setInterval (()=>{nextSlide();},3000);
        return () => clearInterval(interval)
      },[currentIndex]);

      const nextSlide =() =>{
        setCurrntIndex((prevIndex)=>(prevIndex+1)%images.length);
      }
      const prevSlide=()=>{
        setCurrntIndex((prevIndex)=>(prevIndex-1+images.length)%images.length);
      }


  return (
    <div className="relative mt-5 group ">
    <img 
      src={images[currentIndex]} 
      alt="Slider Image" 
      className="w-full block  " 
    />
  
    <button 
      className="absolute top-1/2 transform -translate-y-1/2 left-20 bg-white bg-opacity-50
       text-black cursor-pointer invisible group-hover:visible hover:bg-opacity-80
       px-5 py-3 rounded-full font-bold text-xl transition-transform duration-700 ease-in-out 
       translate-x-[-150%] group-hover:translate-x-0" 
      onClick={prevSlide}
    >
      ❮
    </button>
  
    <button 
      className="absolute top-1/2 transform -translate-y-1/2 right-20 bg-white bg-opacity-50
      text-bla cursor-pointer invisible group-hover:visible hover:bg-opacity-80 
       px-5 py-3 rounded-full font-bold text-xl transition-transform duration-700 ease-in-out 
       translate-x-[150%] group-hover:translate-x-0" 
      onClick={nextSlide}
    >
      ❯
    </button>
  </div>
  
  )
}
