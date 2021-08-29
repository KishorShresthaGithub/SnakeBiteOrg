import { convertFormData } from "@requests/config";
import { saveContact } from "@requests/contact";
import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { useToasts } from "react-toast-notifications";

function ContactForm({ intl }) {
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
          <input
            type="text"
            placeHolder={intl.formatMessage({
              id: "contact.name",
              defaultMessage: "Name",
            })}
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="name"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <input
            type="text"
            placeHolder={intl.formatMessage({
              id: "contact.address",
              defaultMessage: "Address",
            })}
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="address"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <input
            type="email"
            placeHolder={intl.formatMessage({
              id: "contact.email",
              defaultMessage: "Email",
            })}
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="email"
          />
        </div>
        <div className="col-span-2 w-80 md:w-96 md:col-span-1">
          <input
            type="text"
            placeHolder={intl.formatMessage({
              id: "contact.phone",
              defaultMessage: "Phone Number",
            })}
            className="h-10 p-4 w-full mt-2 rounded shadow"
            name="phone"
          />
        </div>
        <div className="col-span-2 mt-5">
          <textarea
            rows="4"
            name="message"
            className="p-4 rounded shadow w-full"
            placeholder={intl.formatMessage({
              id: "contact.message",
              defaultMessage: "Your Message",
            })}
          ></textarea>
        </div>
        <button className="btn-primary w-40 col-span-2 self-center">
          <FormattedMessage
            id="contact.send_message"
            defaultMessage="SEND MESSAGE"
          />
        </button>
      </div>
    </form>
  );
}

export default injectIntl(ContactForm);
