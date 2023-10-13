// src/components/Navbar.tsx
import React from 'react';
import WalletConnect from '../Wallet/WalletConnect';

const Navbar: React.FC = () => {

  return (
    <div className="flex justify-between h-auto p-8">
      <div className='h-auto text-[30px]'>
        <h1 className='mt-2'>
            Whitelist<span className='text-[#00ffc3] bg-[#292929] rounded-full pl-2 pr-2'>.me</span>
        </h1>
      </div>
      <div className='w-[45%] mt-2'>
        <input className='w-full text-white bg-[#292929] h-10 p-4 rounded-full border hover:border-[#00ffc3]' placeholder='Search..' />
      </div>
      <WalletConnect />
    </div>
  );
};

export default Navbar;
