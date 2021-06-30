import React, { useState } from "react";
import ViewBook from "./subcomponents/ViewBook";
import ViewLink from "./subcomponents/ViewLink";
import ViewSnakes from "./subcomponents/ViewSnakes";

function ViewSnakebite() {
  const [layout, setLayout] = useState("snakebite");
  let TabLayout;
  if (layout === "snakebite") {
    TabLayout = (
      <div className="py-10">
        <h1 className="font-semibold">View {layout}</h1>
        <ViewSnakes />
      </div>
    );
  }
  if (layout === "book") {
    TabLayout = (
      <div className="py-10">
        <h1 className="font-semibold">View {layout}</h1>
        <ViewBook />
      </div>
    );
  }
  if (layout === "link") {
    TabLayout = (
      <div className="py-10">
        <h1 className="font-semibold">View {layout}</h1>
        <ViewLink />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center">
        <button
          className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
          onClick={() => {
            setLayout("snakebite");
          }}
        >
          View Snakes & Snakebite
        </button>
        <button
          className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
          onClick={() => {
            setLayout("book");
          }}
        >
          View Books
        </button>
        <button
          className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
          onClick={() => {
            setLayout("link");
          }}
        >
          View Important Links
        </button>
      </div>
      {TabLayout}
    </div>
  );
}

export default ViewSnakebite;
