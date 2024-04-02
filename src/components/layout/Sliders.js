"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => { const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
const isSmallScreen = useMediaQuery({ maxWidth: 767 });

const settings = {
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  className: "w-full h-88 mx-auto cursor-pointer gap-6xl center-mode",
};

if (isMediumScreen) {
  settings.slidesToShow = 1.67;
} else if (isSmallScreen) {
  settings.slidesToShow = 1;
}

          

return (
  <div >
    <Slider {...settings}>
      <>
      <div className="relative flex flex-col  h-45 mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
      <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/carbb.jpg"
                        alt="logo"
            width={500}
            height={500}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
   
  </div>
          </div>
</>

<>
      <div className="relative flex flex-col h-45 mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
      <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/carred.jpg"
                        alt="logo"
            width={500}
            height={500}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
 
  </div>
          </div>
</>

<>
      <div className="relative flex flex-col mt-6 h-45 text-gray-700 bg-white  shadow-slate-200 bg-clip-border rounded-xl w-96">
      <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/carbl.jpg"
                        alt="logo"
            width={500}
            height={500}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
   
  </div>
          </div>
</>


<>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white bg-clip-border h-45 rounded-xl w-96">
      <div
    className="relative h-56 mx-4  -mt-6 overflow-hidden text-white   rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/car1.png"
                        alt="logo"
            width={350}
            height={350}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
  
  </div>
          </div>
</>
<>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
      <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/carr.png"
                        alt="logo"
            width={500}
            height={500}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
  
  </div>
          </div>
</>
<>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
      <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

      <Image
            priority
            src="/car2.png"
                        alt="logo"
            width={420}
            height={420}
            className="
                rounded-2xl 
                    "
          />  
          </div>
          <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
   
  </div>
          </div>
</>

    </Slider>
  </div>
);
}

export default Sliders