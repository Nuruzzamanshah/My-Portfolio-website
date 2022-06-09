import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='n-warpper'>
            <div className="n-left">
                <div className='n-name'>Nuruzzaman</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className='li'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">Contact Us</button>
            </div>
        </div>
    );
};

export default Navbar;