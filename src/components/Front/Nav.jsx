/* eslint-disable no-unused-vars */
import { server_url } from "@requests/config";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { IntlContext } from "../../lang/Wrapper";
import { getNavLinksAll } from "../../requests/nav";
import navs from "./nav.json";

function Nav({ intl }) {
  const [links, setLinks] = useState([]);

  const getLinksCallback = useCallback(
    (signal) => {
      getNavLinksAll({ signal }).then((res) => {
        const data = res?.data?.data;

        if (data?.length) setLinks(data);
      });
    },
    [setLinks]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getLinksCallback(signal);
    return () => signal.cancel();
  }, [getLinksCallback]);

  //locale context
  const [locale, setLocale] = useState(false);
  const context = useContext(IntlContext);
  const [toggleBtn, setToggelBtn] = useState(true);
  //mobile nav

  const [mobileNav, setMobileNav] = useState(false);
  // const [subMenu, setSubMenu] = useState("");
  // const [links, setLinks] = useState([]);

  //function to change language
  const changeLanguage = () => {
    if (!locale) context.selectLanguage("ne");
    else context.selectLanguage("en");

    setLocale(!locale);
  };

  return (
    <>
      {/* top dark nav starts  */}
      <div className="bg_primaryDark py-1" style={{ color: "white" }}>
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex flex-column items-center ">
            {" "}
            <div className="hidden sm:block lg:text-sm mx-2">Follow Us</div>
            {/* social media icons stats  */}
            <div className="items-center hidden md:flex">
              <a href="/" className="mr-2">
                <FaFacebookF />
              </a>

              <a href="/" className="mr-2">
                <FaTwitter />
              </a>
              <a href="/" className="mr-2">
                <FaInstagram />
              </a>
              <a href="/" className="mr-2">
                <FaYoutube />
              </a>
            </div>
            {/* social media icons ends  */}
            <h6 className="text-sm sm:text-base lg:text-sm mx-2">
              {/*   {intl.formatMessage({
                  id: "nav.home",
                  defaultMessage: "Home",
                })}{" "} */}
              <FormattedMessage
                id="nav.emergency"
                defaultMessage="Emergency Contact"
              ></FormattedMessage>{" "}
              +9834893498
            </h6>
          </div>

          <h6 className="text-sm sm:text-base lg:text-sm flex items-center">
            <span className="mx-2">?????????????????? </span>
            {toggleBtn ? (
              <>
                <BsToggleOn
                  className="mr-2 font-bold text-3xl cursor-pointer"
                  onClick={() => {
                    setToggelBtn(!toggleBtn);
                    changeLanguage();
                  }}
                />{" "}
              </>
            ) : (
              <>
                <BsToggleOn
                  className="mr-2 transform rotate-180 font-bold text-3xl cursor-pointer"
                  onClick={() => {
                    setToggelBtn(!toggleBtn);
                    changeLanguage();
                  }}
                />{" "}
              </>
            )}
            <span>English</span>
          </h6>
        </div>
        {/* social media icons ends  */}
      </div>
      {/* top dark nav ends  */}
      <nav>
        <div className="bg_primary py-4 ">
          <div className="container mx-auto px-8 flex items-center sm:px-0">
            <h4>
              <FaBars
                className={
                  mobileNav
                    ? "text-xl cursor-pointer absolute opacity-0 transition duration-400 ease-in-out"
                    : "text-xl cursor-pointer md:hidden opacity-1  transition duration-500 ease-in-out"
                }
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
              />
              <AiOutlineCloseSquare
                className={
                  mobileNav
                    ? "text-xl cursor-pointer md:hidden transition duration-400 ease-in-out"
                    : "absolute opacity-0 transition duration-400 ease-in-out"
                }
              />
            </h4>
            <Link to="/" className="logo">
              <img
                className="image"
                src={`${server_url}/placeholder_logo.svg`}
                alt="Logo"
              />
            </Link>
            {/* web nav starts  */}
            <div className="main-links hidden md:block flex mx-4 md:mx-0 md:text-xs lg:text-base lg:mx-4">
              <div className="flex item-center cursor-pointer active:text-white">
                {navs.map((nav, index) => (
                  <div key={index} className="dropdown">
                    <Link
                      to={nav.to}
                      className="flex items-center font-medium text-base "
                    >
                      <span className="px-4 h-full">
                        <FormattedMessage
                          id={`${nav.intl_id}`}
                          defaultMessage={nav.default}
                        />
                      </span>
                    </Link>

                    <div className="dropdown-content"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* web nav ends  */}
          </div>
        </div>
        <div className="big-nav">
          <div className="container mx-auto ">
            <div className="space"></div>
            <div className="links mx-4 md:mx-0 md:text-xs lg:text-base lg:mx-4 p-2">
              {links?.map((res, index) => (
                <Link className="link" key={index} to={"/pages/" + res.link}>
                  {res.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav starts  */}
      {/* <div
        className={
          mobileNav
            ? " z-10 bg-gray-100 h-screen w-9/12 pb-8 container mx-auto absolute transform translate-x-0 transition duration-500 ease-in-out"
            : "z-10 absolute h-screen transform -translate-x-full transition duration-500 ease-in-out"
        }
      >
        <ul>
          {navs.map((nav, index) => (
            <Fragment key={index}>
              <div>
                <li className="flex justify-between items-center hover:bg-gray-200 cursor-pointer px-8 transform">
                  <Link to={nav.to} className="py-3">
                    {nav.default}
                  </Link>
                  {nav.drop ? (
                    <div
                      className="font-medium p-3 bg-gray-200"
                      onClick={(e) => {
                        setSubMenu(nav.title);
                      }}
                    >
                      <BiChevronDown />
                    </div>
                  ) : (
                    ""
                  )}
                </li>

                <div className={subMenu === "about" ? "block" : "hidden"}>
                  {nav.title === "about"
                    ? nav.content.map((a, index) => {
                        return (
                          <div key={index} className="bg-gray-200 px-8">
                            <hr className="border-1 border-gray-300" />
                            <li className="py-2">
                              <Link to={a.to}>{a.default}</Link>
                            </li>
                          </div>
                        );
                      })
                    : ""}
                </div>
                <div className={subMenu === "antivenom" ? "block" : "hidden"}>
                  {nav.title === "antivenom"
                    ? nav.content.map((a, index) => {
                        return (
                          <div key={index} className="bg-gray-200 px-8">
                            <hr className="border-1 border-gray-300" />
                            <li className="py-2">
                              <Link to={a.to}>{a.default}</Link>
                            </li>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
              <hr className="mx-8" />
            </Fragment>
          ))}
        </ul>
      </div> */}
      {/* mobile nav ends */}
    </>
  );
}

export default injectIntl(Nav);
