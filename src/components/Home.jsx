import React from 'react'
import Button from './Button'

const Home = () =>  (
    <section id="home" className="flex  relative bg-home-pattern px-2 md:px-16 h-[591px] max-w-[1280px] rounded-b-2xl overflow-hidden">
      <div className="relative z-10 flex flex-col justify-evenly w-full  xs:w-[80%] ss:w-[80%] sm:w-[55%] md:w-[45%]">
        <div>
          <h1 className='text-5xl font-akzidenz-LgExt font-[300] uppercase text-white leading-[70px]'>electronic playground games</h1>
          <Button>CONTACT US</Button>
        </div>
        <div>
          <p className="text-[18px] text-white font-akzidenz-LgExt">Some Text Here.....Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam temporibus, dolor cumque deserunt totam non!</p>
        </div>
      </div>
      <div className='absolute z-0 -bottom-16 -right-28 hidden md:block'>
        <img src="../../assets/Fillers/BlokedChain-removedBg.png" alt="blockChain" className='w-[1000px]'/>
      </div>

    
    </section>
  )


export default Home