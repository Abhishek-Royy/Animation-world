import React from "react";
import { MdArrowOutward } from "react-icons/md";

function AboutPage() {
  return (
    <div className="w-full h-screen bg-[#ccea69] px-20 py-20 rounded-3xl">
      <h1 className="text-6xl leading-[4.5vw] tracking-tighter text-black">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full border-t-[1px] border-[#849d31] mt-16 flex">
        <div className="w-1/2">
          <h1 className="text-black text-[4vw]">Our approach:</h1>
          <button className="items-center justify-between w-44 flex py-4 px-5 rounded-full bg-black uppercase mt-2">
            Read More
            {/* <div className="border w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <MdArrowOutward />
            </div> */}
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[50vh] mt-7  rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className="w-full h-full bg-center bg-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
