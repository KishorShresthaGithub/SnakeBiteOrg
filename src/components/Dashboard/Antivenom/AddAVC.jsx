import useToken from "@provider/AuthProvider";
import { saveAVC } from "@requests/avc";
import { convertFormData } from "@requests/config";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useToasts } from "react-toast-notifications";
import options from "./districts";

function AddAVC() {
  const { access_token } = useToken();
  const { addToast } = useToasts();

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);
    const input = convertFormData(form);

    const res = await saveAVC(
      { data: input, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("Event successfully added", { appearance: "success" }, () => {
        htmlform.reset();
      });
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <div className=" md:w-full md:flex-row my-2">
        <div className="flex flex-col mb-2 md:mr-4 w-full px-2 py-4">
          <label>Anti Venom Center Name</label>
          <input
            type="text"
            name="name"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Anti Venom Center Contact Detail</label>
          <input
            type="text"
            name="contact"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Anti Venom Center Map Location</label>
          <input
            type="text"
            name="map_location"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Anti Venom Center District</label>
          <Select name="district" options={options} />
        </div>
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default AddAVC;
