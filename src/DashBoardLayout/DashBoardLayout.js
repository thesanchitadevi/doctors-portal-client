import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Dashboard/SideBar/SideBar';
import Nav from '../Pages/Shared/Nav/Nav';

const DashBoardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='lg:flex lg:flex-row gap-5'>
                <SideBar className='lg:flex-none'></SideBar>
                <Outlet className='lg:grow w-full'></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;