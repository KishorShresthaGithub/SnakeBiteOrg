import useToken from "@provider/AuthProvider";
import { updateNav } from "@requests/nav";
import { DashCardContext } from "@template/DashCard";
import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Editor from "../../Editor";

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
      <h2 className="font-semibold text-xl p-4">For Id: {updateData.id}</h2>
      <hr className="my-5" />

      <Editor
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
        }}
      />

      <button className="btn-primary w-28 mt-4" onClick={handlePageUpdate}>
        Submit
      </button>
    </>
  );
}
