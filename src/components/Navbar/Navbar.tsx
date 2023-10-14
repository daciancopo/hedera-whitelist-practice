// src/components/Navbar.tsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import WalletConnect from '../Wallet/WalletConnect';
import { useDarkMode } from '../../contexts/DarkModeContext';
import darkModeImg from "../../assets/day-and-night.png";
import logo from "../../assets/logonew.svg";

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useDarkMode();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1000 });
  
  return (
    <div className="flex justify-between pt-10 pr-16 pl-16 pb-4">
      {isMobile && (
        <div
        role='button'
        onClick={toggleDarkMode}
        className="w-[35px] h-[35px]"
        >
            <img src={darkModeImg} />
        </div>
      )}
      {!isTablet && (
          <div className='h-auto text-[30px]'>
            <h1 className='mt-1'>
                Whitelist<span className='text-[#00ffc3] bg-[#292929] rounded-full pl-2 pr-2'>.me</span>
            </h1>
          </div>
        )}
        {isMobile ? (
          <div className='w-[100px]'>
            <img src={logo} />
          </div>
        ) : (
      <div className='w-[40%] mt-1'>
        <input className='w-full text-white bg-[#292929] h-10 p-4 rounded-full border hover:border-[#00ffc3]' placeholder='Search..' />
      </div>
        )}
      <WalletConnect />
    </div>
  );
};

export default Navbar;
