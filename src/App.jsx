import React from 'react'
import { Home, Navbar } from './components'

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className='flex justify-center items-center sm:px-16'>
      <div className='w-full sm:max-w-[1280px] rounded-b-2xl home-shadow'>
        <Navbar />
        <Home />
      </div>
    </div>

    {/* <div className='flex justify-center px-6 sm:px-16'>
      <div className='w-full sm:max-w-[1280px] font-akzidenz-Ext font-[900]'>
        GAMES
        EXPERIENCE
        The team
        MISSION
        CONTACT
      
      </div>
    </div> */}

  </div>
  )


export default App