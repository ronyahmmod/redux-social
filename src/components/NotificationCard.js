import React from "react";
import { Box, Typography } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import CloseIcon from "@mui/icons-material/Close";

const NotificationCard = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", borderRadius: 2, p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Notification Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CakeIcon sx={{ color: "primary.main" }} />
          <Typography variant="body1">Birthdays</Typography>
        </Box>
        <Box>
          <CloseIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Box sx={{ my: 2 }}>
        {/* Content */}
        <Typography variant="body1">
          Nazmun Nahar Toma and 4 others have birthdays today.
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationCard;
