import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useToken from "@provider/AuthProvider";
import { updateEvent } from "@requests/events";
import { DashCardContext } from "@template/DashCard2";
import moment from "moment";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from "react-toast-notifications";

function UpdateEvents() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [event, setEvent] = useState(updateData);
  const [preview, setPreview] = useState(event.image);

  const [startDate, setStartDate] = useState(
    new Date(moment(event.start_date).format("YYYY-MM-DD"))
  );
  const [endDate, setEndDate] = useState(
    new Date(moment(event.end_date).format("YYYY-MM-DD"))
  );

  const [description, setDescription] = useState(event.description);

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    if (!moment(startDate).isBefore(endDate)) {
      addToast("Start date should be before end date ", {
        appearance: "error",
      });
      return;
    }

    form.append("start_date", startDate);
    form.append("end_date", endDate);
    form.append("description", description);

    const res = await updateEvent(
      { data: form, event_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast(
        "Event Image successfully updated",
        { appearance: "success" },
        () => {
          htmlform.reset();
          const newdata = res.data.data;

          setEvent(newdata);
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
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            defaultValue={event.title}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Event Location</label>
          <input
            type="text"
            name="location"
            defaultValue={event.location}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Start Date</label>
          <DatePicker
            className=" p-2 border-2 border-gray-100 rounded"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>End Date</label>
          <DatePicker
            className=" p-2 border-2 border-gray-100 rounded"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>

      <div className=" md:w-full md:flex my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Event Time</label>
          <input
            type="text"
            name="time"
            defaultValue={event.time}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Event Image</label>
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

export default UpdateEvents;
