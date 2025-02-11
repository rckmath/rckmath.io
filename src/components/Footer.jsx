import React from "react";
import { useMediaQuery } from "react-responsive";

import { Icon, Grid, IconButton, Tooltip } from "@mui/material";

import SteamIcon from "/steam.svg";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const isMobileOrSmallLaptopScreen = useMediaQuery({ maxWidth: 1366 });
  const fontSize = isMobileOrSmallLaptopScreen ? "3rem" : "3.25rem";

  return (
    <Grid
      container
      component="footer"
      gap={isMobileOrSmallLaptopScreen ? 4 : 10}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: isMobileOrSmallLaptopScreen ? "2dvh" : "0dvh",
        paddingY: isMobileOrSmallLaptopScreen ? "1dvh" : "1.25dvh",
        bgcolor: isMobileOrSmallLaptopScreen ? "#120e26" : "transparent",
      }}
    >
      <Tooltip title="mailto:ericklopes02@outlook.com" placement="top" arrow>
        <IconButton
          size="large"
          color="inherit"
          aria-label="Email"
          onClick={() => (window.location.href = "mailto:ericklopes02@outlook.com")}
        >
          <EmailIcon sx={{ fontSize }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="https://steamcommunity.com/id/BossBR" placement="top" arrow>
        <IconButton
          size="large"
          color="inherit"
          aria-label="Steam"
          onClick={() => window.open("https://steamcommunity.com/id/BossBR", "_blank")}
        >
          <Icon sx={{ fontSize }}>
            <img src={SteamIcon} />
          </Icon>
        </IconButton>
      </Tooltip>

      <Tooltip title="https://github.com/rckmath" placement="top" arrow>
        <IconButton
          size="large"
          color="inherit"
          aria-label="GitHub"
          onClick={() => window.open("https://github.com/rckmath", "_blank")}
        >
          <GitHubIcon sx={{ fontSize }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="https://www.linkedin.com/in/rckmath" placement="top" arrow>
        <IconButton
          size="large"
          color="inherit"
          aria-label="LinkedIn"
          onClick={() => window.open("https://www.linkedin.com/in/rckmath", "_blank")}
        >
          <LinkedInIcon sx={{ fontSize }} />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default Footer;
