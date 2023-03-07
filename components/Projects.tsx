import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

type Props = {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className='absolute top-20 uppercase tracking-[15px] text-gray-500 text-xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {projects?.map((project, i) => (
            <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 xl:p-64 h-screen">
              <Link className='cursor-pointer' href={project.linkToBuild} target='_blank'>
              <motion.img
              className='md:w-[600px] hover:grayscale'
              initial={{
                y:-300,
                opacity:0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title} />
              </Link>

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-2xl md:text-3xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>
                <div className='flex flex-wrap items-center space-x-2 justify-center'>
                  {project?.technologies.map(technology => (
                    <img className='h-[50px] w-[50px] md:h-[65px] md:w-[65px] rounded-full' key={technology._id} src={urlFor(technology.image).url()} alt={technology.title} />
                  ))}
                </div>

                

                <p className='text-xs md:text-md xl:text-xl text-center md:text-left'>
                  {project?.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}