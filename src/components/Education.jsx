import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const educationData = [
    {
      degree: "Master in Computer Application",
      duration: "2022-2024",
      university: "Savitribai Phule Pune University",
      score: "CGPA: 8.18 /10",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      duration: "2019-2022",
      university: "Savitribai Phule Pune University",
      score: "CGPA: 7.82 /10",
    },
    {
      degree: "H.S.C - Science",
      duration: "2019",
      university: "Maharashtra Board",
      score: "Percentage: 70.4%",
    },
    {
      degree: "S.S.C",
      duration: "2017",
      university: "Maharashtra Board",
      score: "Percentage: 83.2%",
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
          EDUCATION
        </h1>
        <h1 className="text-gray-500 font-black text-4xl md:text-6xl lg:text-8xl">
          QUALIFICATIONS
        </h1>
      </motion.div>

      <motion.div
        className="w-full mt-8 md:mt-16 pr-2 md:pr-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} key={index} width="100%">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <SchoolIcon
                    className="text-blue-500 mt-1"
                    fontSize={isMobile ? "medium" : "large"}
                  />
                  <div className="flex-1">
                    <Typography
                      variant={isMobile ? "h6" : "h5"}
                      className="text-white font-bold"
                    >
                      {edu.degree}
                    </Typography>
                    <Typography variant="body1" className="text-gray-400 mt-1">
                      {edu.university}
                    </Typography>
                    <div className="flex flex-col md:flex-row justify-between mt-2">
                      <Typography variant="body2" className="text-gray-500">
                        {edu.duration}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-300 font-medium"
                      >
                        {edu.score}
                      </Typography>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
};

export default Education;
