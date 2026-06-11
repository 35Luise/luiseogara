import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 2 }}
    >
      <div id="home" className="w-full pt-32 md:pt-0 h-screen text-center">
        <div className="max-w-[1240px] mx-auto h-full flex p-2 justify-center items-center">
          <div>
            <p className=" uppercase text-sm tracking-widest text-gray-600 ">
              <span className="text-[#4371ac]">CRAFTING WEBSITES WITH PRECISION AND PASSION</span>
            </p>
            <h1 className="py-3 text-gray-700">
              Hi , I am <span className="text-[#295287]">Luise Ogara</span>
            </h1>
            <h2 className=" text-gray-700 text-center">I am a</h2>

            <h1 className="py-3 fjalla-one md:text-3xl text-md text-[#295287]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "React Js Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </h1>
            <p className=" kulim-park py-4 text-gray-600 max-w-[85%] m-auto">
              I engineer high-performance web applications that don't just look good—they solve real business problems. With expertise in the MERN ecosystem (MongoDB, Express.js, React.js, and Next.js), I build scalable, responsive, and user-focused digital experiences designed for growth, performance, and long-term success. Every project is crafted with clean architecture, modern development practices, and a relentless focus on delivering measurable value.
            </p>
            <div className="flex items-center flex-wrap  justify-center md:w-[100%]  gap-2 m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer  hover:scale-110 ease-in   duration-300">
                <a
                  href="https://www.linkedin.com/in/luise-ogara-38a9a123b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="md:text-2xl text-md " />
                </a>
              </div>
              
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://x.com/LuiseOgara?t=BrN1s4-ytsgGtrxWKMV-KA&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a rel="noopener noreferrer" href="tel:0114697174">
                  <FiPhoneCall className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://wa.me/254114697174"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="md:text-2xl text-md " />
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
