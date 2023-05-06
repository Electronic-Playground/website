import React from "react";
import GameCard from "./GameCard";
import { games } from "../constants";

const Games = () => (
    <section id="Games" className="my-20 flex justify-center lg:justify-end items-center flex-1 relative">
        <div className="cell-box-shadow  hidden absolute top-0 -left-28 cellphoneImg lg:flex max-w-[450px]">
            <img
                src="../../assets/Icons/cellphone-01.png"
                alt="cellphone"
                className="cell-box-shadow"
            />
        </div>
        <div className="flex flex-col items-center justify-evenly lg:w-[70%] slg:w-[70%]  ">
            <h2 className=" my-12 text-center font-akzidenz-Ext text-4xl tracking-[0.6em]">
                OUR GAMES
            </h2>
            <div className="flex flex-wrap justify-center sm:gap-3 md:gap-6">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="game-box-shadow mb-5 sm:mb-3 "
                    >
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Games;
