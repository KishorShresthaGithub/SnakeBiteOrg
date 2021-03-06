import useToken from "@provider/AuthProvider";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from "react-toast-notifications";
import { updateUser, validateToken } from "@requests/auth";
import { convertFormData } from "@requests/config";

function UserEdit() {
  const { updateData } = useContext(DashCardContext);

  const { access_token } = useToken();
  const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(updateData);

  const getUser = useCallback(
    async (signal) => {
      validateToken({ accessToken: access_token, signal })
        .then((res) => {
          const data = res?.data?.data;

          setUser(data);
        })
        .catch(console.log);
    },
    [access_token]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getUser(signal);
    return () => {
      signal.cancel();
    };
  }, [getUser]);

  const submitForm = async (e) => {
    e.preventDefault();

    const htmlform = e.target;
    const form = new FormData(htmlform);

    const input = convertFormData(form);
   
    const res = await updateUser(
      { data: input, string_id: user.string_id, accessToken: access_token },
      addToast
    ).catch(console.log);

    if (res) {
      addToast("User updated", { appearance: "success" });
    }
  };

  return (
    <>
      <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
        <div className=" md:w-full md:flex my-2">
          <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
            <label>User First Name</label>
            <input
              type="text"
              name="first_name"
              defaultValue={user.first_name}
              className=" p-2 border-2 border-gray-100 rounded"
            />
          </div>

          <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
            <label>User Last Name</label>
            <input
              type="text"
              name="last_name"
              defaultValue={user.last_name}
              className=" p-2 border-2 border-gray-100 rounded"
            />
          </div>
        </div>

        <div className=" md:w-full md:flex my-2">
          <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
            <label>User Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user.email}
              className=" p-2 border-2 border-gray-100 rounded"
            />
          </div>

          <div className="flex flex-col mb-2 md:mr-4  w-full px-2 py-4">
            <label>User Password</label>
            <input
              type="text"
              name="password"
              className=" p-2 border-2 border-gray-100 rounded"
            />
          </div>
        </div>

        <button className="btn-primary w-28 mt-4">Update</button>
      </form>
    </>
  );
}

export default UserEdit;
