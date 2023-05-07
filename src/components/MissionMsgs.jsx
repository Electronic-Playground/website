import React from "react";
import MissionStar from "./MissionStar";

const MissionMsgs = ({ msg }) => (
    <div className="flex grow-[2] flex-1 flex-col flex-wrap mb-8">
        <div className="flex items-center relative">
            <MissionStar />
            <h4 className="mb-4 font-semibold">{msg.title}</h4>
        </div>
        <p className="text-sm leading-6">{msg.description}</p>
    </div>
);

export default MissionMsgs;
