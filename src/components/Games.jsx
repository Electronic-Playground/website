import React from "react";
import GameCard from "./GameCard";
import { games } from "../constants";

const Games = () => (
    <section id="Games" className="my-16 flex justify-between">
        <div>
            <img src="" alt="" />
        </div>
        <div className="flex flex-col items-end w-[57%]">
            <h2 className= "mb-12 self-center ">OUR GAMES</h2>
            <div className="flex  flex-wrap justify-end gap-12">
                {games.map((game) => (
                    <div key={game.id} className="game-box-shadow gap-4">
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Games;
