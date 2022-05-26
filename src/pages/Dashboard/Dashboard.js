import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            {/* flex flex-col items-center justify-center */}
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl text-orange-500 font-bold'>Welcome to Your Dashboard</h1>
                <Outlet></Outlet>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;