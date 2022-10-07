import React from "react";
import AppBarTop from "./AppBarTop";
import DrawerLeft from "./Drawer/DrawerLeft";
import MainContent from "./MainContent";
const Dashboard = () => {
  return (
    <div>
      <AppBarTop />
      <DrawerLeft />
      <MainContent />
    </div>
  );
};
export default Dashboard;
