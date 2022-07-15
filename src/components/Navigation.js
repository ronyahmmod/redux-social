import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const NavigationWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flexGrow: 1,
  flexShrink: 1,
  position: "relative",
  perspectiveOrigin: "right top",
  overflowX: "hidden",
  overscrollBehaviorY: "contain",
  transformStyle: "preserve-3d",
  willChange: "transform,scroll-position",
  overflowY: "auto",
  zIndex: 0,
  top: 0,
  bottom: 0,
}));

const NavigationMenu = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const NavigationMenuItem = ({ Icon, title }) => (
  <Box
    sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(1),

      gap: theme.spacing(2),
      borderRadius: 2,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    })}
  >
    {Icon ? (
      <Icon sx={{ height: 36, width: 36 }} />
    ) : (
      <Avatar sx={{ height: 36, width: 36 }}>
        {title.substring(0, 1).toUpperCase()}
      </Avatar>
    )}
    <Typography variant="body1">{title}</Typography>
  </Box>
);

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Typography
        variant="h4"
        sx={{
          color: "primary.main",
          fontWeight: 600,
          mb: 1,
        }}
      >
        Facebook
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Suggested
      </Typography>
      <NavigationMenu>
        <NavigationMenuItem Icon={GroupOutlinedIcon} title="Friends" />
        <NavigationMenuItem Icon={GroupWorkOutlinedIcon} title="Groups" />
        <NavigationMenuItem Icon={StorefrontOutlinedIcon} title="Marketplace" />
        <NavigationMenuItem Icon={BookmarkAddOutlinedIcon} title="Saved" />
        <NavigationMenuItem Icon={DevicesOutlinedIcon} title="Watch" />
        <NavigationMenuItem Icon={ManageHistoryOutlinedIcon} title="Memories" />
        <NavigationMenuItem Icon={CampaignOutlinedIcon} title="Add Center" />
        <NavigationMenuItem Icon={TimelineOutlinedIcon} title="Add Manager" />
        <NavigationMenuItem
          Icon={BloodtypeOutlinedIcon}
          title="Blood Donations"
        />
        <NavigationMenuItem
          Icon={ShowerOutlinedIcon}
          title="Climate Science Center"
        />
        <NavigationMenuItem
          Icon={HelpCenterOutlinedIcon}
          title="Community Help"
        />
        <NavigationMenuItem
          Icon={CoronavirusOutlinedIcon}
          title="Covid-19 Information Center"
        />
        <NavigationMenuItem
          Icon={MonitorHeartOutlinedIcon}
          title="Emotion Health"
        />
        <NavigationMenuItem Icon={EmojiEventsOutlinedIcon} title="Events" />
        <NavigationMenuItem
          Icon={PlayArrowOutlinedIcon}
          title="Facebook Play"
        />
      </NavigationMenu>

      <Typography variant="h6" sx={{ my: 1 }}>
        Your shortcuts
      </Typography>
      <NavigationMenu>
        <NavigationMenuItem title="Jibannagar Degree College" />
        <NavigationMenuItem title="JDC" />
        <NavigationMenuItem title="ICT" />
        <NavigationMenuItem title="Fatema's Collection" />
      </NavigationMenu>

      <Stack
        direction="row"
        sx={{
          my: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-arround",
          gap: 0.5,
          alignContent: "center",
          flexShrink: 1,
        }}
      >
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>Advertising</Link>
        <Link>Add Choices</Link>
        <Link>Cookies</Link>
        <Link>More</Link>
        <span>Meta &copy; {new Date().getFullYear()}</span>
      </Stack>
    </NavigationWrapper>
  );
};

export default Navigation;
