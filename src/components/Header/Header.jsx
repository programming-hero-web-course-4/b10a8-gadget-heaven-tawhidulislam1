import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../Hero/Hero';

const Header = () => {
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><a>Item 3</a></li>
        </>
    return (
        <div className='bg-[#9538E2] text-white max-w-screen-2xl my-4 rounded-2xl mx-auto'>
            <div className="navbar max-w-screen-xl mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="font-bold text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <Hero></Hero>
        </div>
    );
};

export default Header;