import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import JsonData from "../assets/data/data.json";
import "./MainLayout.css"
import  Contact  from '../pages/Contact';
import Events from '../pages/Events';
import Navbarr from '../components/Navbar';
import VideoPage from '../pages/VideoPage';
const MainLayout = () => {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="main-layout">
      <Navbarr />
      <Header data={landingPageData.Header}/>
      <div className="content">
        <Outlet />
      </div>
      <VideoPage/>
      <Events/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default MainLayout;
