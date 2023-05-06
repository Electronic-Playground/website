import React from "react";
import GameCard from "./GameCard";
import { games } from "../constants";

const Games = () => (
    <section
        id="Games"
        className="relative my-12 flex flex-1 items-center justify-center lg:justify-end"
    >
        <div className="cell-box-shadow  cellphoneImg absolute border-2 rounded-2xl -left-20 top-0 hidden max-w-[455px] lg:flex">
            <img
                src="../../assets/Icons/cellphone-01.png"
                alt="cellphone"
                className="cell-box-shadow"
            />
        </div>
        <div className="flex flex-col justify-evenly lg:w-[70%] slg:w-[56.7%]  ">
            <div className="">
                <h2 className=" my-12 text-center text-bg-main-color font-akzidenz-Ext font-bold text-5xl tracking-[0.3em]">
                    GAMES
                </h2>
            </div>
            <div className="flex flex-wrap justify-center sm:gap-3 md:gap-6 lg:justify-end">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        className={`game-box-shadow mb-5 sm:mb-3 ${ index === games.length - 1 ? "mb-0" :"mb-7 sm:mb-8" }`} 
                    >
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Games;
