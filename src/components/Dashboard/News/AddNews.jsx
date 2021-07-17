import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function AddNews() {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  return (
    <form action="">
      <div className="w-80 md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4 card w-full px-2 py-4">
          <label htmlFor="category">Add News Category</label>
          <input
            type="text"
            name=""
            id="category"
            className="md:w-80 p-2 border-2 border-gray-100 rounded"
          />
          <button className="btn-primary w-28 mt-4">Submit</button>
        </div>
        <div className="flex flex-col mb-2 card px-2 w-full py-4 ">
          <label htmlFor="sCategory">Select News Category</label>
          <select
            name=""
            id="sCategory"
            className="md:w-80 p-2 border-2 border-gray-100 rounded"
          >
            <option value="">Category 1</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col mr-4 px-2 py-2">
        <label htmlFor="title">Add News Title</label>
        <input
          type="text"
          name=""
          id="title"
          className="md:w-full p-2 border-2 border-gray-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2">
        <label htmlFor="img">Add News Title Image</label>
        <input
          type="file"
          name=""
          id="img"
          className="w-80 p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Add News Description</label>
        <ReactQuill
          placeholder="Write your News Article here"
          modules={AddNews.modules}
          formats={AddNews.formats}
          onChange={handleBody}
          value={body}
        />
      </div>
    </form>
  );
}
AddNews.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

AddNews.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

export default AddNews;
