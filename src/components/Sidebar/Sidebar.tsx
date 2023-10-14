import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import darkModeImg from "../../assets/day-and-night.png";
import logo from "../../assets/logonew.svg";


const Sidebar: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();

  return (
    <div className="w-[140px] flex justify-center items-center p-4">
      <div className='bg-[#292929]  w-[90px] h-full rounded-[20px] flex flex-col justify-between items-center p-9 border border-[#00ffc3]'>
        <div className='w-[70px]'>
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className='h-[76%] w-[70px] flex flex-col justify-around items-center text-[#ffffffde] rounded-[15px] bg-[#00ffbb8d]'>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/check-whitelist">CW</Link>
            </div>
            <div>
              <Link to="/whitelist-account">WA</Link>
            </div>
        </div>
        <div
        role='button'
        onClick={toggleDarkMode}
        className="w-[45px] h-[45px]"
        >
            <img src={darkModeImg} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
