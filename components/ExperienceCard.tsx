import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({ }: Props) {
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
        className='w-[100px] rounded-full xl:w-[125px] xl:h-[125px] object-cover object-center'
        src="https://media.licdn.com/dms/image/C560BAQGPlADjFE07ew/company-logo_200_200/0/1535666963430?e=2147483647&v=beta&t=rfmp_yyBZDzhOmc51Z24Ji8vCfd7jLMIpvDxpOExnjM" alt="" />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>Application Developer</h4>
        <p className='font-bold text-xl mt-1'>REJIS Commission</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-7 w-7 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
          <img className='h-7 w-7 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
          <img className='h-7 w-7 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
          <img className='h-7 w-7 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className='uppercase text-sm py-1 text-gray-300'>Started work... - Ended...</p>
        <ul className='list-disc space-y-2 ml-5 text-sm md:text-md'>
          <li>Summary points Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary points Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary points Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard