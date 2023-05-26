import React from 'react';
import { missionMsg } from '../constants';
import MissionMsgs from './MissionMsgs';

const Mission = () => (
    <section id="mission" className="text-slate-50 pt-8 mb-12 font-akzidenz flex flex-col px-4">
      <div>
        <h2 className="mb-16 text-5xl uppercase tracking-[0.14em]">mission</h2>
      </div>
      <div className="flex flex-1 flex-wrap gap-x-5 justify-between">
        {
          missionMsg.map((msg, index) =>
            <div key={msg.id} className='md:w-[45%]'>
              <MissionMsgs msg={msg}/>
            </div>
          )
        }
      </div>

    </section>
  )


export default Mission