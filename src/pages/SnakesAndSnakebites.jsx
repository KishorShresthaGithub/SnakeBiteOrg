import React from "react";
import Books from "../components/Front/snakebites/Books";
import Snakebite from "../components/Front/snakebites/Snakebite";
import Youtube from "../components/Front/snakebites/Youtube";
import TitleBar from "../components/Front/TitleBar";

function Snakes_and_snakebites() {
  return (
    <>
      <TitleBar name="Snakes & Snakebites" />
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-2xl font-bold mt-10">
          VANEMOUS SNAKES IN NEPAL
        </h1>
        <input
          type="text"
          className="mt-6 border-2 border-gray-200 px-5 shadow-md py-1.5 rounded-full w-80"
          placeholder="search...."
        />

        {/* container snakes starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* snake articles starts  */}
          <div className="col-span-2">
            <Snakebite
              img="https://www.sciencenewsforstudents.org/wp-content/uploads/2021/01/010821_mt_climbing-snakes_feat-1030x580.jpg"
              title="Rattlesnakes"
              des="Snakes do a lot more than slither. Some swim, while others sidewind across sand. Some snakes even fly. The brown tree snake has a brand-new trick for climbing trees. It wraps its tail around a tree or pole in a lasso-like grip. Then it wriggles to propel itself up. It isn’t easy for the snakes. But it works. And this looping trick lets these snakes slowly make it up structures that would otherwise be too wide to climb."
              date="June 2,2021"
            />
            <Snakebite
              img="https://www.sciencenewsforstudents.org/wp-content/uploads/2021/01/010821_mt_climbing-snakes_feat-1030x580.jpg"
              title="Water moccasins or cottonmouths"
              des="Snakes do a lot more than slither. Some swim, while others sidewind across sand. Some snakes even fly. The brown tree snake has a brand-new trick for climbing trees. It wraps its tail around a tree or pole in a lasso-like grip. Then it wriggles to propel itself up. It isn’t easy for the snakes. But it works. And this looping trick lets these snakes slowly make it up structures that would otherwise be too wide to climb."
              date="June 2,2021"
            />
            <Snakebite
              img="https://www.sciencenewsforstudents.org/wp-content/uploads/2021/01/010821_mt_climbing-snakes_feat-1030x580.jpg"
              title="Copper Head"
              des="Snakes do a lot more than slither. Some swim, while others sidewind across sand. Some snakes even fly. The brown tree snake has a brand-new trick for climbing trees. It wraps its tail around a tree or pole in a lasso-like grip. Then it wriggles to propel itself up. It isn’t easy for the snakes. But it works. And this looping trick lets these snakes slowly make it up structures that would otherwise be too wide to climb."
              date="June 2,2021"
            />
            <Snakebite
              img="https://www.sciencenewsforstudents.org/wp-content/uploads/2021/01/010821_mt_climbing-snakes_feat-1030x580.jpg"
              title="Coral Snakes"
              des="Snakes do a lot more than slither. Some swim, while others sidewind across sand. Some snakes even fly. The brown tree snake has a brand-new trick for climbing trees. It wraps its tail around a tree or pole in a lasso-like grip. Then it wriggles to propel itself up. It isn’t easy for the snakes. But it works. And this looping trick lets these snakes slowly make it up structures that would otherwise be too wide to climb."
              date="June 2,2021"
            />

            {/* pagination starts  */}
            <div className="my-4 flex items-center">
              <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">
                1
              </p>
              <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">
                2
              </p>
              <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">
                3
              </p>
              <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">
                4
              </p>
            </div>
            {/* pagination ends  */}
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

export default Snakes_and_snakebites;
