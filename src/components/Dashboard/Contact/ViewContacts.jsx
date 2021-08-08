import useToken from "@provider/AuthProvider";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";

import { getContacts } from "@requests/contact";
import DataTable from "../../DataTable";

function ViewContacts() {
  const { access_token } = useToken();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getContacts({ signal, accesstoken: access_token })
      .then((res) => {
        const events = res.data.data;
        if (events) setContacts(events);
      })
      .catch(console.log);

    return () => {
      signal.cancel();
    };
  }, [access_token]);

  const columns = [
    { title: "Contact", field: "id", width: "10%" },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Email",
      render: (row) => `mailto:${row.email}`,
    },
    {
      title: "Phone",
      field: "phone",
    },
  ];

  return (
    <>
      <DataTable
        title="Contacts"
        detailPanel={[
          {
            tooltip: "Show Message",
            render: (rowData) => {
              return (
                <div
                  style={{ padding: "30px" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(rowData.message),
                  }}
                ></div>
              );
            },
          },
        ]}
        columns={columns}
        data={contacts}
      />
    </>
  );
}

export default ViewContacts;
