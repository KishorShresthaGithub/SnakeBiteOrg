import React from "react";
import { Route } from "react-router-dom";
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

export const DashRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Dashboard>
          <Component {...rest} {...matchProps} />
        </Dashboard>
      )}
    />
  );
};

export default Dashboard;
