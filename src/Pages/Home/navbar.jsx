import React from 'react'

export default function NavBar () {
  return (
    <div className='w-full py-9 px-10 flex text-white  '>
    <div className='w-[30%]   ' >
    logo here
    </div>
    <div className='w-[65%]  ' >
    <ul className=' flex  space-x-16 font-mono text-white text-opacity-80 '>
     <li>
      <a> Home</a>
     </li>
     <li>
     <a> About Us</a>
    </li> 
    <li>
    <a> services</a>
   </li>
   <li>
   <a> Our Team</a>
  </li>

  <li>
  <a> Our besunise</a>
 </li>
 <li>
 <a> contact</a>
</li>



    

     
    
    </ul>
    </div>
    
      
    </div>
  )
}


