import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <div className='w-full h-auto fixed bottom-0 flex justify-center'>
      <div className="h-full w-full flex justify-center items-center bg-[#2d2e31]">
          <div className='h-[80%] w-[98%] flex justify-around items-center text-[#ffffffde] rounded-[20px] bg-[#1E1F22] border theme-toggle'>
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
      </div>
    </div>
  );
};

export default Footer;
