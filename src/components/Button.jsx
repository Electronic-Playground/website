import React from "react";

const Button = ({ children }) => (
    <button className="mt-10 rounded bg-primary px-10 py-3 font-akzidenz text-2xl text-white hover:outline hover:outline-1 hover:outline-white hover:text-bg-main-color hover:opacity-80">
        {children}
    </button>
);

export default Button;
