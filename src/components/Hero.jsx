import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/frontpic.png"
import {motion} from 'framer-motion';

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-8xl'>
                Jyotirmoy Sharma</motion.h1>
            <motion.span 
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
        DevOps Engineer</motion.span>

                <motion.p 
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}</motion.p>
        </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 lg:p-8">
  <div className="flex justify-center">
    <motion.img
      initial={{ x: 100, opacity: 0 }} // Animation starts off-screen with opacity 0
      animate={{ x: 0, opacity: 1 }}  // Moves into view with full opacity
      transition={{ duration: 1, delay: 1.2 }} // Animation timing and delay
      src={profilePic} // Profile image source
      alt="Profile Picture" // Accessible alt text
      className="rounded-full shadow-lg w-40 h-50 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover border-4 border-neutral-800"
      />
  </div>
</div>
        
        </div>

    </div>
  )
}

export default Hero

