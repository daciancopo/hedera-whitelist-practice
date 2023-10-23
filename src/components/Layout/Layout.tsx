// src/components/Layout.tsx
import React from 'react';
import {
  Outlet
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the width as needed

  return (
    <>
      <div className="flex h-[calc(100dvh)] p-4">
        {/* <div className='bg-[#171515] rounded-[25px] m-1 w-full h-full flex'> */}
        
        {isMobile ? (
            <Footer />
          ) : (
            <Sidebar />
          )}

        <div className="flex-1">
          <NavBar />
          <div className="h-auto w-auto md:ml-8 md:mr-8">
            <Outlet />
          </div>
          {/* {!isMobile && ( */}
              {/* <div className='h-auto'> */}
              {/* <h1 className='font-bold'>
                <span className='font-bold text-[35px] text-[#171717]'>Whitelist</span><span className='text-[#dcdcdc] text-[30px] bg-[#171717] rounded-full pb-0 pt-0 pl-3 pr-4'>.me</span>
              </h1> */}
            {/* </div> */}
        </div>
      </div>
    </>
    // </div>
  );
};

export default Layout;
