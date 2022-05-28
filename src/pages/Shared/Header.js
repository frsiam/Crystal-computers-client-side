import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    if (loading) {
        return <Loading />
    }
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user && <span className='text-lg font-bold text-slate-300'>{user.displayName}</span>}</li>
        <li>{user ? <button onClick={() => {
            signOut(auth);
            navigate('/login')
            localStorage.removeItem('accessToken')
        }} className="btn btn-ghost">Sign Out</button>
            : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
                <label htmlFor='dashboard-sidebar' tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;