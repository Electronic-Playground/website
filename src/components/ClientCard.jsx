import React from "react";

const ClientCard = ({ client, index }) => (
    <div className={`cardTransition flex items-center rounded-xl w-[200px] hover:-translate-y-3 overflow-hidden ${index===0 && 'w-[128px]'} hover:shadow-2xl`}>
        <img
            src={client.image}
            alt={client.name}
            className={`cardTransition rounded-xl text-bg-main-color `}
        />
    </div>
);

export default ClientCard;
