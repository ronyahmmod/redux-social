import React from "react";
import { styled } from "@mui/material/styles";
import AppConfig from "../app.config";
import { Typography, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Notifications from "./Notifications";
import Messages from "./Messages";

const CustomDrawerWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  left: AppConfig.panelWidth,
  top: 0,
  bottom: 0,
  width: 360,
  backgroundColor: theme.palette.background.paper,
  zIndex: 5000,
  overflowY: "auto",
  overflowX: "hidden",
  padding: theme.spacing(2, 1),
  display: "flex",
  flexDirection: "column",
}));

const componentLoader = (componentName) => {
  switch (componentName) {
    case "notifications": {
      return <Notifications />;
    }
    case "messages":
      return <Messages />;
    default:
      return null;
  }
};

const CustomDrawer = ({ open, title, component }) => {
  return (
    <>
      {open && (
        <CustomDrawerWrapper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {title}
            </Typography>
            <MoreHorizIcon sx={{ cursor: "pointer", mr: 1 }} />
          </Box>

          {/* Load Component */}
          {componentLoader(component)}
        </CustomDrawerWrapper>
      )}
    </>
  );
};

export default CustomDrawer;
