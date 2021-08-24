import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import ContactForm from "../components/Front/ContactForm.jsx";
import AVCenters from "../components/Front/Home/AVCenters.jsx";
import HomeSlider from "../components/Front/Home/HomeSlider.jsx";
import HomeSnakes from "../components/Front/Home/HomeSnakes.jsx";
import UpcomingEvent from "../components/Front/Home/UpcomingEvent.jsx";
import Sponsers from "../components/Front/Sponsers.jsx";

function Home() {
  /* const newsData = [
    {
      date: "19 June 2021",
      category: "snakes",
      title: "King Cobra Sighted In Himachal Pradesh For The First Time",
    },
    {
      date: "19 June 2021",
      category: "awareness",
      title: '"Giant" Snake Slithers Into House. How It Should be Captured ?',
    },
    {
      date: "19 June 2021",
      category: "research",
      title:
        'Researchers Find 2 New Multi Drug-Resistant Bacteria In Scat Of "Vine Snake"',
    },
    {
      date: "18 June 2021",
      category: "snakebites",
      title:
        "Snake bite is a neglected public health issue in many tropical and subtropical countries.",
    },
  ]; */

  return (
    <>
      <HomeSlider />
      <div
        className="pt-6 px-4 flex justify-center  w-full"
        style={{
          marginTop: "-7px",
          background:
            "linear-gradient(76deg, rgba(255,187,0,1) 0%, rgba(225,142,0,1) 21%, rgba(225,142,0,1) 36%, rgba(255,187,0,1) 69%, rgba(255,187,0,1) 87%)",
        }}
      >
        {/* news container starts  */}
        <div className="flex justify-center items-center mb-20 md:mb-15 space-x-4 w-10/12">
          <div className="w-7/12 h-96 p-4 flex justify-end">
            <UpcomingEvent />
          </div>

          <div className="w-5/12 h-96 p-4 ">
            <iframe
              title="snakebite"
              className="w-full h-96"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSnakebiteInNepal%20&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            ></iframe>
          </div>
        </div>
        {/* news container ends  */}
      </div>

      {/* <div className="order-first md:order-last md:col-span-2">
        <UpcomingEvent />
      </div> */}

      {/* news container ends  */}

      {/* about us container starts  */}
      <div className="bg_lightGrey py-10">
        <div className="container mx-auto p-y-5">
          <p className="p-4 md:py-10 font-large">Who we are ? </p>
          <div className="bg_white p-8 md:p-12 rounded">
            <h4 className="font-medium text-lg font-bold">SNAKEBITE NEPAL</h4>
            <p className="mt-2 text-primary">
              <i>
                <FormattedMessage id="nav.about" defaultMessage="About Us" />
              </i>
            </p>
            <p className="mt-4 leading-8">
              He went to Mario Negri Institute of Pharmacological research,
              Bergamo, Italy for Fellow of International Society of Nephrology
              (Italy); Fellow ISPD (Dialysis) (London, UK); Fellow JSN (Mie
              University, Japan) and DM (Cardiology) from Kathmandu University,
              Nepal. He has been widely recognized for his medical work and
              research in snakebite, cardiovascular disease and Kidney disease.
              His areas of interest and research are snakebite He went to Mario
              Negri Institute of Pharmacological research, Bergamo, Italy for
              Fellow of International Society....
            </p>
            <Link to="/about" className="block w-36 btn-primary mt-8">
              <FormattedMessage id="read_more" defaultMessage="READ MORE" />{" "}
              ....
            </Link>
          </div>
        </div>
      </div>
      {/* about us container ends  */}

      {/* most venomous snakes starts  */}
      <div className="container mx-auto mt-5">
        <h1 className="flex flex-col md:flex-row items-center font-bold text-xl md:mt-10">
          <FormattedMessage
            id="most_venomous_snakes"
            defaultMessage="Most Venomous Snakes in Nepal"
          />{" "}
          <span className="font-black mx-2 hidden md:block">|</span>{" "}
          <Link
            to="/snakes_and_snakebites"
            className="btn-outline-primary mt-2 md:mt-0"
          >
            <FormattedMessage id="view_all" defaultMessage="View All" />
          </Link>
        </h1>

        {/* .venouous snakes card starts  */}
        <div className="grid md:grid-cols-4 gap-4 mt-8 px-4 ">
          <HomeSnakes />
        </div>

        {/* venomous snakes card ends  */}

        {/* antivenom center starts  */}
        <div className="px-4 md:px-8 pt-10 pb-20 anitvenom mt-10 md:mt-20 bg_lightGrey">
          <AVCenters />
        </div>
        {/* antivenom center ends  */}

        {/* Sponsers & Promoters starts  */}
        <div className="sponsers mt-10 md:mt-32 px-8 md:px-4 mb-10 md:mb-32">
          <h1 className="flex items-center font-bold text-xl md:mt-10 mb-10">
            <FormattedMessage
              id="sponsors"
              defaultMessage="Sponsers & Promoters"
            />
          </h1>
          <Sponsers />
        </div>
        {/* Sponsers & Promoters ends  */}
      </div>
      {/* most venomous snakes ends  */}

      {/* contact us starts  */}
      <div className="bg_lightGrey py-10 md:py-20">
        <h1 className="font-bold text-4xl  text-center mb-10">
          <FormattedMessage id="lets_connect" defaultMessage="Let's Connect" />{" "}
        </h1>
        <ContactForm />
      </div>
      {/* contact us ends  */}
    </>
  );
}

export default Home;
