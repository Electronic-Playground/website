import React from 'react'
import { Games, Home, Navbar } from './components'

const App = () => (
  <div className='w-full overflow-hidden bg-slate-100'>
    <div className='flex justify-center items-center sm:px-16'>
      <div className='w-full sm:max-w-[1280px] rounded-b-2xl home-shadow'>
        <Navbar />
        <Home />
      </div>
    </div>

    <div className='flex justify-center py-10 px-6 sm:px-16 '>
      <div className='w-full sm:max-w-[1280px]'>
        <Games />
      </div>
    </div>

      <div className='w-full sm:max-w-[1280px]'>
        EXPERIENCE
        The team
        MISSION
        CONTACT
      
      </div>
  </div>
  )


export default App