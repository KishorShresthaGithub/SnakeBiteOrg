import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { NavContext } from "@provider/NavProvider";
import { convertFormData } from "@requests/config";
import { updateNav } from "@requests/nav";
import { DashCardContext } from "@template/DashCard2";
import { useContext, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

const UpdateLinks = (props) => {
  const { updateData } = useContext(DashCardContext);

  const nav = useContext(NavContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const [links, setLinks] = useState(nav.links);
  const [page, setPage] = useState(updateData.page);

  const [parentLink, setSelect] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const htmlform = e.target;
    const form = new FormData(htmlform);

    form.append("page", page);

    const input = convertFormData(form);
    // ES6 Syntax

    // eslint-disable-next-line eqeqeq
    if (parentLink == 0) {
      input.parent_link = null;
    } else {
      input.parent_link = parseInt(parentLink);
    }

    const res = await updateNav(
      { data: input, nav_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast(res.data.message, { appearance: "success" });
    }
  };

  useEffect(() => {
    if (updateData) {
      setSelect(updateData.parent_link || "");
      setPage(updateData.page);
    }
    if (nav?.links) {
      setLinks(nav?.links.filter((res) => res.id !== updateData.id));
    }
  }, [access_token, nav?.links, updateData]);

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Link Title {parentLink} </label>
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
            defaultValue={updateData.link.replace(
              updateData.parent?.link + "/",
              ""
            )}
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
            <option value="0">No parent</option>
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
        <CKEditor
          data={page}
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPage(data);
          }}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
};

export default UpdateLinks;
