import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function AddSnakes() {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  return (
    <form action="">
      <div className="flex flex-col mr-4 px-2 py-2">
        <label htmlFor="title">Add Snake Name</label>
        <input
          type="text"
          name=""
          id="title"
          className="md:w-full p-2 border-2 border-gray-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2">
        <label htmlFor="img">Add Snake Image</label>
        <input
          type="file"
          name=""
          id="img"
          className="w-80 p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Add Snakebite Description</label>
        <ReactQuill
          placeholder="Write about snakebite description : symptoms/first aid etc"
          modules={AddSnakes.modules}
          formats={AddSnakes.formats}
          onChange={handleBody}
          value={body}
        />
      </div>

      <button className="btn-primary">Submit</button>
    </form>
  );
}
AddSnakes.modules = {
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

AddSnakes.formats = [
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

export default AddSnakes;
