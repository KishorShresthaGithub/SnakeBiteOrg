import React, { useState } from "react";
import { convertFormData } from "@requests/config";
import { saveContact } from "@requests/contact";
import { useToasts } from "react-toast-notifications";

function ContactForm() {
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(e.target);

    const input = convertFormData(data);

    saveContact({ data: input }, addToast)
      .then(() => {
        addToast("Contact submitted", { appearance: "success" });
        form.reset();
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="name"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <label htmlFor="name">Address</label> <br />
          <input
            type="text"
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="address"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="email"
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="email"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <label htmlFor="name">Phone no</label>
          <br />
          <input
            type="text"
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="phone"
          />
        </div>
        <div className="col-span-2 mt-5">
          <textarea
            rows="4"
            name="message"
            className="p-4 rounded shadow w-full"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn-primary w-40">SEND MESSAGE</button>
      </div>
    </form>
  );
}

export default ContactForm;
