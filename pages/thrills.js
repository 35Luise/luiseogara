import React from "react";
import Image from "next/image";
import thrillspng from "../public/assets/projects/thrills.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function thrills() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={thrillspng}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Thrills & Spills Website</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>

          <p>
            This is a company website for Thrills & Spills which deals with
            safaris and tours . This system increased the company's online
            presence and made it easier for clients to reach out to the company.
          </p>
          <button className="px-8 py-2  mt-4 mr-8">
            <a
              href="https://www.thrillsspillstours.com/"
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

export default thrills;
