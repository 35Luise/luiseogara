import React from "react";
import Image from "next/image";
import peopleschoicepic from "../public/assets/projects/peopleschoice.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function peopleschoice() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={peopleschoicepic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">People's Choice Africa Awards </h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p>
            This is the official website of the People's Choice Africa Awards.
            It is a website that allows people to vote for their favorite
            celebrities in different categories. It also allows contestants to
            create their profiles and upload their pictures and videos for
            posters.
          </p>
          <button className="px-8 py-2  mt-4 mr-8">
            <a
              href="https://www.peopleschoiceawards.africa/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>
        
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back </p>
        </Link>
      </div>
    </div>
  );
}

export default peopleschoice;
