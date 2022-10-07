import React from "react";
import AppBarTop from "./AppBarTop";
import DrawerLeft from "./Drawer/DrawerLeft";
import FileSystem from "./FlieSystem/FileSystem";

const Dashboard = () => {
  return (
    <div>
      <AppBarTop />
      <DrawerLeft />
      <FileSystem />
    </div>
  );
};
export default Dashboard;
