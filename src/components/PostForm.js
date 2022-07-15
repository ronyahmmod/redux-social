import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ImageIcon from "@mui/icons-material/Image";
import TagIcon from "@mui/icons-material/Tag";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MicIcon from "@mui/icons-material/Mic";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PostForm = ({ open, handleClose }) => {
  const [post, setPost] = useState("");
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={(theme) => ({
          p: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
          minWidth: 500,
        })}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert(post);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center", flexGrow: 1 }}>
            Create Post
          </Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          <Avatar>M</Avatar>
          <Box>
            <Typography
              sx={(theme) => ({ fontWeight: theme.typography.fontWeightBold })}
            >
              Rony Ahmmod
            </Typography>
            <Box
              sx={(theme) => ({
                display: "flex",
                backgroundColor: theme.palette.grey[100],
                px: theme.spacing(0.5),
                py: 0.5,
                borderRadius: 2,
                cursor: "pointer",
                gap: 1,
              })}
            >
              <PublicIcon />
              <Typography>Public</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 1 }}>
          {/* Text Area */}
          <TextField
            multiline
            rows={5}
            placeholder="What's on your mind, Rony?"
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
            value={post}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          {/* Color Box and Emotion */}
          <Box
            sx={{
              height: 24,
              width: 24,
              backgroundColor: "secondary.main",
              borderColor: "background.paper",
              borderRadius: 1,
              cursor: "pointer",
            }}
          />
          <InsertEmoticonIcon sx={{ cursor: "pointer" }} />
        </Box>

        <Box
          sx={(theme) => ({
            border: `1px solid ${theme.palette.grey[400]}`,
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 2,
            mb: 1,
          })}
        >
          {/* Extra element */}
          <Typography>Add to your post</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",

              "& > svg": {
                height: 32,
                width: 32,
                cursor: "pointer",
              },
            }}
          >
            <ImageIcon sx={{ color: "primary.main" }} />
            <TagIcon sx={{ color: "secondary.main" }} />
            <InsertEmoticonIcon sx={{ color: "info.main" }} />
            <PinDropIcon sx={{ color: "error.main" }} />
            <MicIcon sx={{ color: "primary.main" }} />
            <MoreHorizIcon />
          </Box>
        </Box>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          type="submit"
          disabled={post.length <= 0}
        >
          Post
        </Button>
      </Box>
    </Dialog>
  );
};

export default PostForm;
