import React from "react";
import AppBarTop from "./AppBarTop";
import CodeSpace from "./CodeSpace/CodeSpace";
import DrawerLeft from "./Drawer/DrawerLeft";
import MainContent from "./MainContent";
const Dashboard = () => {
  return (
    <div>
      <AppBarTop />
      <DrawerLeft />
      <MainContent />
      <CodeSpace />
    </div>
  );
};
export default Dashboard;
