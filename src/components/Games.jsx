import React, { useState } from "react";
import GameCard from "./GameCard";
import { games } from "../constants";

const Games = () => {
    const [highlightGame, setHighlightGame] = useState(null);

    const handleHover = (id) => {
        const game = games.find((game) => game.id === id);
        if (game) {
            setHighlightGame(game);
        }
    };

    return (
        <section
            id="games"
            className="relative my-12 flex flex-1 items-center justify-center lg:justify-end"
        >
            {highlightGame.title === "Dawnblade" ||
            highlightGame.title === "The Otherside" ? (
                <div className="cell-box-shadow  cellphoneImg absolute transition-all -left-28gi top-44 hidden max-w-[455px] rotate-90 rounded-2xl border-2 lg:flex">
                    <img
                        src="../../assets/Icons/cellphone-01.png"
                        alt="cellphone"
                        className="cell-box-shadow"
                    />
                    {highlightGame && (
                        <img
                            src={highlightGame ? highlightGame.image : null}
                            alt="random"
                            className={`absolute left-8 top-7 rounded-3xl`}
                        />
                    )}
                </div>
            ) : (
                <div className="cell-box-shadow  cellphoneImg absolute transition-all -left-20 top-44 hidden max-w-[455px] rounded-2xl border-2 lg:flex">
                    <img
                        src="../../assets/Icons/cellphone-01.png"
                        alt="cellphone"
                        className="cell-box-shadow"
                    />
                    {highlightGame && (
                        <img
                            src={highlightGame ? highlightGame.image : null}
                            alt="random"
                            className={`absolute left-8 top-7 rounded-3xl`}
                        />
                    )}
                </div>
            )}
            <div className="flex flex-col justify-evenly lg:w-[70%] slg:w-[56.7%]  ">
                <div className="">
                    <h2 className=" my-12 text-center font-akzidenz-Ext text-5xl font-normal tracking-[0.14em] text-bg-main-color">
                        GAMES
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center sm:gap-3 md:gap-6 lg:justify-end">
                    {games.map((game, index) => (
                        <div
                            key={game.id}
                            className={`game-box-shadow mb-5 sm:mb-3 ${
                                index === games.length - 1
                                    ? "mb-0"
                                    : "mb-7 sm:mb-8"
                            }`}
                            onMouseOver={() => handleHover(game.id)}
                        >
                            <GameCard game={game} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Games;



{/* <div className="cell-box-shadow  cellphoneImg absolute -left-20 top-44 hidden max-w-[455px] rounded-2xl border-2 lg:flex">
                <img
                    src="../../assets/Icons/cellphone-01.png"
                    alt="cellphone"
                    className="cell-box-shadow"
                />
                    {highlightGame && (
                        <img
                            src={highlightGame ? highlightGame.image : null}
                            alt="random"
                            className={`absolute left-8 top-7 rounded-3xl ${
                                highlightGame.title === "Dawnblade" ||
                                highlightGame.title === "The Otherside"
                                    ? "horizontal-img"
                                    : ""
                            }`}
                        />
                    )}
                </div> */}