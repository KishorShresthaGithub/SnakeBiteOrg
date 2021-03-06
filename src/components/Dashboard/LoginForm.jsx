import useToken from "@provider/AuthProvider";
import { login } from "@requests/auth";
import { convertFormData } from "@requests/config";
import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import loader from "@images/loader.gif";

function LoginForm() {
  const { access_token, setToken } = useToken();

  const history = useHistory();

  const [passwordShow, setPasswordShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { addToast } = useToasts();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.target);
    const input = convertFormData(form);

    login(input, addToast)
      .then((res) => {
        if (res) {
          const dt = res.data.data;
          setToken(dt.access_token);
          addToast("Login Successful", { appearance: "success" });
          history.push("/d_home");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    if (access_token) {
      history.push("/d_home");
    }
  }, [history, access_token]);

  return (
    <div className="p-4 md:px-10">
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="email"
          className="h-10 p-4 w-full mt-2 rounded shadow mb-4"
          id="username"
        />
        <label htmlFor="username">Password</label>
        <input
          type={passwordShow ? "password" : "text"}
          name="password"
          title="Click textbox to show password"
          onClick={() => {
            setPasswordShow(!passwordShow);
          }}
          className="h-10 p-4 w-full mt-2 rounded shadow mb-8"
          id="password"
        />

        <button
          className="btn-primary"
          style={{ display: "flex", alignItems: "center" }}
        >
          LOG IN{" "}
          <img
            src={loader}
            style={{ width: "50px", display: isLoading ? "block" : "none" }}
            alt=""
          />{" "}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
