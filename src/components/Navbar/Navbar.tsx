// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {

  return (
    <div className="flex justify-between h-auto p-8">
      {/* Navigation bar content */}
      <div className='h-auto text-[30px]'>
        <h1 className='mt-2'>
            Whitelist<span className='text-[#00ffc3] bg-[#292929] rounded-full pl-2 pr-2'>.me</span>
        </h1>
      </div>
      <div className='w-[45%] h-10 mt-2 bg-[#292929] rounded-full text-center'>
        <input className='w-full text-white bg-[#292929] h-10 p-4 rounded-full border hover:border-[#ffffffde]' placeholder='Search..' />
      </div>
      <button className="bg-[#292929] text-white border border-[#ffffffde] w-28 h-12 font-bold rounded-[12px] hover:bg-[#00ffc3] hover:text-black hover:border-[#292929]">Connect</button>
    </div>
  );
};

export default Navbar;
