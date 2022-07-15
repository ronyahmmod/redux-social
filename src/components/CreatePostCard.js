import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const CreatePostCardWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  height: "auto",
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1),
}));

const CreatePostCard = () => {
  return (
    <CreatePostCardWrapper>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 2 }}>
        <Avatar>M</Avatar>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.action.hover,
            flexGrow: 1,
            p: theme.spacing(1),
            borderRadius: theme.spacing(5),
            display: "flex",
            alignItems: "center",
            fontSize: theme.typography.h6,
            color: theme.palette.grey[500],
            px: theme.spacing(2),
            fontWeight: theme.typography.fontWeightLight,
            cursor: "pointer",
          })}
        >
          What's on your mind, Rony?
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          svg: {
            height: 38,
            width: 38,
          },
        }}
      >
        <Box
          sx={(theme) => ({
            cursor: "pointer",
            display: "flex",
            gap: 1,
            px: 2,
            alignItems: "center",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: theme.palette.grey[100],
            },
          })}
        >
          <VideocamIcon sx={{ color: "primary.main" }} />
          <Typography>Live video</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            cursor: "pointer",
            display: "flex",
            gap: 1,
            px: 2,
            alignItems: "center",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: theme.palette.grey[100],
            },
          })}
        >
          <InsertPhotoIcon sx={{ color: "error.main" }} />
          <Typography>Photo/video</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            cursor: "pointer",
            display: "flex",
            gap: 1,
            px: 2,
            alignItems: "center",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: theme.palette.grey[100],
            },
          })}
        >
          <EmojiEmotionsIcon sx={{ color: "info.main" }} />
          <Typography>Feeling/activity</Typography>
        </Box>
      </Box>
    </CreatePostCardWrapper>
  );
};

export default CreatePostCard;
