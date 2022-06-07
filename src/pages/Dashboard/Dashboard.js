import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            {/* flex flex-col items-center justify-center */}
            <div className="drawer-content w-11/12 mx-auto mt-5">
                {/* <!-- Page content here --> */}
                {/* <h1 className='text-3xl text-orange-500 font-bold'>Welcome to Your Dashboard</h1> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>

                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                            <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/reviews'>Manage Reviews</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;