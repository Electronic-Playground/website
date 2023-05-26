import React from "react";
import Button from "./Button";

const Home = () => (
    <section
        id="home"
        className="relative  mb-12 flex h-[591px] max-w-[1280px] overflow-hidden rounded-b-2xl bg-home-pattern px-2 md:px-16"
    >
        <div className="relative z-10 flex w-full flex-col justify-evenly xs:w-[80%] ss:w-[80%] sm:w-[55%] md:w-[45%]">
            <div>
                <h1 className="font-akzidenz text-5xl font-[800] uppercase leading-[60px] text-white md:tracking-widest">
                    electronic playground
                </h1>
            </div>
            <Button>CONTACT US</Button>
            <div>
                <p className="font-akzidenz-LgExt text-[18px] text-white">
                    Some Text Here.....Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dicta, aliquam temporibus, dolor cumque
                    deserunt totam non!
                </p>
            </div>
        </div>
        <div className="absolute -bottom-28 right-12 z-[10] hidden md:block">
            <img
                src="../../assets/Fillers/day95-app-development.svg"
                alt="blockChain"
                className="w-[600px]"
            />
        </div>
    </section>
);

export default Home;
