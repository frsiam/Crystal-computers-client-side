import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if (loading) {
        return <Loading />
    }
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reiew'>Review</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user && <span className='text-lg font-bold text-slate-300'>{user.displayName}</span>}</li>
        <li>{user ? <button onClick={() => {
            signOut(auth);
            navigate('/login')
            // localStorage.removeItem('accessToken')
        }} className="btn btn-ghost">Sign Out</button>
            : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-xl">Crystal Computers</Link>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">SignUp</a>
            </div> */}
        </div>
    );
};

export default Header;