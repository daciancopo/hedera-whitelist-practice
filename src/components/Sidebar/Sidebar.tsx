import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import darkModeImg from "../../assets/day-and-night.png";
// import logo from "../../assets/mask1.svg";
import logo from "../../assets/logo.svg";


const Sidebar: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();

  return (
    <div className="w-[120px] flex justify-center items-center p-5">
      <div className=' w-[100%] h-full rounded-[20px] flex flex-col justify-between items-center p-6 bg-[#3F3D38] text-[#3202124] ]'>
        <div className='w-[60px]'>
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className='h-[70%] w-[70px] flex flex-col justify-start items-center rounded-xl font-bold'>
            <div className='hover:bg-[#3EFD6C] hover:text-[#1F1E1E] mt-2 mb-5 rounded-xl w-[80%] h-[55px] bg-[#202124]   flex items-center justify-center'>
              <Link to="/">Home</Link>
            </div>
            <div className='hover:bg-[#4DFE59] hover:text-[#1F1E1E] mt-2 mb-5 rounded-xl w-[80%] h-[55px] bg-[#202124]   flex items-center justify-center'>
              <Link to="/check-whitelist">CW</Link>
            </div>
            <div className='hover:bg-[#4DFE59] hover:text-[#1F1E1E] mt-2 mb-5 rounded-xl w-[80%] h-[55px] bg-[#202124]  flex items-center justify-center'>
              <Link to="/whitelist-account">WA</Link>
            </div>
            <div className='hover:bg-[#4DFE59] hover:text-[#1F1E1E] mt-2 mb-5  rounded-xl w-[80%] h-[55px] bg-[#202124] flex items-center justify-center'>
              <Link to="/whitelist-account">WA</Link>
            </div>
        </div>
        <div
        role='button'
        onClick={toggleDarkMode}
        className="w-[45px] h-[45px]"
        >
            <img className='rounded-full rotate-45 ' src={darkModeImg} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
