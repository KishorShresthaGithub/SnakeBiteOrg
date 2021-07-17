import React from "react";
import AntivenomCard from "../components/Front/AntivenomCard.jsx";
import ContactForm from "../components/Front/ContactForm.jsx";
import HomeSlider from "../components/Front/HomeSlider.jsx";
import HomeVenomous from "../components/Front/HomeVenomous.jsx";
import Sponsers from "../components/Front/Sponsers.jsx";
import UpcomingEvent from "../components/Front/UpcomingEvent.jsx";

function Home() {
  const newsData = [
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
  ];
  const snakesData = [
    {
      name: "Viper snake",
      img: "https://cdn.britannica.com/w:1100/44/167644-131-D9F95DA9/Rattlesnakes-Rattlesnake-rattles-rattle-snake-rock-tails.jpg",
    },
    {
      name: "Matt Harley",
      img: "https://s3-ap-southeast-2.amazonaws.com/uploads.989fm.com.au/989fm/20200827135627/5ba126df3cccd120008b4568.jpg",
    },
    {
      name: "King Cobra",
      img: "http://3.bp.blogspot.com/--uJWWmKdVzo/Uvarnw8QN2I/AAAAAAAAC4E/JKol096jmXM/s1600/Philippine_Cobra.jpg",
    },
    {
      name: "Phython",
      img: "data:image/jpeg;base64,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",
    },
  ];
  const AntivenomData = [
    {
      name: "kathmandu",
      no: "18",
    },
    {
      name: "Rupandehi",
      no: "08",
    },
    {
      name: "Bhaktapur",
      no: "09",
    },
    {
      name: "Sindupalchowk",
      no: "11",
    },
    {
      name: "Tanahu",
      no: "04",
    },
    {
      name: "Kaski",
      no: "18",
    },
  ];

  return (
    <div>
      <HomeSlider />
      <div className="container mx-auto mt-5 px-4 md:container mx-auto mt-5">
        {/* news container starts  */}
        <div className="flex justify-between items-center my-10 md:my-24 space-x-4">
          <div className="">
            <UpcomingEvent />
          </div>

          <div className="">
            <iframe
              title="snakebite"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSnakebiteInNepal%20&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              className="w-96 h-96"
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
          <p className="p-4 md:py-10 font-medium">Who we are ? </p>
          <div className="bg_white p-8 md:p-12 rounded">
            <h4 className="font-medium text-lg font-bold">SNAKEBITE NEPAL</h4>
            <p className="mt-2 text-primary">
              <i>About us</i>
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
            <button className="btn-primary mt-8">READ MORE ....</button>
          </div>
        </div>
      </div>
      {/* about us container ends  */}

      {/* most venomous snakes starts  */}
      <div className="container mx-auto mt-5">
        <h1 className="flex flex-col md:flex-row items-center font-bold text-xl md:mt-10">
          Most Venomous Snakes in Nepal{" "}
          <span className="font-black mx-2 hidden md:block">|</span>{" "}
          <button className="btn-outline-primary mt-2 md:mt-0">View All</button>
        </h1>

        {/* .venouous snakes card starts  */}
        <div className="grid md:grid-cols-4 gap-4 mt-8 px-4">
          {snakesData.map((s) => (
            <HomeVenomous
              key={snakesData.indexOf(s)}
              name={s.name}
              img={s.img}
            />
          ))}
        </div>

        {/* venomous snakes card ends  */}

        {/* antivenom center starts  */}
        <div className="px-4 md:px-8 pt-10 pb-20 anitvenom mt-10 md:mt-20 bg_lightGrey">
          <h1 className="flex items-center flex-col md:flex-row font-bold text-xl md:mt-10">
            Antivenom Centers{" "}
            <span className="font-black mx-2 hidden md:block">|</span>{" "}
            <button className="btn-outline-primary mt-2 md:mt-0">
              Find One Near You
            </button>
          </h1>
          {/* <p className="mt-5">He went to Mario Negri Institute of Pharmacological research, Bergamo, Italy for Fellow of International Society of Nephrology (Italy); Fellow ISPD (Dialysis) (London, UK); Fellow JSN (Mie University, </p> */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-8">
            {AntivenomData.map((av) => (
              <AntivenomCard
                key={AntivenomData.indexOf(av)}
                name={av.name}
                no={av.no}
              />
            ))}
          </div>
        </div>
        {/* antivenom center ends  */}

        {/* Sponsers & Promoters starts  */}
        <div className="sponsers mt-10 md:mt-32 px-8 md:px-4 mb-10 md:mb-32">
          <h1 className="flex items-center font-bold text-xl md:mt-10 mb-10">
            Sponsers & Promoters
          </h1>
          <Sponsers />
        </div>
        {/* Sponsers & Promoters ends  */}
      </div>
      {/* most venomous snakes ends  */}

      {/* contact us starts  */}
      <div className="bg_lightGrey py-10 md:py-20">
        <h1 className="font-bold text-4xl  text-center mb-10">
          LET'S CONNECT{" "}
        </h1>
        <ContactForm />
      </div>
      {/* contact us ends  */}
    </div>
  );
}

export default Home;
