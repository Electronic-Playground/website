import React from 'react'
import { Navbar } from './components'

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className='flex justify-center items-center sm:px-16'>
      <div className='w-full sm:max-w-[1280px] shadow-sm shadow-bg-main-color rounded-b-2xl'>
        <Navbar />
        <h2>HOME</h2>
      </div>
    </div>

    <div className='flex justify-center px-6 sm:px-16'>
      <div className='w-full sm:max-w-[1280px] font-akzidenz-Ext font-[900]'>
        GAMES
        EXPERIENCE
        The team
        MISSION
        CONTACT
      
      </div>
    </div>

  </div>
  )


export default App