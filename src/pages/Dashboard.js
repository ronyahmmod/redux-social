import React from "react";
import { Outlet } from "react-router-dom";
import Panel from "../components/Panel";

const Dashboard = () => {
  return (
    <div>
      <Panel />
      <Outlet />
    </div>
  );
};

export default Dashboard;
