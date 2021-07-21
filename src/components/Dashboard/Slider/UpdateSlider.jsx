import useToken from "@provider/AuthProvider";
import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { updateSlider } from "@requests/sliders";
import { DashCardContext } from "@template/DashCard2";

function UpdateSlider() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [slider, setSlider] = useState(updateData);
  const [preview, setPreview] = useState(slider.image);

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const res = await updateSlider(
      { data: form, slider_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Slider updated", { appearance: "success" });
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
          defaultValue={slider.caption}
          className="p-2 border-2 border-gray-100 rounded"
        />
      </div>
      <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
        <label htmlFor="position">Position</label>
        <input
          type="number"
          min="1"
          name="position"
          defaultValue={slider.position}
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
        <div className="flex">{renderPreview()}</div>
      </div>

      <button className="btn-primary w-32">Submit</button>
    </form>
  );
}

export default UpdateSlider;
