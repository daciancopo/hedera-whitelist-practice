// src/components/Sidebar.tsx
import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import darkModeImg from "../../assets/day-and-night.png";
import logo from "../../assets/logonew.svg";


const Sidebar: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();

  return (
    <div className="w-[140px] flex justify-center items-center p-4">
      <div className='bg-[#141414] w-[80px] h-full rounded-[20px] flex flex-col justify-between items-center p-9 border-2 border-[#00ffc3]'>
        <div className='w-[60px]'>
            <img src={logo} />
        </div>
        <div className='h-[55%] bg-[#ffffff] w-[60px] flex flex-col justify-around items-center rounded-[12px] text-black'>
            <div>
                Link
            </div>
            <div>
                Link
            </div>
            <div>
                Link
            </div>
        </div>
        <div
        role='button'
        onClick={toggleDarkMode}
        className="w-[40px] h-[40px]"
        >
            <img src={darkModeImg} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
