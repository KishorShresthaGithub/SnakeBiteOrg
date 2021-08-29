import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getEvents, getUpcoming } from "@requests/events";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { getDistricts } from "@requests/avc";
import { getContacts } from "../../requests/contact";
import useToken from "@provider/AuthProvider";

function DHome() {
  const [events, setEvents] = useState([]);
  const [avcCount, setAVCCount] = useState(0);
  const [upcoming, setUpcoming] = useState({});
  const [messages, setMessages] = useState(0);
  const { access_token } = useToken();

  function renderEventContent(eventInfo) {
    return <span className="px-3 py-1">{eventInfo.event.title}</span>;
  }

  const getData = useCallback((signal) => {
    let events = getEvents({ signal }).catch(console.log);
    let avc = getDistricts({ signal }).catch(console.log);
    let upcoming = getUpcoming({ signal }).catch(console.log);
    let contacts = getContacts({ signal, accesstoken: access_token }).catch(
      console.log
    );

    Promise.all([events, avc, upcoming, contacts])
      .then((res) => {
        let [ev, avc, up, contact] = res;

        setMessages(contact?.data?.data?.length);

        //getting events for calendar
        let event = ev?.data?.data;
        if (event?.length) {
          const newevent = event?.map((data) => {
            return {
              ...data,
              title: data.title,
              start: data.start_date,
              end: data.end_date,
              allDay: true,
            };
          });
          setEvents(newevent);
        }

        //getting total count of anti venom centers
        avc = avc?.data?.data;

        if (avc?.length) {
          let count = avc
            ?.map((res) => res.count)
            .reduce((acc, item) => acc + item);

          setAVCCount(count);
        }
        //getting upcoming event
        let upevent = up?.data?.data;

        if (upevent?.length) setUpcoming(upevent[0]);
        else setUpcoming({ title: "None" });
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getData(signal);

    return () => {
      signal.cancel();
    };
  }, [getData]);

  return (
    <>
      <div className="bg-gray py-10 md:h-screen">
        <div className="container mx-auto px-4">
          <h1 className="mt-8 text-3xl">Welcome to Snakebite Nepal</h1>
          <p className="font-bold text-md mt-2 flex item  s-center">
            <FaRegCalendarAlt className="mr-2" /> {new Date().toDateString()}
          </p>
          {/* add and view slider  */}
          <div className="grid md:grid-cols-5 gap-4 mt-10">
            <div className="col-span-3">
              <div className="card bg-white p-4">
                <Link to="">
                  <h1 className="font-bold text-lg">UPCOMING EVENT</h1>

                  <p className="font-semibold text-sm">{upcoming.title}</p>
                </Link>
              </div>

              <div className="card bg-white p-4">
                <Link to="">
                  <h1 className="font-bold text-lg">RECENT STORIES</h1>

                  <p className="font-semibold text-sm">
                    International Conference in Kathmandu 2019{" "}
                  </p>
                </Link>
              </div>

              <div className="card bg-white p-4">
                <Link to="">
                  <h1 className="font-bold text-lg">Total Antivenom Centers</h1>

                  <p className="font-semibold text-3xl">{avcCount}</p>
                </Link>
              </div>

              <div className="card bg-white p-4">
                <Link to="">
                  <h1 className="font-bold text-lg">Messages</h1>

                  <p className="font-semibold text-3xl">{messages}</p>
                </Link>
              </div>
            </div>

            <div className="col-span-2 text-center card p-4 bg-white w-80 h-screen md:w-full md:h-full">
              <iframe
                title="calendar"
                src="https://www.hamropatro.com/widgets/calender-medium.php"
                frameBorder="0"
                scrolling="yes"
                marginWidth="0"
                marginHeight="0"
                allowtransparency="true"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="gap-4 my-10">
            <FullCalendar
              eventBorderColor="black"
              events={events}
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin, interactionPlugin]}
              eventContent={renderEventContent}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DHome;
