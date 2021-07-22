import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { updateSnake } from "@requests/snakes";
import { DashCardContext } from "@template/DashCard";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { useToasts } from "react-toast-notifications";

function UpdateSnakebite() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [snakes, setSnakes] = useState(updateData);

  const [preview, setPreview] = useState(snakes.image);
  const [description, setDescription] = useState(snakes.description);

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);
    form.append("description", description);

    const res = await updateSnake(
      { data: form, snakes_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Snake  Updated", { appearance: "success" });
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
          <label>Snake Name</label>
          <input
            type="text"
            name="title"
            defaultValue={snakes.name}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Snakes Scientific Name</label>
          <input
            type="text"
            name="scientific_name"
            defaultValue={snakes.scientific_name}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Snake Image</label>
          <input
            type="file"
            onChange={previewImage}
            name="image"
            className=" p-2 border-2 border-gray-100 rounded"
          />
          {renderPreview()}
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

export default UpdateSnakebite;
