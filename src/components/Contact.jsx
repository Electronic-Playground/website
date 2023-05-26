import React, { useState } from "react";
import 'animate.css';



const Contact = () => {

    const [emailClick, setEmailClick] = useState(false);

    return(
    <section id="contact" className="mt-8 mb-12 font-akzidenz text-slate-50">
        <div className="flex flex-col  xs:flex-row items-center xs:gap-x-12 sm:gap-x-32">
            <button className="contact  relative rounded-lg px-6 py-3 sm:px-12 sm:py-3 font-semibold tracking-widest outline outline-2 outline-primary transition-all hover:translate-y-3 xs:hover:translate-x-3 xs:hover:translate-y-0 mb-12 xs:mb-0 hover:bg-primary"
            onClick={() => setEmailClick(!emailClick)}>
                CONTACT US
                <span>
                    <img
                        src="../../assets/Icons/descarga-arrow.png"
                        alt="arrow"
                        className="absolute hidden xs:inline-block xs:-right-5 xs:top-[8px] sm:-right-7 sm:top-[1px] w-[32px] sm:w-[42px] xs:-rotate-90 top-10  transition-all"
                    />
                    <img
                        src="../../assets/Icons/descarga-arrow.png"
                        alt="arrow"
                        className="absolute xs:hidden left-16 -bottom-6 w-[32px] transition-all"
                    />
                </span>
            </button>
            {
                emailClick &&
                <p className="xs:text-mg font-semibold sm:text-xl transition-all animate__animated animate__fadeInRight">
                    info@electronicplayground.com
                </p>

            }
        </div>
    </section>
)};

export default Contact;
