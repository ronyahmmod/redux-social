import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import CreateIcon from "@mui/icons-material/Create";
import CreatePostCard from "../components/CreatePostCard";
import PostForm from "../components/PostForm";

const Overview = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Box
        sx={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1000,
          background: "primary.main",
          display: "flex",
        }}
      >
        <IconButton
          sx={{
            boxShadow: 2,
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          <CreateIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <CreatePostCard />
        <PostForm open={open} handleClose={handleClose} />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
        <PostCard post="Oh! My son don't go anywhere. Just follow my footsteps.🚀" />
      </Box>
    </Layout>
  );
};

export default Overview;
