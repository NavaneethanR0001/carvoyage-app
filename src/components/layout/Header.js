"use client";


import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import{motion} from "framer-motion";

const Header = () => {
  return (
    <header>
     <motion.div  initial={{y:-100, opacity:0}} animate={{ y:  0, opacity:1 }}
  transition={{  duration: 1}} className="flex items-center justify-between">
    <Link className="text-primary font-semibold gap-4  items-center flex text-2xl" href={'/'}>
    <Image
            src="/clo.png"
            alt='logo'
            width={170}
            height={42}
            className=' w-[70px] h-[49px] object-contain'
          />
          <p className='text-3xl text-primary'>𝒞𝒶𝓇𝓈𝓈</p>      
            </Link>

      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      
        <Link className="hidden md:block" href={'/'}>Home</Link>
        <Link className="hidden md:block" href={'/menu'}>Menu</Link>
        <Link className="hidden md:block" href={'/#about'}>About</Link>
        <Link className="hidden md:block" href={'/#contact'}>Contact</Link>
        <Link className="bg-primary text-white px-6 py-2 rounded-full" href={'/#contact'}>𝕽𝖆𝖈𝖎𝖓𝖌</Link>

      </nav>
   
      
    </motion.div>
  </header>
  )
}

export default Header