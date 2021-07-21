import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { DashCardContext } from "@template/DashCard2";
import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { updateNav } from "@requests/nav";
import "@css/utils.scss";

export default function LinkPage() {
  const { updateData } = useContext(DashCardContext);
  const { addToast } = useToasts();
  const [data, setData] = useState(updateData.page);
  const { access_token } = useToken();

  const handlePageUpdate = () => {
    updateNav({
      data: { page: data },
      nav_id: updateData.id,
      accesstoken: access_token,
    })
      .then((res) => {
        console.log(res.data.data);
        addToast("Page Successfully updated", { appearance: "success" });
      })
      .catch(console.log);
  };

  return (
    <>
      <sub className="text-red-400">
        *Content updates after every 3 seconds you stop editing
      </sub>

      <hr className="my-5" />

      <CKEditor
        editor={ClassicEditor}
        data={updateData.page}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("data", data);
          setData(data);
        }}
      />

      <button className="btn-primary w-28 mt-4" onClick={handlePageUpdate}>
        Submit
      </button>
    </>
  );
}
