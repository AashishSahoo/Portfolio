import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Box,
  Link,
} from "@mui/material";

const ExperienceCard = ({ experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ width: "100%", marginBottom: "2.5rem", paddingInline: "1rem" }}
  >
    <Card
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 2,
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "#181818",
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ paddingLeft: "1rem" }}
          >
            {experience.title}
          </Typography>
        }
        subheader={
          <Box sx={{ paddingLeft: "1rem" }}>
            <Link
              href="https://www.blue-bricks.com/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "#bb86fc",
                fontWeight: 600,
                "&:hover": { color: "#9d46ff" },
              }}
            >
              {experience.company_name}
            </Link>
            <Typography variant="body2" color="gray">
              {experience.date}
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <Box component="div" sx={{ pl: 1 }}>
          {experience.points.map((point, index) => {
            const isProjectTitle =
              point.startsWith("**") && point.endsWith("**");
            const isEmptyLine = point.trim() === "";

            if (isEmptyLine) {
              return <Box key={`space-${index}`} sx={{ height: "0.5rem" }} />;
            }

            if (isProjectTitle) {
              return (
                <Box
                  key={`project-title-${index}`}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    mt: 2,
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "#90caf9",
                    }}
                  >
                    ➤
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      color: "#90caf9",
                      fontSize: "1.05rem",
                    }}
                  >
                    {point.replace(/\*\*/g, "")}
                  </Typography>
                </Box>
              );
            }

            return (
              <Typography
                key={`point-${index}`}
                variant="body2"
                component="li"
                sx={{
                  color: "#ccc",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                  ml: 4,
                }}
              >
                {point.replace(/^•\s*/, "")}
              </Typography>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          marginBottom: "2.5rem",
          textAlign: "center",
          paddingInline: "2rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
              lg: "5rem",
            },
            color: "white",
            letterSpacing: "-0.05em",
          }}
        >
          7 Months OF
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
              lg: "5rem",
            },
            color: "#9e9e9e",
          }}
        >
          EXPERIENCE
        </Typography>
      </motion.div>

      <Box sx={{ mt: 5, px: { xs: 2, lg: 0 } }}>
        {[
          {
            title: "Frontend Developer Intern",
            company_name: "Blue Bricks",
            date: "September 2024 – April 2025",
            points: [
              "Worked on 3 projects in 7 months from September 2024 to April 2025.",
              "",
              "**Axiom Protect 2.0** (React.js, JavaScript):",
              "• Developed and optimized multiple pages to enhance user experience and performance.",
              "• Improved UI components for better responsiveness and usability.",
              "• Integrated APIs efficiently, mapping complex data structures to the UI.",
              "• Worked extensively with React Leaflet, customizing markers, displaying radius, and handling multiple locations, including overlapping markers and clustered views.",
              "",
              "**Self Service Portal** (Next.js, TypeScript):",
              "• Developed and structured interactive, high-performance pages using Next.js and TypeScript.",
              "• Enhanced UI/UX by refining design elements for a modern and intuitive user experience.",
              "• Integrated RESTful APIs to fetch and display dynamic data with optimized state management.",
              "",
              "**IntelliTemplate – Veri5now** (Next.js, TypeScript):",
              "• Built pages and mapped backend data effectively to UI components.",
            ],
          },
        ].map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </Box>
    </>
  );
};

export default Experience;
