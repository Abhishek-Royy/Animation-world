// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { Power4 } from "gsap";

// function CardPage() {
//   const [hovering, sethovering] = useState(false);

//   return (
//     <div className="w-full py-20 bg-gray-300">
//       <div className="w-full px-20 border-b-2 border-zinc-400 pb-12">
//         <h1 className="text-5xl text-black">Featured Projects</h1>
//       </div>
//       <div className="cards w-full flex gap-10 p-20">
//         <div
//           onMouseEnter={() => sethovering(true)}
//           onMouseLeave={() => sethovering(false)}
//           className="cardcontainer relative w-1/2 h-[75vh]"
//         >
//           <h1 className="absolute flex overflow-hidden  text-[#bad458] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
//             {"FYDE".split("").map((item, index) => (
//               <motion.span
//                 initial={{ y: "100%" }}
//                 animate={hovering ? { y: "" } : { y: "100%" }}
//                 transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
//                 className="inline-block"
//               >
//                 {item}
//               </motion.span>
//             ))}
//           </h1>
//           <div className="card w-full h-full overflow-hidden  rounded-xl ">
//             <img
//               className="w-full h-full bg-cover"
//               src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="cardcontainer relative w-1/2 h-[75vh]">
//           <h1 className="absolute  text-[#bad458] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
//             {"VISE".split("").map((item, index) => (
//               <motion.span>{item}</motion.span>
//             ))}
//           </h1>
//           <div className="card w-full h-full overflow-hidden  rounded-xl ">
//             <img
//               className="w-full h-full bg-cover"
//               src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardPage;

import React, { useState } from "react";
import { motion } from "framer-motion";

function CardPage() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20 bg-gray-300">
      <div className="w-full px-20 border-b-2 border-zinc-400 pb-12">
        <h1 className="text-5xl text-black">Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 p-20">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="cardcontainer relative w-1/2 h-[75vh]"
        >
          <h1 className="absolute flex overflow-hidden text-[#bad458] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={hovering ? { y: 0 } : { y: "100%" }}
                transition={{ ease: "easeInOut", delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer relative w-1/2 h-[75vh]">
          <h1 className="absolute flex overflow-hidden  text-[#bad458] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={hovering ? { y: 0 } : { y: "100%" }}
                transition={{ ease: "easeInOut", delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full overflow-hidden  rounded-xl ">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
