import useToken from "@provider/AuthProvider";
import { updateAVC } from "@requests/avc";
import { DashCardContext } from "@template/DashCard";
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useToasts } from "react-toast-notifications";
import options from "./districts";

function UpdateAVC() {
  const { updateData } = useContext(DashCardContext);
  console.log(updateData);

  const { access_token } = useToken();
  const { addToast } = useToasts();

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const res = await updateAVC(
      { data: form, avc_id: updateData.id, accesstoken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("AVC  successfully updated", { appearance: "success" }, () => {
        htmlform.reset();
      });
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <div className=" md:w-full md:flex-row w-60 my-2">
        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>Anti Venom Center Name</label>
          <input
            type="text"
            defaultValue={updateData.name}
            name="name"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>AntiVenom Center Contact Detail</label>
          <input
            type="text"
            defaultValue={updateData.contact}
            name="contact"
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>AntiVenom Center Map Location</label>
          <input
            type="text"
            name="map_location"
            defaultValue={updateData.map_location}
            className=" p-2 border-2 border-gray-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
          <label>AntiVenom Center District</label>
          <Select
            defaultValue={{
              label: updateData.district,
              value: updateData.district,
            }}
            options={options}
          />
        </div>
      </div>

      <button className="btn-primary w-28 mt-4">Submit</button>
    </form>
  );
}

export default UpdateAVC;
