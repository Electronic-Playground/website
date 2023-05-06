import React from 'react'

const ClientCard = ({client}) => (
    <div className="border border-gray-200 py-3 px-8 rounded-xl">
        <div className="flex flex-col items-center">
            <img src={client.image} alt="#" />
            <h6>{client.name}</h6>
        </div>
    </div>
  )


export default ClientCard