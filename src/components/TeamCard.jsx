import React from "react";

const TeamCard = ({ member }) => (
    <div className=" team-box cardTransition flex w-[390px] flex-col items-start rounded-xl border-2 border-primaryStar bg-slate-50 px-6 py-8 hover:-translate-y-3 hover:rounded-xl hover:shadow-2xl h-[390px]">
        <img src="../assets/Logos/EP-Logo-March-2023-01.png" alt="EP Logo" className="absolute w-[130px] translate-x-[165px] opacity-[0.13] translate-y-[20px]"  />
        <div className="relative rounded-xl  outline outline-1 outline-offset-1 outline-gray-600">
            <img
                src={member.photo}
                alt={member.name}
                className="relative z-10 h-[140px] w-[105px] rounded-xl object-cover"
            />
            <div className="team-shadow ml-[3px] h-[3px] w-[100px] border bg-slate-500" />
        </div>
        <div className="mt-12">
            <h3 className="font-akzidenz mt-2 text-3xl font-extrabold">
                {member.name}
            </h3>
            <p className="mt-4 font-akzidenz font-[800] text-sm mb-1">{member.description}</p>
            <p className="font-akzidenz font-[600] text-sm">{member.experience}</p>
            <p className="font-akzidenz font-[600] text-sm">{member.gamesExp}</p>
        </div>
    </div>
);

export default TeamCard;
