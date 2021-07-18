import useToken from "@provider/AuthProvider";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import { useToasts } from "react-toast-notifications";
import { formats, modules } from "@src/extra/quill";
import { saveEvent } from "@requests/events";

function AddEvents() {
  const { access_token } = useToken();
  const { addToast } = useToasts();
  const [preview, setPreview] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const onChangeText = (text) => {
  
    text = text !== "<p><br></p>" ? text : "";
    setDescription(text);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    form.append("start_date", startDate);
    form.append("end_date", endDate);
    form.append("description", description);

    const res = await saveEvent(
      { data: form, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Event successfully added", { appearance: "success" }, () => {
        htmlform.reset();
        setPreview("");
      });
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
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Event Location</label>
          <input
            type="text"
            name="location"
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
        <label htmlFor="img">Page </label>

        <ReactQuill
          placeholder="Write your News Article here"
          onChange={onChangeText}
          formats={formats}
          modules={modules}
        />
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default AddEvents;
