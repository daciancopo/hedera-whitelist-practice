import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <div className='w-full h-[90px] fixed bottom-0 flex justify-center mb-2'>
      {/* <div className="h-[85px] w-[95%] p-2 flex justify-center items-center  bg-[#141414]  rounded-[20px] border theme-toggle"> */}
          <div className='h-[90%] w-[95%] flex justify-around items-center text-[#ffffffde] rounded-[20px] bg-[#141414] border theme-toggle'>
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
      {/* </div> */}
    </div>
  );
};

export default Footer;
