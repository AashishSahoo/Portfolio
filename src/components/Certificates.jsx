import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "Internship Completion Certificate",
      link: "https://drive.google.com/file/d/1fMbVjeQG-oh_3xKzSi8zw2_U_mpB98oN/view?usp=sharing",
    },
    {
      title: "Micro-Certification - Welcome to ServiceNow",
      link: "https://drive.google.com/file/d/1b6dn8iMAeyQtXcczhGY19Q5yaKGFmXSE/view?usp=sharing",
    },
    {
      title: "SQL (Basic)",
      link: "https://drive.google.com/file/d/1zWiFAfa-zDrllO6uOHhJRgAdw1g16kbP/view?usp=sharing",
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1tpIy4wrLUDCDwxS3wt2Xx-O_LC4-Lxsu/view?usp=sharing",
    },
  ];
  return (
    <div className="lg:px-10 text-center lg:text-left h-96">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-500"
      >
        CERTIFICATES
      </motion.h1>
      {certificates.map((certificate, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={index}
          className="mt-5 mx-4"
        >
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold text-xl md:text-2xl lg:text-4xl hover:text-gray-300 hover:cursor-pointer"
          >
            {certificate.title}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Certificates;
