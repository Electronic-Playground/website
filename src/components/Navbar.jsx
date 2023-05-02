import React from "react";
import { navLinks } from "../constants";

const Navbar = () => (
    <nav className="flex flex-col md:flex-row justify-between bg-bg-main-color px-2 md:px-16 pt-2 md:pt-4">
        <div>
            <img
                src="../public/assets/Logos/EP-Logo-March-2023-03.png"
                alt="EP Navbar Logo"
                className="h-auto w-[120px]"
            />
        </div>

        <div className="mt-2 md:mt-0">
            <ul className="flex flex-1 font-akzidenz font-semibold text-base uppercase flex-wrap">
                {navLinks.map((link, index) => (
                    <li
                        key={link.id}
                        className={`cursor-pointer text-white hover:text-primary transition-all ${index === navLinks.length - 1 ? 'mr-0' : 'mr-9' } mt-2 md:mt-0`}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    
                    </li>
                ))}
            </ul>
        </div>
        <hr className="h-[1px] w-[95%] m-auto border-white md:hidden my-4"/>
    </nav>
);

export default Navbar;
