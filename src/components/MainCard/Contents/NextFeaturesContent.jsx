import React, { Fragment } from "react";

import { Box, Divider, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const features = [
  {
    status: <CheckBoxIcon />,
    title: "Command prompt (cmd) easter egg",
    description: "Add a hidden terminal to the portfolio.",
  },
  {
    status: <IndeterminateCheckBoxIcon />,
    title: "Language toggling",
    description: "pt-BR and en-US language toggling.",
  },
  {
    status: <CheckBoxOutlineBlankIcon />,
    title: "Dark and light mode",
    description: "Add support for dark and light mode.",
  },
];

const NextFeaturesFrontContent = () => {
  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
        You can flip the card to see the next features we will bring here. Stay up to date! :)
      </Typography>
      <Box sx={{ width: "100%", textAlign: "right" }}>
        <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 0 }}>
          Next feature count: {features.length}
        </Typography>
      </Box>
    </Fragment>
  );
};

const NextFeaturesBackContent = () => {
  return (
    <Fragment>
      <List dense={true} sx={{ padding: 0, marginBlock: 0 }}>
        {features.map((feat, index) => (
          <>
            <ListItem key={index} sx={{ padding: 0 }} disableGutters>
              <ListItemIcon>{feat.status}</ListItemIcon>
              <ListItemText
                primary={feat.title}
                sx={{ mb: index === features.length - 1 ? 0 : 0.12 }}
                secondary={feat.description}
                primaryTypographyProps={{
                  fontWeight: "500",
                  lineHeight: "1rem",
                  fontSize: "inherit",
                  color: "text.secondary",
                }}
              />
            </ListItem>
            {index !== features.length - 1 && <Divider component="li" />}
          </>
        ))}
      </List>
    </Fragment>
  );
};

export { NextFeaturesFrontContent, NextFeaturesBackContent };
