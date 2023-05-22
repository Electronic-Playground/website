import React from "react";

const TeamCard = ({ member }) => (
    <div className=" team-box flex w-[352px] flex-col items-start rounded-xl border-2 border-primaryStar bg-slate-50 px-6 py-8 hover:-translate-y-3 hover:rounded-xl hover:shadow-2xl cardTransition">
        <div className="relative rounded-xl  outline outline-offset-1 outline-1 outline-gray-600">
            <img
                src={member.photo}
                alt={member.name}
                className="relative z-10 h-[120px] w-[90px] rounded-xl object-cover"
            />
            <div className="team-shadow ml-[6px] h-[3px] w-[75px] border bg-slate-500" />
        </div>
        <h3 className="pb-4 pt-14 font-akzidenz text-2xl font-bold ">
            {member.name}
        </h3>
        <p className="font-akzidenz font-normal">{member.description}</p>
    </div>
);

export default TeamCard;
