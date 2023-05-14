import React from "react";
import { teamMembers } from "../constants";
import TeamCard from "./TeamCard";

const TheTeam = () => (
    <section id="the team" className="my-8 flex flex-col items-center">
        <div className="mt-6 p-8">
            <h2 className="font-akzidenz text-5xl font-normal uppercase tracking-[0.14em]">
                the team
            </h2>
        </div>
        <div className="mt-6">
            <div className="flex flex-wrap justify-around gap-y-10">
                {teamMembers.map((member, index) => (
                    <div key={member.id} className="">
                        <TeamCard member={member} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TheTeam;
