import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="textStructure mt-40 px-20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="text1 font-[Founders_Grotesk] text-8xl leading-[5.5vw] tracking-tighter font-semibold"
        >
          {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </motion.div>
      </div>
      <div className="single-row border-t-2 border-zinc-800 mt-32 flex items-center justify-between py-6 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <h2 key={index} className="tracking-tight leading-none text-md">
            {item}
          </h2>
        ))}
        <div className="flex items-start gap-2 justify-center">
          <div className="border px-4 py-2 rounded-full">START THE PROJECT</div>
          <div className="border p-2 rounded-full text-xl">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
