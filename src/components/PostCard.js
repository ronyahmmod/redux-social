import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LadyImage from "../assets/images/lady.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const CardWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.borderColor.wash}`,
  width: 600,
  height: "auto",
  display: "flex",
  flexDirection: "column",
  //   padding: theme.spacing(1, 1),
  borderRadius: theme.spacing(1.5),

  //   flexGrow: 1,
}));

const PostCard = ({ post, media }) => {
  return (
    <CardWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, px: 1, pt: 1 }}>
          <Box>
            <Avatar sx={{ width: 36, height: 36 }}>M</Avatar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Monir Mia 🧨
            </Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: alpha(theme.palette.action.hover, 0.3),
              })}
            >
              2d
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pr: 2 }}>
          <MoreHorizIcon sx={{ "&:hover": { cursor: "pointer" } }} />
        </Box>
      </Box>

      <Box sx={{ p: 1 }}>
        {/* Card Content */}
        <Typography variant="body1" sx={{ textAlign: "left", my: 1 }}>
          {post}
        </Typography>
      </Box>

      <Box
        sx={{
          widht: "100%",
          overflow: "hidden",
          img: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            // objectFit: "contain",
          },
        }}
      >
        <img src={LadyImage} alt="lady" />
      </Box>

      {/* like , comments, share */}
      <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            svg: { color: "primary.main" },
          }}
        >
          <FavoriteIcon />
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.grey[500],
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            })}
          >
            81K
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.grey[500],
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            })}
          >
            2.8K Comments{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.grey[500],
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            })}
          >
            18K Shares
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mx: 1 }} />
      <Box
        sx={{ p: 1, display: "flex", gap: 2, justifyContent: "space-between" }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1,
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            "&:hover": { backgroundColor: theme.palette.grey[300] },
          })}
        >
          <ThumbUpOffAltIcon />
          <Typography variant="body1">Like</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1,
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            "&:hover": { backgroundColor: theme.palette.grey[300] },
          })}
        >
          <CommentIcon />
          <Typography variant="body1">Comment</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1,
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            "&:hover": { backgroundColor: theme.palette.grey[300] },
          })}
        >
          <ShareIcon />
          <Typography variant="body1">Share</Typography>
        </Box>
      </Box>
    </CardWrapper>
  );
};

export default PostCard;
