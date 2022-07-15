import React from "react";
import { styled } from "@mui/material/styles";
import Navigation from "./Navigation";
import AppConfig from "../app.config";
import Complementary from "./Complementary";

const LayoutWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  left: AppConfig.panelWidth,
  width: `calc(100% - ${AppConfig.panelWidth}px)`,
  backgroundColor: "inherit",
  display: "flex",
  flexWrap: "nowrap",
}));

const LeftSide = styled("div")(({ theme }) => ({
  maxWidth: AppConfig.leftSideNavigationWidth,
  overflowAnchor: "none",
  flexBasis: AppConfig.leftSideNavigationWidth,
  overflowX: "hidden",
  overflowY: "auto",
  position: "sticky",
  minWidth: 280,
  top: 0,
  bottom: 0,
  height: "100vh",

  "&::-webkit-scrollbar": {
    width: 10,
    backgroundColor: "#333",
  },

  "&::-webkit-scrollbar-track": {
    boxShadow: theme.shadows[1],
    backgroundColor: "#eee",
  },
  "&::-webkit-scrollbar-thumb": {
    boxShadow: theme.shadows[1],
    backgroundColor: "#999",
    borderRadius: theme.spacing(1),
  },
}));

const Content = styled("div")(({ theme }) => ({
  flexBasis: `calc(100% - ${
    AppConfig.leftSideNavigationWidth + AppConfig.rightSideNavigationWidth
  }px)`,

  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(2),
  backgroundColor: "#F0F2F5",
  display: "flex",
  justifyContent: "center",
}));

const RightSide = styled("div")(({ theme }) => ({
  maxWidth: AppConfig.rightSideNavigationWidth,
  overflowAnchor: "none",
  flexBasis: AppConfig.rightSideNavigationWidth,
  overflowX: "hidden",
  overflowY: "auto",
  position: "sticky",
  minWidth: 280,
  top: 0,
  bottom: 0,
  height: "100vh",
  backgroundColor: "#F0F2F5",
}));

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LeftSide role="navigation">
        <Navigation />
      </LeftSide>
      <Content>{children}</Content>
      <RightSide role="complementary">
        <Complementary />
      </RightSide>
    </LayoutWrapper>
  );
};

export default Layout;
