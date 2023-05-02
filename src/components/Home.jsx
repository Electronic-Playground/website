import React from 'react'
import Button from './Button'

const Home = () =>  (
    <section id="home" className="flex  relative bg-home-pattern px-2 md:px-16 h-[591px] max-w-[1280px] rounded-b-2xl overflow-hidden">
      <div className="flex flex-col justify-evenly">
        <div>
          <h1 className='text-5xl font-akzidenz-Bold font-[100] uppercase text-white'>electronic playground games</h1>
          <Button>CONTACT</Button>
        </div>
        <div>
          <p>Some Text Here.....Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam temporibus, dolor cumque deserunt totam non!</p>
        </div>
      </div>
      <div className='absolute -bottom-12 -right-20'>
        <img src="../../assets/Fillers/BlokedChain-removedBg.png" alt="blockChain" className='w-[900px]'/>
      </div>

    
    </section>
  )


export default Home