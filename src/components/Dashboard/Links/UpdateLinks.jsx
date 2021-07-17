import { useContext, useEffect, useState } from "react";
import { DashCardContext } from "@template/DashCard";
import { convertFormData } from "@requests/config";
import { updateNav } from "@requests/nav";
import useToken from "@provider/AuthProvider";
import { useToasts } from "react-toast-notifications";
import { NavContext } from "@provider/NavProvider";
import ReactQuill from "react-quill";
import { formats, modules } from "../../../extra/quill";


const UpdateLinks = (props) => {
  const { updateData } = useContext(DashCardContext);

  const nav = useContext(NavContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const [page, setPage] = useState("");
  const [parentLink, setSelect] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;

    const form = new FormData(htmlform);
    form.append("page", page);
    if (parentLink && parentLink !== "")
      form.append("parent_link", parseInt(parentLink));

    const input = convertFormData(form);

    const res = await updateNav(
      { data: input, nav_id: updateData.id, accesstoken: access_token },
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

  useEffect(() => {
    if (updateData) {
      /*  setSelect(updateData.parent_link);
      setBody(updateData.body); */
      setPage(updateData.page);
    }
  }, [access_token, updateData]);

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link Title </label>
          <input
            defaultValue={updateData.title}
            type="text"
            name="title"
            id="category"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link URL</label>
          <input
            defaultValue={updateData.link}
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
            defaultValue={updateData.position}
            type="number"
            min="1"
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
            {nav?.links.map((data) => (
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
          onChange={(e) => setPage(e)}
          formats={formats}
          modules={modules}
          defaultValue={page}
          value={page}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
};

export default UpdateLinks;
