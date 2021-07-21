import useToken from "@provider/AuthProvider";
import React, { useContext, useState } from "react";

import { useToasts } from "react-toast-notifications";
import { addToGallery } from "@requests/gallery";
import { GalleryImageContext } from "@pages/Dashboard/DGallery";

function AddGalleryImage() {
  const { singleGallery } = useContext(GalleryImageContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const [preview, setPreview] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const res = await addToGallery(
      { data: form, gallery_id: singleGallery.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Event successfully added", { appearance: "success" }, () => {
        htmlform.reset();
        setPreview("");
      });
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
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Gallery Image Image</label>
          <input
            type="file"
            onChange={previewImage}
            name="image"
            className=" p-2 border-2 border-gray-100 rounded"
          />
          {renderPreview()}
        </div>
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default AddGalleryImage;
