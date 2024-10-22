import React, { useEffect, useState, useRef } from 'react';

export default function Header() {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Reference to the dropdown element to detect clicks outside of it
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown visibility when user clicks on "My Account"
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if the click is outside of the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener to detect clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-[#f8f8f8] w-full h-14 flex px-8 py-4 text-[14px] text-[#999]'>
      {/* Left section: Welcome message and phone number */}
      <div className='pl-14 w-[50%]'>
        <ul className='flex'>
          {/* Welcome message list item with margin-right for spacing */}
          <li className='pr-[50px]'>Welcome to Our store Multikart</li>
          
          {/* Phone icon with padding and flipped horizontally */}
          <i className='fa fa-phone pt-1 pl-2 transform scale-x-[-1]'></i>
          
          {/* List item for the phone number */}
          <li>Call Us: 0100 3736 539</li>
        </ul>
      </div>

      {/* Right section: User options like Wishlist and My Account */}
      <div className='w-[50%]'>
        <ul className='flex justify-end space-x-6 pr-10'>
          {/* Wishlist link with hover effect */}
          <li className='cursor-pointer'>
            <a>
              {/* Heart icon with hover effect changing text color */}
              <i className='fa fa-heart pr-2 hover:text-red-600' />
              Wishlist
            </a>
          </li>

          {/* My Account dropdown menu */}
          <li onClick={toggleDropdown} ref={dropdownRef} className='cursor-pointer relative'>
            <a>
              {/* User icon with hover effect changing text color */}
              <i className='fa fa-user pr-2 hover:text-red-600' />
              My Account
            </a>

            {/* Dropdown menu for My Account (Login, Register, Logout) */}
            <ul className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}>
              {/* Dropdown item for Login with hover background color */}
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Login</li>

              {/* Dropdown item for Register with hover background color */}
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Register</li>

              {/* Dropdown item for Logout with hover background color */}
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
