import React from "react";

function AddSlider() {
  return (
    <form action="" className="flex flex-col">
      <label htmlFor="file">Upload Image (1920*1080) </label>
      <input
        type="file"
        name=""
        id="file"
        className="h-10 py-1 w-80 mt-2 rounded border-2 border-gray-100 shadow-md mb-4"
      />
      <button className="btn-primary w-32">Submit</button>
    </form>
  );
}

export default AddSlider;
