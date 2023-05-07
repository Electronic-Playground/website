import React from 'react'

const TeamCard = ({member}) => (
    <div className=" border-2 rounded-xl border-primaryOpacity flex flex-col items-start px-6 py-8 hover:shadow-2xl w-[352px] hover:rounded-xl transition-all hover:-translate-y-2 team-box bg-slate-50">
        <div className="relative border-2 rounded-xl border-primaryOpacity">
            <img src={member.photo} alt={member.name} className='w-[90px] h-[120px] object-cover rounded-xl relative z-10' />
            <div className= 'bg-slate-500 border team-shadow w-[75px] h-[3px] ml-[6px]'/>
        </div>
        <h3 className="text-2xl font-akzidenz font-bold pt-14 pb-4 ">{member.name}</h3>
        <p className="font-akzidenz font-normal">{member.description}</p>
        
    </div>
  )


export default TeamCard