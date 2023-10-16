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
    <div className="flex justify-between pt-8 sm:pt-8 md:pt-11 pr-6 sm:pr-8 md:pr-12 pl-6 sm:pl-8 md:pl-12 pb-8">
      {isMobile && (
        // <div
        // role='button'
        // onClick={toggleDarkMode}
        // className="w-[35px] h-[35px]"
        // >
        //     <img src={darkModeImg} />
        // </div>
          <div className='w-[100px]'>
          <img src={logo} />
        </div>
      )}
      {!isMobile && (
          <div className='h-auto text-[30px]'>
            <h1 className='font-bold'>
              Whitelist<span className='text-[#00ffc3] bg-[#141414] rounded-full pl-2 pr-2'>.me</span>
            </h1>
          </div>
        )}

      <div className='w-[45%] sm:w-[40%] md:w-[35%] lg:w-[40%]'>
        <input className='w-full text-white bg-[#141414] h-10 p-4 rounded-full border hover:border-[#00ffc3] theme-toggle' placeholder='Search..' />
      </div>
        {/* )} */}
      <WalletConnect />
    </div>
  );
};

export default Navbar;
