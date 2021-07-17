import React from "react";
import "react-quill/dist/quill.snow.css";

function AddImpLink() {
  return (
    <form action="">
      <div className="flex flex-col mr-4 px-2 py-2">
        <label htmlFor="title">Add Link Title</label>
        <input
          type="text"
          name=""
          id="title"
          className="md:w-full p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mr-4 px-2 py-2">
        <label htmlFor="title">Add Link URL</label>
        <input
          type="text"
          name=""
          id="title"
          className="md:w-full p-2 border-2 border-gray-100 rounded"
        />
      </div>

      <button className="btn-primary">Submit</button>
    </form>
  );
}
export default AddImpLink;
