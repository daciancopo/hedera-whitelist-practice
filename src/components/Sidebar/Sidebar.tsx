import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import darkModeImg from "../../assets/day-and-night.png";
import logo from "../../assets/logonew.svg";


const Sidebar: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();

  return (
    <div className="w-[140px] flex justify-center items-center p-4">
      <div className=' w-[90px] h-full rounded-[20px] flex flex-col justify-between items-center p-9 bg-[#141414] theme-toggle border'>
        <div className='w-[70px]'>
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className='h-[70%] w-[70px] flex flex-col justify-around items-center text-[#ffffffde] rounded-[15px] font-bold bg-[#292929]'>
            <div className='hover:text-[#00ffc3]'>
              <Link to="/">Home</Link>
            </div>
            <div className='hover:text-[#00ffc3]'>
              <Link to="/check-whitelist">CW</Link>
            </div>
            <div className='hover:text-[#00ffc3]'>
              <Link to="/whitelist-account">WA</Link>
            </div>
        </div>
        <div
        role='button'
        onClick={toggleDarkMode}
        className="w-[45px] h-[45px]"
        >
            <img className='theme-toggle' src={darkModeImg} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
