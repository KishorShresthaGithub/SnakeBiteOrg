import useToken from "@provider/AuthProvider";
import { updateNews } from "@requests/news";
import { formats, modules } from "@src/extra/quill";
import { DashCardContext } from "@template/DashCard";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useToasts } from "react-toast-notifications";

function UpdateNews() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [news, setNew] = useState(updateData);

  const [preview, setPreview] = useState(news.image);
  const [description, setDescription] = useState(news.description);

  const onChangeText = (text) => {
    text = text !== "<p><br></p>" ? text : "";
    setDescription(text);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    form.append("description", description);

    const res = await updateNews(
      { data: form, news_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast(
        "New Image successfully updated",
        { appearance: "success" },
        () => {
          htmlform.reset();
          const newdata = res.data.data;

          setNew(newdata);

          setPreview(newdata.image);
        }
      );
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
          <label>News Title</label>
          <input
            type="text"
            name="title"
            defaultValue={news.title}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>New Image</label>
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
        <label htmlFor="img">Page </label>

        <ReactQuill
          placeholder="Write your News Article here"
          onChange={onChangeText}
          formats={formats}
          modules={modules}
          defaultValue={news.description}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default UpdateNews;
