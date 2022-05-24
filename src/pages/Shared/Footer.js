import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../../assets/images/footerbg.jpg'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: `url(${footerbg})`, backgroundSize: 'cover' }} className="px-10 py-6 fixed inset-x-0 bottom-0">
            <div className="footer justify-start lg:justify-between">
                <div>
                    <span className="footer-title">Upcoming Product</span>
                    <Link to='/' className="link link-hover">Small Scale of transistor</Link>
                    <Link to='/' className="link link-hover">PCB Board</Link>
                    <Link to='/' className="link link-hover">MotherBoard</Link>
                    <Link to='/' className="link link-hover">Power Adaptor</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Gallery</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <p>Copyright © {year} - All right reserved by Crystal Computers Tech Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;