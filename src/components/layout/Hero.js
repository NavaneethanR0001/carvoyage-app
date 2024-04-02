'use client'

import Right from "@/components/icons/Right";
import Image from "next/image";
import{motion} from "framer-motion";
import HomeMenu from "./HeroMenu";

export default function Hero() {
  return (
    <section className="hero md:mt-4  flex min-h-screen">
       <motion.div  initial={{x:-80, opacity:0}} whileInView={{ x:  0, opacity:1 }}
  transition={{  duration: 1}}
  className="py-8 md:py-12 mt-15">
        <h1 className="text-7xl font-medium">
          Explore <br />
          the Premium<br />
          Sports&nbsp;
          <span className="text-primary">
          𝒞𝒶𝓇𝓈
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm mt-10">
        It’s like driving your car. If you drive too fast on the highway, you will topple, so you better maintain your speed. Life is similar to that, and that’s the way you have to control your head.”       </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </motion.div>
      
      <motion.div initial={{x:400, opacity:0}} whileInView={{ x:  0, opacity:1 }}
  transition={{ ease:"easeIn", duration: 1}} className=" relative sm:mt-20  md:block -top-12 -right-16">
        <Image src={'/cargreen.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </motion.div>

    </section>
  );
}