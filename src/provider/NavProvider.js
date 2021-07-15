import axios from "axios";
import React, { useCallback, useState } from "react";
import { getNavLinks } from "../requests/nav";

export const NavContext = React.createContext();

export default function NavWrapper(props) {
  const [links, setLinks] = useState([]);

  const getNav = useCallback((signal) => {
    return getNavLinks({ signal })
      .then((res) => {
        if (res) {
          let links = res.data?.data;
          setLinks(links);
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request cancelled");
          return;
        }
        console.log(err);
      });
  }, []);

  return (
    <NavContext.Provider value={{ links, getNav }}>
      {props.children}
    </NavContext.Provider>
  );
}
