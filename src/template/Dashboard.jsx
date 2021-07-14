import React from "react";
import SideNav from "../pages/Dashboard/SideNav";
import { Protected } from "../provider/AuthProvider";

function Dashboard(props) {
  return (
    <Protected>
      <div className="grid md:grid-cols-6">
        <SideNav />
        <div className="md:col-span-5">{props.children}</div>
      </div>
    </Protected>
  );
}

export default Dashboard;
