// src/components/Layout.tsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the width as needed

  return (
    <div className="flex h-screen">
      {isMobile ? (
        <Footer />
      ) : (
        <Sidebar />
      )}
      <div className="flex-1">
        <NavBar />
        <div className="h-[80%] ml-8 mr-8">{children}</div>
        <div className='mt-[20px] w-full text-center text-[#888]'>Made with love ❤️ by Buidler-labs Team</div>
      </div>
    </div>
  );
};

export default Layout;
