import React from 'react';
import Logo from '../assets/logo.jpeg';
import User from '../assets/user.jpeg';

const Navbar = () => {
    return (
        <nav className="h-20 w-full flex justify-between items-center">

            <div className="flex items-center align-middle justify-between h-[40px] w-[90%] m-auto">

                <ul className="flex space-x-8 text-center items-center " >
                    <div className="flex items-center">
                        <img src={Logo} className="h-[40px] w-[40px]" alt="Logo"/>
                        <a href="#" className="text-[#475467] hover:text-[#3c4450] font-bold">Untitled UI</a>
                    </div>
                    <li><a href="#" className="text-[#475467] hover:text-[#3c4450]">Home</a></li>
                    <li><a href="#" className="text-[#475467] hover:text-[#3c4450]">Products</a>
                        <button></button>
                    </li>
                    <li><a href="#" className="text-[#475467] hover:text-[#3c4450]">Resources</a>
                        <button></button>
                    </li>
                    <li><a href="#" className="text-[#475467] hover:text-[#3c4450]">Pricing</a></li>
                </ul>
                <img src={User} className="rounded-full h-[40px] w-[40px]" alt="User"/>
            </div>
        </nav>
    );
};

export default Navbar;