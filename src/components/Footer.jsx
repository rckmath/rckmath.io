import React from "react";
import { useMediaQuery } from "react-responsive";

import { Grid, IconButton, Tooltip } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const fontSize = isMobile ? "3rem" : "3.25rem";

  return (
    <Grid
      container
      component="footer"
      gap={isMobile ? 8 : 10}
      sx={{
        marginTop: 5,
        display: "flex",
        paddingY: "2rem",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: isMobile ? "#120e26" : "transparent",
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
