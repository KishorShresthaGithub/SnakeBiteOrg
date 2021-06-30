import React from "react";
import "../../../../../node_modules/react-quill/dist/quill.snow.css";
function AddBook() {
  return (
    <form action="">
      <div className="flex flex-col mr-4 px-2 py-2">
        <label htmlFor="title">Add Book Name</label>
        <input
          type="text"
          name=""
          id="title"
          className="md:w-full p-2 border-2 border-gray-100 rounded"
        />
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2">
        <label htmlFor="img">Add Book Cover Image</label>
        <input
          type="file"
          name=""
          id="img"
          className="w-80 p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 mr-4 px-2 py-2">
        <label htmlFor="img">Add Book File</label>
        <input
          type="file"
          name=""
          id="img"
          className="w-80 p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Add Book Authors</label>
        <textarea
          name=""
          id=""
          rows="5"
          className="border border-black p-2"
        ></textarea>
      </div>

      <button className="btn-primary">Submit</button>
    </form>
  );
}
export default AddBook;
