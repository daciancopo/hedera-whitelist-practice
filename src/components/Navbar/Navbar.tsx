// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {

  return (
    <div className="flex justify-between h-auto p-8">
      {/* Navigation bar content */}
      <div className='h-auto text-[30px]'>
        <h1 className='mt-2'>
            Whitelist<span className='text-[#00ffc3]'>.me</span>
        </h1>
      </div>
      <div className='w-[45%] h-10 mt-2 bg-[#141414] rounded-full text-center'>
        <input className='w-full bg-[#141414] h-10 p-4 rounded-full border hover:border-[#ffffffde]' placeholder='Search..' />
      </div>
      <button className="bg-[#141414] text-white border border-[#ffffffde] w-28 h-12 font-bold rounded-lg hover:bg-[#00ffc3] hover:text-black">Connect</button>
    </div>
  );
};

export default Navbar;
