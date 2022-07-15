import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Typography, Box, Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MessageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: theme.spacing(1),
  gap: theme.spacing(1),
}));

const MessageItem = ({ owner, message, src }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        padding: theme.spacing(1),
        borderRadius: theme.spacing(0.8),
        cursor: "pointer",
        justifyContent: "space-between",
        "&:hover": {
          backgroundColor: alpha(theme.palette.action.hover, 0.1),
        },

        "&:hover > .icon-button": {
          visibility: "visible",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        })}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar src={`${src ? src : ""} `}>
            {owner.substring(0, 1).toUpperCase()}
          </Avatar>
          <Box
            component="span"
            sx={{
              position: "absolute",
              height: 8,
              backgroundColor: "green",
              zIndex: 5000,
            }}
          />
        </Box>
        <Box>
          <Typography variant="body1">{owner}</Typography>
          <Typography variant="body2">{message}</Typography>
        </Box>
      </Box>
      <Box className="icon-button" sx={{ visibility: "hidden" }}>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
const Messages = () => {
  return (
    <MessageWrapper>
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
      <MessageItem owner="Tim. A" message="Hi rony how are you?" />
    </MessageWrapper>
  );
};

export default Messages;
