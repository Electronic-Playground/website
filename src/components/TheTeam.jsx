import React from 'react';
import { teamMembers } from '../constants';
import TeamCard from './TeamCard';

const TheTeam = () =>  (
    <section id="the team" className="flex flex-col items-center my-8">
      <div className="p-8 mt-6">
        <h2 className="font-normal text-5xl uppercase font-akzidenz tracking-[0.14em]">the team</h2>
      </div>
      <div className='mt-6'>
        <div className='flex flex-wrap gap-y-10 justify-around'>
          {teamMembers.map((member, index) =>
            <div key={member.id} >
              <TeamCard member={member} />
            </div>
          )
          }
        </div>
      </div>


    </section>
  )


export default TheTeam