import React from "react";

const FloatButton = () => {
    return (
        <button className="fixed bottom-3 left-3 z-40 md:hidden unset">
            <a href="#navbar" className="">
                <img
                    src="../assets/Icons/flecha-hacia-abajo.png"
                    alt="Up Arrow"
                    className=""
                />
            </a>
        </button>
    );
};

export default FloatButton;
