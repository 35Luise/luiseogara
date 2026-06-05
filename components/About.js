import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full my-8 md:my--0 h-full md:h-screen p-2 flex items-center "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-2">
          <p className="uppercase text-xltracking-widest text-[#295287] ">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I’m a full-stack web developer with experience in{" "}
            <span className=" text-[#295287]"> MongoDB, </span>{" "}
            <span className=" text-[#295287]">Express JS, </span>
            <span className=" text-[#295287]"> React JS </span> and{" "}
            <span className=" text-[#295287]"> Next JS. </span>
          </p>
          <p className="py-2 text-gray-600">
            I’ve worked at the Ministry of Information, Communication and the Digital Economy(MIC-DE), Kenya Forestry Research Institute(KEFRI), Coder Bounty and
            Podii Consultants, building and maintaining web solutions.
          </p>
          <p className="py-2 text-gray-600">
            I’ve actively participated in several hackathons across Kenya, collaborating with diverse teams to design, develop, and deliver technology solutions under tight deadlines. Through these events, i have contributed to multiple projects, strengthening my skills in software development, teamwork, problem solving and project execution.
          </p>
          
          <p className="py-2 text-gray-600">
            I am currently a freelance web developer who constantly enjoys exploring new tools, frameworks, and technologies to improve my craft. Beyond coding, i participate in hackathons, collaborating with other innovators and learning about entrepreneurship, business, and emerging trends in technology.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">
              Check out some of my recent projects below.
            </Link>
          </p>
        </div>
        <div className="flex justify-center mt-5 relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-[#295287] cursor-pointer">
          <Image
            src={profile}
            alt="avatar"
            layout="fill"
            objectFit="cover"
            className="flex rotate-270 mx-auto justify-center rounded-full shadow-lg shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
