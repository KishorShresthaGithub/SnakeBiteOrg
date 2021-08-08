import useToken from "@provider/AuthProvider";
import { saveGallery } from "@requests/gallery";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import Editor from "../../Editor";

function AddGallery() {
  const { access_token } = useToken();
  const { addToast } = useToasts();

  const [preview, setPreview] = useState([]);
  const [description, setDescription] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    form.append("description", description);

    const res = await saveGallery(
      { data: form, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Gallery successfully added", { appearance: "success" }, () => {
        htmlform.reset();
        setPreview("");
      });
    }
  };

  const previewImage = (e) => {
    const files = e.target.files;

    if (files?.length) {
      const arr = Array.from(files).map((res) =>
        window.URL.createObjectURL(res)
      );
      setPreview(arr);
    }
  };

  const renderPreview = () => {
    if (preview?.length) {
      return preview.map((res, index) => (
        <img
          key={index}
          style={{
            width: "200px",
            height: "auto",
            marginRight: "20px",
            marginTop: "10px",
          }}
          src={res}
          alt={`preview ${index}`}
        />
      ));
    } else {
      return "";
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Gallery Title</label>
          <input
            type="text"
            name="title"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>New Image</label>
          <input
            type="file"
            multiple
            onChange={previewImage}
            name="images"
            className=" p-2 border-2 border-gray-100 rounded"
          />
          <div className="flex flex-row flex-wrap my-4"> {renderPreview()}</div>
        </div>
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Description </label>
        <Editor
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default AddGallery;
