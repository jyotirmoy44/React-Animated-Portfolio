import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants= (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
    }
}
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{ opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <TbBrandNextjs className='text-7xl bg-black'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4  p-4 border-neutral-800 bg-yellow-400 cursor-grab active:cursor-grabbing'>
            <TbBrandJavascript className='text-7xl border-black text-black'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <FaNodeJs className='text-7xl text-green-500 bg-black'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <FaPhp className='text-7xl bg-purple-700 '/>
            </motion.div>


            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            </motion.div>
        
    </div>
  )
}

export default Technologies