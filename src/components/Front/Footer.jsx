import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="bg_primary flex justify-center text-center py-10 md:py-20">
        <div className="footer_content">
          {/* social icons starts  */}
          <div className=" icons flex items-center justify-center">
            <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
              <FaFacebookF />
            </div>

            <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
              <FaTwitter />
            </div>

            <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
              <FaInstagram />
            </div>

            <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
              <FaYoutube />
            </div>
          </div>
          {/* social icons ends  */}

          {/* footer nav starts  */}
          <div className="flex items-center justify-center mt-10">
            <Link to="/">
              <h1 className="font-bold mx-1 md:mx-4 text-lg md:xl">
                <FormattedMessage id="nav.home" defaultMessage="Home" />
              </h1>
            </Link>
            <Link to="/about">
              <h1 className="font-bold mx-1 md:mx-4 text-lg md:xl">
                <FormattedMessage id="nav.about" defaultMessage="About" />
              </h1>
            </Link>
            <Link to="/news">
              <h1 className="font-bold mx-1 md:mx-4 text-lg md:xl">
                <FormattedMessage id="nav.news" defaultMessage="News" />
              </h1>
            </Link>
            <Link to="/snakes_and_snakebites">
              <h1 className="font-bold mx-1 md:mx-4 text-lg md:xl">
                <FormattedMessage
                  id="nav.sns"
                  defaultMessage=" Snakes & Snakebites"
                />
              </h1>
            </Link>
          </div>
          <div className="flex flex-col justify-center md:flex-row items-center mt-5">
            <Link to="/gallery">
              <h4 className="font-medium mt-2 md:mt-0  md:mx-2 text-md">
                <FormattedMessage id="nav.gallery" defaultMessage="Gallery" /> |
              </h4>
            </Link>
            <Link to="/antivenom">
              <h4 className="font-medium mt-2 md:mt-0  md:mx-2 text-md">
                <FormattedMessage
                  id="nav.avc"
                  defaultMessage=" Antivenom Centers"
                />{" "}
                |
              </h4>
            </Link>
            <Link to="/snakes_art">
              <h4 className="font-medium mt-2 md:mt-0  md:mx-2 text-md">
                <FormattedMessage
                  id="nav.snc"
                  defaultMessage="Snakes in Art & Culture"
                />{" "}
                |
              </h4>
            </Link>
            <Link to="/contact">
              <h4 className="font-medium mt-2 md:mt-0  md:mx-2 text-md">
                <FormattedMessage id="nav.contact" defaultMessage="Contact" />{" "}
              </h4>
            </Link>
          </div>
          {/* footer nav ends  */}
        </div>
      </div>
      <div className="bg_primaryDark py-3 text-center">
        <h1 className="text-sm font-medium md:text-md">
          &copy; {new Date().getFullYear()} Trioplus Technology | All Right
          Reserved
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
