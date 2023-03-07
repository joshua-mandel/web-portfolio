/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:true }}
        className='w-[100px] h-[100px] rounded-full xl:w-[125px] xl:h-[125px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} alt="" />

      <div className='px-0 md:px-10'>
        <h4 className='md:text-2xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold md:text-xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies?.map((technology) => (
            <img key={technology._id} className='h-7 w-7 rounded-full' src={urlFor(technology.image).url()} alt={technology.title} />
          ))}
          
          
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className='uppercase text-sm py-1 text-gray-300'>{experience.dateStarted} - {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}</p>
        <ul className='list-disc space-y-2 ml-5 text-xs md:text-md overflow-y-scroll h-24 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard