'use client'

import styles from './car.module.scss'

import { projects } from '../data';
import Image from 'next/image';
import Double from './Double';
import{motion} from "framer-motion";

export default function Carcard() {
  return (
    <motion.main initial={{x:-250, opacity:0.1}} whileInView={{ x:  0, opacity:1 }}
    transition={{  duration: 1 ,ease: "linear" }} className={styles.main}>
      <h1 >We use design and technology to create brands and products that perform, delight, and scale.</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
    </motion.main>
  )
}