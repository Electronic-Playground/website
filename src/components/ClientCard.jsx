import React from "react";

const ClientCard = ({ client, index }) => (
    <div
        className={`cardTransition flex w-[200px] items-center overflow-hidden rounded-2xl outline outline-2 outline-primaryBorder hover:-translate-y-3 ${
            index === 0 && "w-[128px]"
        } hover:shadow-lg hover:shadow-primaryStar`}
    >
        <img
            src={client.image}
            alt={client.name}
            className={`text-bg-main-color `}
        />
    </div>
);

export default ClientCard;
