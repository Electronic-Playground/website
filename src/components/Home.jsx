import React from "react";
import Button from "./Button";

const Home = () => (
    <section
        id="home"
        className="relative  mb-12 flex h-[591px] max-w-[1280px] overflow-hidden rounded-b-2xl bg-home-pattern px-2 md:px-16"
    >
        <div className="relative z-20 flex w-full flex-col justify-evenly xs:w-[80%] ss:w-[80%] sm:w-[55%] md:w-[45%]">
            <div>
                <h1 className="font-akzidenz text-5xl font-[800] uppercase leading-[60px] text-white md:tracking-widest">
                    electronic playground
                </h1>
            </div>
            <Button>CONTACT US</Button>
            <div>
                <p className="font-akzidenz-LgExt text-[18px] text-white">
                    We are a leading mobile game development studio committed to
                    delivering captivating and immersive gaming experiences. Our
                    team of talented developers, designers, and artists is
                    dedicated to creating innovative and high-quality games that
                    captivate players worldwide.
                </p>
            </div>
        </div>
        <div className="absolute bottom-[58px] right-[58px] z-[10] hidden md:block">
            <img
                src="../../assets/Fillers/DefinitiveImage.png"
                alt="Gaming Desing"
                className="w-[470px]"
            />
        </div>
    </section>
);

export default Home;
