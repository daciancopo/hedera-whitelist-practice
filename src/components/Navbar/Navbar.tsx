// src/components/Navbar.tsx
import React from 'react';
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors"
import { useMediaQuery } from 'react-responsive';
import WalletConnect from '../Wallet/WalletConnect';
import { useDarkMode } from '../../contexts/DarkModeContext';
// import darkModeImg from "../../assets/day-and-night.png";
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useDarkMode();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1000 });
  
  return (
    <div className="flex justify-between pt-4 sm:pt-6 md:pt-10 pr-6 sm:pr-8 md:pr-16 pl-6 sm:pl-8 md:pl-16 pb-10">
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
          <div className='h-auto'>
            {/* <h1 className='font-bold'>
              <span className='text-[40px]'>Whitelist</span><span className='text-[#89ff13] text-[35px] bg-[#1b1b1b] rounded-full pb-0 pt-0 pl-3 pr-4'>.me</span>
            </h1> */}
            <button className='hover:bg-[#89ff13] hover:text-[#1c1c1c] text-[#89ff13] text-[35px] rounded-xl w-[50px] h-[50px] bg-[#242526] border border-[#dcdcdc] flex items-center justify-center rotate-90'>
              |||
            </button>
          </div>
      )}
      <div className='w-[45%] sm:w-[40%] md:w-[40%] lg:w-[35%] flex items-center'>
        <input className='w-full bg-[#242526] h-12 p-4 rounded-full hover:border-[#89ff13] placeholder:text-[#dcdcdc] theme-toggle' placeholder='Search...' />
        {/* <button></button> */}
      </div>
      <div className='flex items-center'>
        <WalletConnect connector={HashpackConnector} />
      </div>
    </div>
  );
};

export default Navbar;
