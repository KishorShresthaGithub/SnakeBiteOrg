import React from "react";
import Nav from "../components/Front/Nav.jsx";
import Footer from "../components/Front/Footer";
import { Route } from "react-router-dom";

function Page(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export const PageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Page>
          <Component {...rest} {...matchProps} />
        </Page>
      )}
    />
  );
};
export default Page;
