import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Language, Twitter, Instagram, Email } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import profile from "@/assets/ProfileImg.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileCard = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: { xs: "90%", md: 400 },
        mx: "auto",
        mb: 5,
        height: { xs: 600, lg: "80vh" },
      }}
    >
      <Card
        elevation={8}
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255,255,255,0.85)",
          borderRadius: 3,
          border: "1px solid rgba(255,152,0,0.2)",
          zIndex: 1,
          position: "relative",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            pt: 4,
          }}
        >
          <Box sx={{ width: "100%", px: 2 }}>
            <Avatar
              src={profile}
              alt="Ashish Sahoo"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                border: "4px solid rgba(255,152,0,0.3)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "rgba(255,152,0,0.6)",
                },
              }}
              variant="rounded"
            />
          </Box>

          <Box textAlign="center" px={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                background:
                  "linear-gradient(to right, #ff9800, #e91e63, #9c27b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ashish Sahoo
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              {/* React JS | Material UI | JavaScript| TypeScript | Material UI */}
            </Typography>
            <Typography>
              {" "}
              React JS | Material UI | JavaScript | TypeScript | Next JS
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {/* <IconButton color="warning">
              <Language />
            </IconButton>
             */}
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: "#F44336" }}>
              <Email />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
