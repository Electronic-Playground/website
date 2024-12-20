import React from "react";
import { navLinks } from "../constants";

const Button = ({ children }) => (
    <button className="transition-all w-[250px] rounded-lg bg-primary px-10 py-3 font-akzidenz tracking-wide text-2xl text-white hover:outline hover:outline-1 hover:outline-white hover:text-bg-main-color hover:opacity-80">
        <a href={`#contact`}>{children}</a>
        
    </button>
);

export default Button;
