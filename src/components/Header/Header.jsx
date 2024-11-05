import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { GiSelfLove } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Statistics'}>Statistics</NavLink></li>
            <li><NavLink to={'/dashbaord'}>Dashbaord</NavLink></li>
        </>
    return (
        <div className='bg-[#9538E2] text-white max-w-screen-xl mt-4 rounded-t-lg mx-auto'>
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
                <div className="navbar-end flex gap-1">
                <button className="btn rounded-full text-lg border"><FaCartPlus /></button>
                <button className="btn rounded-full text-xl border"><GiSelfLove /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;