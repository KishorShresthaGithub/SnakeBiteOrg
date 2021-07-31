import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { saveSummaryReport } from "@requests/summaryreport";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from "react-toast-notifications";

function AddSummaryReport() {
  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);
    form.append("description", description);
    form.append("show", isChecked);

    const res = await saveSummaryReport(
      { data: form, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast(
        "Summary Report successfully added",
        { appearance: "success" },
        () => {
          htmlform.reset();
          setDescription("");
        }
      );
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Report Title</label>
          <input
            type="text"
            name="title"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex  mb-2 md:mr-4  w-full px-2 py-4">
          <label>Show</label>
          <input
            type="checkbox"
            name="show"
            className=" p-2 m-2 border-2 border-gray-100 rounded"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>PDF</label>
          <input
            type="file"
            name="pdf_link"
            accept="application/pdf"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className="flex flex-col mb-2 mr-4 px-2 py-2 w-80 md:w-full">
        <label htmlFor="img">Description </label>

        <CKEditor
          editor={ClassicEditor}
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

export default AddSummaryReport;
