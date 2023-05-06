import React from "react";

const GameCard = ({ game }) => (
    <div className="bg-gamecard flex w-[350px] cursor-pointer flex-col rounded-xl bg-white px-6 py-3">
        <div className="mb-4 flex gap-x-4">
            <img src={game.logo} alt="#" />
            <h3 className="font-akzidenz text-lg font-bold uppercase text-bg-main-color">
                {game.title}
            </h3>
        </div>
        <div>
            <p className="mb-4 font-akzidenz text-base font-normal text-bg-main-color ">
                {game.description}
            </p>
        </div>
        <div className="m-auto mb-1 flex gap-2">
            <a href="http://">
                <img src="../../assets/Icons/apple.svg" alt="Ios download" />
            </a>
            <a href="http://">
                <img
                    src="../../assets/Icons/google.svg"
                    alt="Google Play download"
                />
            </a>
        </div>
    </div>
);

export default GameCard;
