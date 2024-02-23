import React from "react";
import { motion } from "framer-motion";

function RunningPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 bg-[#004c42] flex rounded-t-3xl "
    >
      <div className="text border-t-2 border-b-2 border-gray-600 flex whitespace-nowrap overflow-hidden gap-10 mt-16">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none pb-5 font-bold"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none pb-5 font-bold"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default RunningPage;
