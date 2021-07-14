import React from "react";
import { FacebookProvider, Share } from "react-facebook";
import { BiNews, BiTime } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import Books from "../components/snakebites/Books";
import Youtube from "../components/snakebites/Youtube";
import TitleBar from "../components/TitleBar";

function NewsDetails() {
  return (
    <>
      <TitleBar name="Snakebite Details" />
      <div className="container mx-auto px-4">
        {/* container snakes starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* snake articles starts  */}
          <div className="col-span-2 ">
            <h1 className="font-bold mt-5 text-3xl">Save the Snake</h1>
            <p className="py-2 flex items-center">
              <BiTime className="mr-2" /> <p className="mr-2">June 2, 2021</p>
              <BiNews className="mr-2" />
              <p>News Category</p>
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
              className="w-full md:h-80 object-cover mt-2"
              alt=""
            />
            <p className="leading-6 py-10">
              Snakes do a lot more than slither. Some swim, while others
              sidewind across sand. Some snakes even fly. The brown tree snake
              has a brand-new trick for climbing trees. It wraps its tail around
              a tree or pole in a lasso-like grip. Then it wriggles to propel
              itself up. It isn’t easy for the snakes. But it works. And this
              looping trick lets these snakes slowly make it up structures that
              would otherwise be too wide to climb.
            </p>

            {/* facebook share starts  */}
            <div className="my-2 flex items-center">
              <FacebookProvider appId="123456789">
                <Share href="http://www.facebook.com">
                  {({ handleClick, loading }) => (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleClick}
                      className="bg-blue-700 px-4 py-2 text-white shadow rounded flex items-center"
                    >
                      {" "}
                      <FaFacebookF className="mr-2" /> Share
                    </button>
                  )}
                </Share>
              </FacebookProvider>
            </div>
            {/* facebook share ends  */}
          </div>
          {/* snake articles ends  */}

          {/* books and articles starts  */}
          <Books />
          {/* books and articles ends  */}
        </div>
        {/* container snakes ends  */}
      </div>
      <Youtube />
    </>
  );
}

export default NewsDetails;
