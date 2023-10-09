import React from "react";

const ClientCard = ({ client, index }) => (
    <div
        className={`cardTransition flex w-[210px] items-center overflow-hidden rounded-2xl outline outline-2 outline-primaryBorder hover:-translate-y-3 hover:shadow-lg hover:shadow-primaryStar bg-black ${index === 4 && 'h-[116px]'} ${index === 5 && 'h-[116px]'} ${index === 0 && 'h-[116px]'} ${index === 6 && 'h-[116px]'}`}
    >
        <img
            src={client.image}
            alt={client.name}
            className={` text-bg-main-color`}
        />
    </div>
);

export default ClientCard;
