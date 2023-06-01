import React from "react";
import { clients } from "../constants";
import ClientCard from "./ClientCard";

const Experience = () => (
    <section id="experience" className="mt-8 mb-12">
        <div className="flex flex-col items-center justify-between px-6">
            <div className="py-6 font-akzidenz-Ext text-5xl font-normal uppercase text-center text-bg-main-color tracking-[0.14em]">
                <h2>our experience</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-11  py-8 ">
                {clients.map((client, index) => (
                    <div key={client.id} className={`${index === 0 && ''}`}>
                        <ClientCard client={client} index={index} />
                    </div>
                ))}
            </div>
            <div className="w-[80%] py-6 text-center font-akzidenz text-lg font-normal text-bg-main-color sm:w-[70%] lg:w-[40%]">
                <p>
                Drawing from our Past, Empowering our Future: Leveraging our Extensive Client Experience for Next-Level Projects.
                </p>
            </div>
        </div>
    </section>
);

export default Experience;
