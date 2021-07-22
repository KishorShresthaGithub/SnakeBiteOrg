import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { convertFormData } from "@requests/config";
import { updateGallery } from "@requests/gallery";
import { DashCardContext } from "@template/DashCard";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from "react-toast-notifications";

function UpdateGallery() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [description, setDescription] = useState(updateData.description);

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);
    form.append("description", description);

    const input = convertFormData(form);

    const res = await updateGallery(
      { data: input, gallery_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Gallery Updated", { appearance: "success" });
    }
  };

  return (
    <>
      <h2>Gallery ID: {updateData.id}</h2>

      <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
        <div className=" md:w-full md:flex my-2">
          <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
            <label>Gallery Title</label>
            <input
              type="text"
              name="title"
              defaultValue={updateData.title}
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
    </>
  );
}

export default UpdateGallery;
