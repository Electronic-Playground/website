import React from 'react'

const ClientCard = ({client}) => (
    <div className="border border-gray-200 py-3 px-8 rounded-xl transition-all bg-slate-50 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-md">
        <div className="flex flex-col items-center">
            <img src={client.image} alt="#" />
            <h6 className='text-bg-main-color font-akzidenz'>{client.name}</h6>
        </div>
    </div>
  )


export default ClientCard