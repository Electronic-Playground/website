import React from "react";
import { teamMembers } from "../constants";
import TeamCard from "./TeamCard";

const TheTeam = () => (
    <section id="the team" className="my-8 flex flex-col items-center mt-8 mb-12">
        <div className="p-8 text-center mb-6">
            <h2 className="font-akzidenz text-5xl font-normal uppercase tracking-[0.14em] mb-8">
                meet <b className="text-primary tracking-[0.3em]">the team</b>
            </h2>
            <p className="font-akzidenz text-lg">After more than 8 years developing F2P mobile games, <br /> we have earned a lot of experience and we are ready to make a successful game.</p>
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
