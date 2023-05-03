import React from "react";

const Button = ({ children }) => (
    <button className="mt-10 rounded bg-primary px-10 py-3 font-akzidenz text-2xl text-white hover:border hover:border-white hover:text-bg-main-color hover:opacity-70">
        {children}
    </button>
);

export default Button;
