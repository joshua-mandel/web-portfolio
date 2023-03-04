import React from 'react'
import { motion } from "framer-motion"

type Props = {}

/*https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/120125428_10159011487269267_4097700986391026110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=o8hu2afDRjIAX9F26Oz&_nc_ht=scontent-ord5-2.xx&oh=00_AfDj2tl0z4EVJbzxrWZ8N2RK2hryGyqe7ml4Xn140h5ybw&oe=642A1B98*/

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-5'>About</h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/120125428_10159011487269267_4097700986391026110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=o8hu2afDRjIAX9F26Oz&_nc_ht=scontent-ord5-2.xx&oh=00_AfDj2tl0z4EVJbzxrWZ8N2RK2hryGyqe7ml4Xn140h5ybw&oe=642A1B98"
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' />

      <div className='space-y-10 md:space-y-5 px-0 md:px-10'>
        <h4 className='lg:text-4xl text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='lg:text-base md:text-[0.8rem] text-[0.7rem]'>Hi, I'm Josh, a software developer with a passion for creating elegant and efficient solutions to complex problems. When I'm not coding, you can find me hitting the slopes on my snowboard or dominating the pickleball court with friends. I also enjoy curling up with a good book or catching up on the latest movies. My curiosity and love for learning drive me to constantly improve my skills and explore new technologies. I'm excited to share my portfolio with you and showcase my diverse range of projects and experiences.</p>
      </div>
    </motion.div>
  )
}