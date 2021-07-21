import useToken from "@provider/AuthProvider";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { saveSlider } from "@requests/sliders";

function AddSlider() {
  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [preview, setPreview] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const res = await saveSlider(
      { data: form, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast(
        "Slider Image successfully added",
        { appearance: "success" },
        () => {
          htmlform.reset();
          setPreview("");
        }
      );
    }
  };
  const previewImage = (e) => {
    const files = e.target.files;

    if (files?.length) {
      const arr = window.URL.createObjectURL(files[0]);

      setPreview(arr);
    }
  };

  const renderPreview = () => {
    if (preview) {
      return (
        <img
          style={{ width: "200px", height: "auto", paddingRight: "20px" }}
          src={preview}
          alt={`preview `}
        />
      );
    } else {
      return "";
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
        <label htmlFor="caption">Caption</label>
        <input
          type="text"
          name="caption"
          id="caption"
          className="p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
        <label htmlFor="position">Position</label>
        <input
          type="number"
          min="1"
          name="position"
          id="position"
          className="p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
        <label htmlFor="file">Upload Image (1920*1080) </label>
        <input
          type="file"
          onChange={(e) => previewImage(e)}
          name="image"
          id="file"
          className="p-2 border-2 border-gray-100 rounded"
        />
        <div className="flex ">{renderPreview()}</div>
      </div>

      <button className="btn-primary w-32">Submit</button>
    </form>
  );
}

export default AddSlider;
