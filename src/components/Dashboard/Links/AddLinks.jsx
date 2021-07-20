import { formats, modules } from "@extra/quill";
import useToken from "@provider/AuthProvider";
import { NavContext } from "@provider/NavProvider";
import { convertFormData } from "@requests/config";
import { saveNav } from "@requests/nav";
import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useToasts } from "react-toast-notifications";

function AddLinks() {
  const { links } = useContext(NavContext);

  const [page, setPage] = useState("");
  const [parentLink, setSelect] = useState("");

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const handleBody = (e) => {
    setPage(e);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;

    const form = new FormData(htmlform);
    form.append("page", page);
    if (parentLink && parentLink !== "")
      form.append("parent_link", parseInt(parentLink));

    const input = convertFormData(form);

    const res = await saveNav(
      { data: input, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Link successfully added", { appearance: "success" }, () => {
        htmlform.reset();
        setPage("");
        setSelect("");
      });
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link Title</label>
          <input
            type="text"
            name="title"
            id="category"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link URL</label>
          <input
            type="text"
            name="link"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link Position</label>
          <input
            type="text"
            name="position"
            id="category"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Parent link</label>
          <select
            value={parentLink}
            onChange={(e) => setSelect(e.target.value)}
            className=" p-2 border-2 border-gray-100 rounded"
            id=""
          >
            <option value=""> </option>
            {links.map((data) => (
              <option value={data.id} key={data.id}>
                {data.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Page </label>

        <ReactQuill
          placeholder="Write your News Article here"
          onChange={handleBody}
          formats={formats}
          modules={modules}
          value={page}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default AddLinks;
