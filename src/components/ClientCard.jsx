import React from "react";

const ClientCard = ({ client, index }) => (
    <div className={`cardTransition flex items-center rounded-2xl w-[200px] outline outline-primary outline-2 hover:-translate-y-3 overflow-hidden ${index===0 && 'w-[128px]'} hover:shadow-lg hover:shadow-primary`}>
        <img
            src={client.image}
            alt={client.name}
            className={`cardTransition  text-bg-main-color `}
        />
    </div>
);

export default ClientCard;
