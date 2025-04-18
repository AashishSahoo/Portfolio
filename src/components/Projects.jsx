import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tooltip } from "@mui/material";

import project1 from "../assets/axiom.jpeg";
import project2 from "../assets/axiom.jpeg";
import project3 from "../assets/mealmate.png";
import project4 from "../assets/logo.png";

const Projects = () => {
  const projects = [
    {
      title: "Axiom Protect 2.0",
      description: "React JS, JavaScript and Material UI",
      image: project1,
      link: "https://access.axiomprotect.com/login",
      type: "Internship",
    },
    {
      title: "Self Service Portal",
      description: "Next JS, TypeScript and Material UI",
      image: project2,
      link: "https://ssp.axiomprotect.com:5354/login",
      type: "Internship",
    },
    {
      title: "Meal Mate",
      description: "MERN",
      image: project3,
      link: "https://github.com/AashishSahoo/MealMate-Frontend",
      type: "Personal",
    },
    {
      title: "Veri5now",
      description: "Next JS, Typescript and Material UI",
      image: project4,
      link: "https://app.veri5now.com/login",
      type: "Internship",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center lg:items-start mb-10 px-4 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-white font-black text-4xl md:text-6xl lg:text-8xl -tracking-tight">
          RECENT
        </h1>
        <h1 className="text-gray-500 font-black text-4xl md:text-6xl lg:text-8xl">
          PROJECTS
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 w-full mt-8 md:mt-16 pr-2 md:pr-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            className="relative group w-full hover:bg-zinc-900 hover:cursor-pointer hover:rounded-xl transition-all duration-300 rounded-xl p-2 md:p-4"
          >
            <Link
              to={project.link}
              className="flex flex-col md:flex-row items-center gap-4 w-full"
            >
              <div className="w-full h-64 md:w-64 overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <motion.div
                className="w-full md:flex-1 text-center md:text-left mt-2 md:mt-4 flex flex-col gap-2 justify-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                  {project.title}
                </h3>
                <span
                  className={`w-fit text-sm px-2 py-1 rounded-full font-semibold ${
                    project.type === "Internship"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {project.type}
                </span>

                <p className="text-gray-500 text-lg md:text-xl lg:text-2xl">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Tooltip
                  color="#fff"
                  title="View"
                  arrow
                  disableHoverListener={project.link === "#"}
                >
                  {" "}
                  <ArrowRight className="h-6 w-6" />
                </Tooltip>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
