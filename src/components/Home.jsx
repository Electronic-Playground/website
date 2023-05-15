import React from "react";
import Button from "./Button";

const Home = () => (
    <section
        id="home"
        className="relative  flex h-[591px] max-w-[1280px] overflow-hidden rounded-b-2xl bg-home-pattern px-2 md:px-16"
    >
        <div className="relative z-10 flex w-full flex-col justify-evenly  xs:w-[80%] ss:w-[80%] sm:w-[55%] md:w-[45%]">
            <div>
                <h1 className="font-akzidenz-LgExt text-5xl font-[300] uppercase leading-[70px] text-white">
                    electronic playground
                </h1>
                <Button>CONTACT US</Button>
            </div>
            <div>
                <p className="font-akzidenz-LgExt text-[18px] text-white">
                    Some Text Here.....Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dicta, aliquam temporibus, dolor cumque
                    deserunt totam non!
                </p>
            </div>
        </div>
        <div className="absolute -bottom-16 -right-28 z-0 hidden md:block">
            <img
                src="../../assets/Fillers/BlokedChain-removedBg.png"
                alt="blockChain"
                className="w-[1000px]"
            />
        </div>
    </section>
);

export default Home;
