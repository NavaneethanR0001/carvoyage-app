'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useRef ,useEffect} from 'react';
import gsap from 'gsap';
export default function Textmove() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);


  let xPercent = 0;



useEffect( () => {

 gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})

  requestAnimationFrame(animate);

}, [])



const animate = () => {

  if(xPercent > 0){

    xPercent = -100;

  }

  gsap.set(firstText.current, {xPercent: xPercent})

  gsap.set(secondText.current, {xPercent: xPercent})

  requestAnimationFrame(animate);

  xPercent += 0.1;

}

  return (
    <main className={styles.main}>
      <Image 
        src="/gr.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Ferrari Purosangue -</p>
          <p ref={secondText}>Ferrari Purosangue -</p>
        </div>
      </div>
    </main>
  )
}