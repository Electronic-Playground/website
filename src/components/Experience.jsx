import React from "react";
import { clients } from "../constants";
import ClientCard from "./ClientCard";

const Experience = () => (
    <section id="experience" className="mt-16">
        <div className="flex flex-col items-center justify-between px-6">
            <div className="py-6 font-akzidenz-Ext text-5xl font-normal uppercase text-bg-main-color tracking-[0.14em]">
                <h2>We Work Whit...</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 py-8 ">
                {clients.map((client, index) => (
                    <div key={client.id} className={`${index === 0 && ''}`}>
                        <ClientCard client={client} index={index} />
                    </div>
                ))}
            </div>
            <div className="w-[80%] py-6 text-center font-akzidenz text-base font-normal text-bg-main-color sm:w-[70%] lg:w-[40%]">
                <p>
                    Some text here...Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Veritatis, quia quam quidem dolor
                    voluptatem, libero iusto corporis nihil eius omnis officia
                    maxime nobis a? Reiciendis repellendus sed pariatur odit ea.
                </p>
            </div>
        </div>
    </section>
);

export default Experience;
