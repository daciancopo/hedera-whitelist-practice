// src/components/Layout.tsx
import React from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
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
        <div className="h-[75%] sm:h-[75%] md:h-[80%] lg:h-[80%] md:ml-8 md:mr-8">
          <Outlet />
        </div>
        {!isMobile && (
            <div className='mt-[20px] w-full text-center text-[#999]'>
              Made with love ❤️ by Buidler-labs Team
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Layout;
