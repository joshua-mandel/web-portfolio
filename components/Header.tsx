import React from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

type Props = {};

function Header({ }: Props) {
  
  return (
    <header
      className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20
      xl:items-center"
    >
      <motion.div
      initial={{
        x:-500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <Link href='https://www.linkedin.com/in/joshua-mandel-ab382919a/' target="_blank">
          <FaLinkedin className='mr-3 text-xl md:text-2xl text-gray-300' />
        </Link>
        <Link href='https://www.facebook.com/coolwheezy' target="_blank">
          <FaFacebookSquare className='mr-3 text-xl md:text-2xl text-gray-300' />
        </Link>
        <Link href='https://github.com/joshua-mandel' target="_blank">
          <FaGithubSquare className='mr-3 text-xl md:text-2xl text-gray-300'  target="_blank"/>
        </Link>
        
      </motion.div>

      <Link href='#contact'>
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <GrMail className="cursor-pointer mr-2 text-xl md:text-2xl" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
      </Link>
    </header>
  );
}

export default Header;
