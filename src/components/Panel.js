import React from "react";
import { Avatar, Badge, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import PagesIcon from "@mui/icons-material/Pages";
import GroupsIcon from "@mui/icons-material/Groups";
import AppConfig from "../app.config";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../feature/user/userSlice";
import CustomDrawer from "./CustomDrawer";
import {
  selectComponent,
  selectSelectedComponent,
} from "../feature/component/componentSlice";

const PanelWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  top: 0,
  backgroundColor: theme.palette.background.paper,
  width: AppConfig.panelWidth,
  borderRight: `1px solid ${theme.palette.borderColor.wash}`,
  display: "flex",
  zIndex: 3,
}));

const MenuInnerItem = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("backgroundColor"),
  transitionDuration: theme.transitions.duration.complex,
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    // opacity: theme.palette.action.hoverOpacity,
    cursor: "pointer",
  },
}));

const MenuItem = ({
  isActive,
  Icon,
  singleButton,
  notifications,
  clickHandler,
}) => (
  <Box
    sx={{
      display: "flex",
      position: "relative",
      width: "100%",
      alignItems: "center",
    }}
    onClick={clickHandler ? (e) => clickHandler(e) : null}
  >
    {isActive && (
      <Box
        component="span"
        sx={{
          borderLeft: "6px solid #333",
          borderColor: "primary.main",
          borderRadius: 4,
          height: "30px",
          display: "block",
          position: "absolute",
          left: -17,
        }}
      />
    )}

    <MenuInnerItem
      sx={(theme) => {
        if (singleButton) {
          return {
            px: 1,
            py: 0.5,
            backgroundColor: theme.palette.action.hover,
            "&:hover": {
              backgroundColor: alpha(theme.palette.action.hover, 0.2),
            },
          };
        } else {
          return {
            px: 1,
            py: 0.5,
          };
        }
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {notifications > 0 ? (
          <Badge badgeContent={notifications} color="primary">
            <Icon
              sx={{
                color: `${isActive ? "primary.main" : ""}`,
                height: 30,
                width: 30,
              }}
            />
          </Badge>
        ) : (
          <Icon
            sx={{
              color: `${isActive ? "primary.main" : ""}`,
              height: 30,
              width: 30,
            }}
          />
        )}
      </Box>
    </MenuInnerItem>
  </Box>
);

const MenuGroup = ({ Icons }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.action.hover,
      gap: -2,
      borderRadius: 1,
    })}
  >
    {Icons.map((Icon, index) => (
      <Box
        key={index}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: 1,
          p: 1,
          "&:hover": {
            backgroundColor: alpha(theme.palette.action.hover, 0.2),
          },
        })}
      >
        <Icon
          sx={{
            height: 30,
            width: 30,
          }}
        />
      </Box>
    ))}
  </Box>
);

const Panel = () => {
  const loggedInUser = useSelector(selectLoggedInUser);
  const selectedComponent = useSelector(selectSelectedComponent);
  const open = useSelector((state) => state.component.drawerOpen);
  const dispatch = useDispatch();
  const clickHandlerCreator = (dispatchedName) => {
    return (e) => {
      dispatch(selectComponent(dispatchedName));
    };
  };
  return (
    <PanelWrapper>
      <CustomDrawer
        open={open}
        title={selectedComponent}
        component={selectedComponent}
      />
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          flexDirection: "column",
          boxSizing: "border-box",
          pt: 2,
          flexShrink: 0,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            minHeight: 0,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ mb: 2, cursor: "pointer" }}>
            {/* Profile */}
            {loggedInUser && (
              <Avatar
                src={loggedInUser.providerData[0].photoUrl}
                alt={loggedInUser.providerData[0].displayName}
              />
            )}
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Menu */}
            <MenuItem isActive Icon={HomeIcon} />
            <MenuItem Icon={SearchIcon} />
            <MenuItem
              Icon={NotificationsIcon}
              notifications={4}
              clickHandler={clickHandlerCreator("notifications")}
            />
            <MenuItem
              Icon={MessageIcon}
              clickHandler={clickHandlerCreator("messages")}
            />
            <MenuGroup Icons={[AppsIcon, PagesIcon]} />
            <MenuItem Icon={GroupsIcon} singleButton />
          </Box>
        </Box>
      </Box>
    </PanelWrapper>
  );
};

export default Panel;
