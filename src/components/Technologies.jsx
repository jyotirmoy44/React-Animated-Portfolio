import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from 'react-icons/di';
import { DiPostgresql } from 'react-icons/di';
import { DiAws } from 'react-icons/di';
import { DiLinux } from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaJenkins } from 'react-icons/fa';
import { DiDocker } from 'react-icons/di';
import { SiTerraform } from 'react-icons/si';
import { SiGrafana } from 'react-icons/si';
import { SiPrometheus } from 'react-icons/si';
import { SiSonarqube } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { DiGit } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';


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
      variants={iconVariants(3)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <FaGithub 
        className="text-7xl text-white bg-gradient-to-r from-[#181717] to-[#6e5494]" // GitHub colors for gradient background
      />
    </motion.div>


            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <FaPhp className='text-7xl bg-purple-700 '/>
            </motion.div>

            <motion.div 
      variants={iconVariants(2)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <DiGit 
        className="text-7xl text-white bg-gradient-to-r from-[#F34F29] to-[#F87854]" // Git colors for gradient background
      />
    </motion.div>


            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
      variants={iconVariants(2.5)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <DiPython 
        className="text-7xl text-white bg-gradient-to-r from-[#306998] to-[#FFD43B]" // Icon styling with gradient background
      />
    </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <DiMysql className='text-7xl text-white-500 bg-gradient-to-r from-[#00758f] to-[#f29111]'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <DiPostgresql className='text-7xl text-white bg-gradient-to-r from-[#336791] to-[#a0c4ff]'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <DiAws className='text-7xl text-white bg-gradient-to-r from-[#FF9900] to-[#FFB84D]'/>
      
            </motion.div>

            <motion.div 
      variants={iconVariants(5)}
      initial="initial"
      animate="animate"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing"
    >
      <FaJenkins 
        className="text-7xl text-white bg-gradient-to-r from-[#FF9900] to-[#FFB84D]" 
      />
    </motion.div>

    <motion.div 
      variants={iconVariants(2.5)}  // Custom animation variants
      initial="initial"
      animate="animate"
      drag  // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}  // Constrains the drag area
      dragElastic={0.4}  // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing"  // Tailwind CSS styling
    >
      <DiDocker 
        className="text-7xl text-white bg-gradient-to-r from-[#00B5E2] to-[#1C8B8B]"  // Icon styling with gradient background
      />
    </motion.div>

    <motion.div 
      variants={iconVariants(6)}  // Custom animation variants
      initial="initial"
      animate="animate"
      drag  // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}  // Constrains the drag area
      dragElastic={0.4}  // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing"  // Tailwind CSS styling
    >
      <SiTerraform 
        className="text-7xl text-white bg-gradient-to-r from-[#5C4EE5] to-[#8C70F6]"  // Icon styling with gradient background
      />
    </motion.div>
          
    <motion.div 
      variants={iconVariants(1)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <SiGrafana 
        className="text-7xl text-white bg-gradient-to-r from-[#F46800] via-[#FFAB00] to-[#FFF5DD]" // Icon styling with gradient background
      />
    </motion.div>

    <motion.div 
      variants={iconVariants(4.5)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <SiPrometheus 
        className="text-7xl text-white bg-gradient-to-r from-[#E6522C] to-[#F78B56]" // Icon styling with gradient background
      />
    </motion.div>

    <motion.div 
      variants={iconVariants(3)} // Custom animation variants
      initial="initial"
      animate="animate"
      drag // Enables drag functionality
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains the drag area
      dragElastic={0.4} // Adds elasticity to the drag
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing" // Tailwind CSS styling
    >
      <SiSonarqube 
        className="text-7xl text-white bg-gradient-to-r from-[#4E9BCD] to-[#78C2F3]" // Icon styling with gradient background
      />
    </motion.div>
    

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            className='rounded-2xl border-4 border-neutral-800 p-4 cursor-grab active:cursor-grabbing'>
            <DiLinux className='text-7xl text-white bg-gradient-to-r from-[#009e4a] to-[#f5f5f5]'/>
            </motion.div>
            </motion.div>
        
    </div>
  )
}

export default Technologies