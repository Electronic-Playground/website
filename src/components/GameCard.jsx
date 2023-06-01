import React from "react";

const GameCard = ({ game }) => (
    <div className="bg-gamecard flex w-[350px] h-[250px] cursor-pointer flex-col rounded-xl px-6 py-3 cardTransition bg-slate-50  hover:-translate-y-3 hover:shadow-xl outline-primaryStar outline outline-1">
        <div className="mb-4 flex m-auto gap-x-8 items-center">
            <img src={game.logo} alt={game.title} className="w-[60px] rounded-full outline outline-2 outline-offset-1 outline-bg-main-color" />
            <h3 className="font-akzidenz text-lg font-bold uppercase text-bg-main-color">
                {game.title}
            </h3>
        </div>
        <div className="my-3">
            <p className="mb-4 font-akzidenz text-center text-base font-normal text-bg-main-color ">
                {game.description}
            </p>
        </div>
        <div className="m-auto mb-1 flex gap-2">
            {
                game.ios != '' &&
                <a href={game.ios} target="_blank">
                    <img src="../../assets/Icons/apple.svg" alt="Ios download" />
                </a>
            }
            {
                game.googleplay != '' &&
                <a href={game.googleplay} target="_blank">
                    <img
                        src="../../assets/Icons/google.svg"
                        alt="Google Play download"
                    />
                </a>
            }
        </div>
    </div>
);

export default GameCard;
