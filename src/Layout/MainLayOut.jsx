import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;