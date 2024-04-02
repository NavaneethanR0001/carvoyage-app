'use client'

import Image from "next/image"
import{motion} from "framer-motion";

const WebsiteDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-lime-100 bg-opacity-50">
              Website Design <br /> that works
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      Creating, designing and developing websites that work for your business.
        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <motion.div initial={{ opacity: 0 ,x:-200}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 2}}className="grid gap-4">
    <div className="hover:scale-105 transition ease-in-out delay-150">
                    <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c8.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">
                     <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c1.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">
                        <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c4.jpg" alt=""/>
        </div>
    </motion.div>
    <motion.div initial={{ opacity: 0 ,y:-200}}
  whileInView={{ opacity: 1,y:0}} transition={{ duration: 2}} className="grid gap-4">
    <div className="hover:scale-105 transition ease-in-out delay-150">
                    <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c6.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">    
                <Image

            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c7.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">
                        <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c3.jpg" alt=""/>
        </div>
    </motion.div>
    <motion.div initial={{ opacity: 0 ,y:200}}
  whileInView={{ opacity: 1,y:0}} transition={{ duration: 2}} className="grid gap-4">
    <div className="hover:scale-105 transition ease-in-out delay-150">
                    <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c5.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">    
                <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c9.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">
                        <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c2.jpg" alt=""/>
        </div>
    </motion.div>
    <motion.div initial={{ opacity: 0 ,x:200}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 2}} className="grid gap-4">
    <div className="hover:scale-105 transition ease-in-out delay-150">           
                <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c12.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">           
                    <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c11.jpg" alt=""/>
        </div>
        <div className="hover:scale-105 transition ease-in-out delay-150">           
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/c13.jpg" alt=""/>
        </div>
    </motion.div>
    </div>
    </div> );
}
 
export default WebsiteDesign;
