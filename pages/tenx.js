import React from "react";
import Image from "next/image";
import tenxpic from "../public/assets/projects/tenx.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function tenx() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={tenxpic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">10x Beast</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p>
            10XBEAST is an AI-powered email marketing platform that helps to
            boost your sales significantly. It writes result-driven emails,
            targets customers effectively, reveals competitor secrets, and
            schedules meetings, saving time. The platform has proven results
            including a 250% revenue boost, 8.7x more conversions, 400% more
            deals, and saving 37hrs per week. It offers real-time success
            measurement, smart follow-up automation, and insightful meeting
            analytics. It's also equipped with a community for strategy exchange
            and growth.
          </p>

          <button className="px-8 py-2 mt-4">
            <a href="https://nexuscale.ai" target="_blank" rel="noreferrer">
              Live Link
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

export default tenx;
