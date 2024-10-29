import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full py-9 px-10 flex items-center justify-between text-white">
      <div className="w-[20%] lg:w-[30%]">
        logo here
      </div>
      
      {/* أيقونة البرجر للشاشات الصغيرة */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />} {/* تبديل الأيقونات */}
        </button>
      </div>
      
      {/* القائمة الرئيسية */}
      <div className={`w-[65%] ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-16 font-mono text-white text-opacity-80">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Our Business</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
