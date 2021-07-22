import { GalleryImageContext } from "@pages/Dashboard/DGallery";
import useToken from "@provider/AuthProvider";
import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { updateSingleGallery } from "@requests/gallery";
import { DashCardContext } from "@template/DashCard";
import { BiArrowBack } from "react-icons/bi";

function UpdateGalleryImage() {
  const { updateData, setLayout } = useContext(DashCardContext);
  const { singleGallery } = useContext(GalleryImageContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const [preview, setPreview] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const res = await updateSingleGallery(
      {
        data: form,
        gallery_id: updateData.id,
        gallery_image_id: singleGallery.id,
        accesstoken: access_token,
      },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Gallery Image Updated", { appearance: "success" });
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
    <>
      <h2>Gallery ID: {updateData.id}</h2>
      <h3>Gallery Image ID : {singleGallery.id}</h3>

      <button
        className="flex items-center bg-blue-100 p-3 my-3 text-gray-7 00"
        onClick={() => setLayout("view_single_gallery")}
      >
        <BiArrowBack /> Go to Gallery Images
      </button>

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
    </>
  );
}

export default UpdateGalleryImage;
