import React from "react";

function LoginForm() {
  return (
    <div className="p-4 md:px-10">
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          className="h-10 p-4 w-full mt-2 rounded shadow mb-4"
          id="username"
        />
        <label htmlFor="username">Password</label>
        <input
          type="password"
          className="h-10 p-4 w-full mt-2 rounded shadow mb-8"
          id="password"
        />

        <button className="btn-primary">LOG IN</button>
      </form>
    </div>
  );
}

export default LoginForm;
