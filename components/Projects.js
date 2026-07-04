import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import house from "../public/assets/projects/house.png";
import zero22 from "../public/assets/projects/zero22.png";
import sisteskitchen from "../public/assets/projects/sisteskitchen.png";
import kinywa from "../public/assets/projects/kinywa.png";
import mche from "../public/assets/projects/mche.png";
import mwamba from "../public/assets/projects/mwamba.png";
import thinkopal from "../public/assets/projects/thinkopal.png";
import peopleschoice from "../public/assets/projects/peopleschoice.png";
import allthingsocial from "../public/assets/projects/allthingsocial.png";
import thekultureke from "../public/assets/projects/thekultureke.png";
import pataride from "../public/assets/projects/pataride.png";
import bemyvalentine from "../public/assets/projects/bemyvalentine.png";
import lipiangoma from "../public/assets/projects/lipiangoma.png";
import summertides from "../public/assets/projects/summertides.png";
import headwearsolutions from "../public/assets/projects/headwearsolutions.png";
import oraimo from "../public/assets/projects/oraimo-clone.png";
import turningpoint from "../public/assets/projects/turningpoint.png";
import news from "../public/assets/projects/news.png";
import kilush from "../public/assets/projects/kilush.png";
import sema from "../public/assets/projects/sema.png";
import qliq from "../public/assets/projects/qliq.png";
import thrills from "../public/assets/projects/thrills.png";
import kerry from "../public/assets/projects/kerry.png";
import tenx from "../public/assets/projects/tenx.png";

import purefruit from "../public/assets/projects/purefruit.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projectstoshow, setProjectsToShow] = useState("all");
  const projects = [
    
    {
      title: "NexuscaleAI",
      image: tenx,
      projectUrl: "/tenx",
    },
    {
      title: "Sema Web App",
      image: sema,
      projectUrl: "/sema",
    },
    {
      title: "Mwamba RFC",
      image: mwamba,
      projectUrl: "/mwamba",
    },
    {
      title: "Mche",
      image: mche,
      projectUrl: "/mche",
    },
    {
      title: "Lipia Ngoma",
      image: lipiangoma,
      projectUrl: "/lipiangoma",
    },

    {
      title: "Headwear Solutions E-commerce System",
      image: headwearsolutions,
      projectUrl: "/headwearsolutions",
    },
    {
      title: "Pataride",
      image: pataride,
      projectUrl: "/pataride",
    },
    {
      title: "TheKultureKe Ticketing System",
      image: thekultureke,
      projectUrl: "/thekultureke",
    },

    {
      title: "Influencer Management System",
      image: allthingsocial,
      projectUrl: "/allthingsocial",
    },
    {
      title: "Summertides",
      image: summertides,
      projectUrl: "/summertides",
    },
    {
      title: "Purefruit",
      image: purefruit,
      projectUrl: "/purefruit",
    },
    {
      title: "Thrills & Spills",
      image: thrills,
      projectUrl: "/thrills",
    },
    {
      title: "Qliq Africa",
      image: qliq,
      projectUrl: "/qliq",
    },
    {
      title: "Photographer Portfolio",
      image: kinywa,
      projectUrl: "/kinywa",
    },
    {
      title: "People's Choice Africa Awards",
      image: peopleschoice,
      projectUrl: "/peopleschoice",
    },
    {
      title: "Thinkopal Website",
      image: thinkopal,
      projectUrl: "/thinkopal",
    },
    {
      title: "Meal Planning Website",
      image: sisteskitchen,
      projectUrl: "/sisteskitchen",
    },
    {
      title: "Zero22 Gym Website",
      image: zero22,
      projectUrl: "/zero22",
    },
    {
      title: "Martin Kerry Portflio",
      image: kerry,
      projectUrl: "/kerry",
    },
    {
      title: "Real Estate Website",
      image: house,
      projectUrl: "/house",
    },
  ];
 

  const react_projects = [
   
    {
      title: "Summertides",
      image: summertides,
      projectUrl: "/summertides",
    },
    {
      title: "Photographer Portfolio",
      image: kinywa,
      projectUrl: "/kinywa",
    },
    {
      title: "Purefruit",
      image: purefruit,
      projectUrl: "/purefruit",
    },
    {
      title: "Thrills & Spills",
      image: thrills,
      projectUrl: "/thrills",
    },
    {
      title: "Qliq Africa",
      image: qliq,
      projectUrl: "/qliq",
    },
    {
      title: "People's Choice Africa Awards",
      image: peopleschoice,
      projectUrl: "/peopleschoice",
    },
    {
      title: "Thinkopal Website",
      image: thinkopal,
      projectUrl: "/thinkopal",
    },
    {
      title: "Meal Planning Website",
      image: sisteskitchen,
      projectUrl: "/sisteskitchen",
    },
    {
      title: "Martin Kerry Portfolio",
      image: kerry,
      projectUrl: "/kerry",
    },
    {
      title: "Zero22 Gym Website",
      image: zero22,
      projectUrl: "/zero22",
    },
    {
      title: "Real Estate Website",
      image: house,
      projectUrl: "/house",
    },
    {
      title: "Turning Point",
      image: turningpoint,
      projectUrl: "/turningpoint",
    },
    {
      title: "Oraimo Clone",
      image: oraimo,
      projectUrl: "/oraimo",
    },
    {
      title: "News",
      image: news,
      projectUrl: "/news",
    },
    {
      title: "Data Science Portfolio",
      image: kilush,
      projectUrl: "/kilush",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#295287]">
          Projects
        </p>
        <h2 className="py-2">Some of my recent projects</h2>
        <p className="  text-sm text-gray-500 mb-4">
          Here are some of my featured projects, showcasing modern, responsive, and user-friendly web applications built to deliver reliable performance and an excellent user experience.
        </p>
        <div class="flex gap-4 md:flex-row flex-col items-center">
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer  transition-all ease-in-out duration-500   flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "all"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("all")}
          >
            <IoMdStar /> All Projects <IoMdStar />
          </div>
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer  transition-all ease-in-out duration-500  flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "elixir"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("elixir")}
          >
          </div>
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer transition-all ease-in-out duration-500  flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "react"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("react")}
          >
            <IoMdStar /> React / Javascript Projects <IoMdStar />
          </div>
        </div>

        <div className="grid md:grid-cols-2  mt-16 gap-8">
          {projectstoshow == "all" &&
            projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                image={project.image}
                projectUrl={project.projectUrl}
              />
            ))}
          {projectstoshow == "react" &&
            react_projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                image={project.image}
                projectUrl={project.projectUrl}
              />
            ))}
        </div>
      </div>

      
    </div>
  );
};

export default Projects;
