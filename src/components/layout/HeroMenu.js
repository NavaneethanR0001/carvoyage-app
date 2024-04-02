import SectionHeaders from "@/components/layout/SectionHeaders";

import Image from "next/image";
import Sliders from "./Sliders";
import WebsiteDesign from "./websitedesign";
import Zoomsection from "./Zoomsection";
import Textmove from "./Textmove";
import Double from "./Double";
import Carcard from "./Carcard";
import Footer from "./Footer";


export default function HomeMenu() {
 
  return (
    <div  className="min-h-screen">
      <Sliders/>      
<WebsiteDesign/>

<Zoomsection/>

<Textmove/>
<Carcard/>
<Footer/>



    </div>
  );
}