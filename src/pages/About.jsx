import React from "react";
import Page from "../template/Page";
import TitleBar from "../components/TitleBar";
import AboutSnakebite from "../components/About/About_snakebite";
import StoriesCard from "../components/About/Stories_card";
import PeoplesThoughts from "../components/About/Peoples_thoughts";
import Sponsers from "../components/Sponsers";
import ImageGallery from "../components/About/ImageGallery";

function About() {
  return (
    <Page>
      <TitleBar name="About Us" />
      <AboutSnakebite />

      {/* stories starts  */}
      <div className="bg_lightGrey">
        <div className="container mx-auto px-4 py-10 md:py-20">
          <h1 className="flex items-center flex-col md:flex-row font-bold text-xl md:mt-10">
            OUR STORIES{" "}
            <span className="font-black mx-2 hidden md:block">|</span>{" "}
            <button className="btn-outline-primary mt-2 md:mt-0">
              View All
            </button>
          </h1>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-4 gap-10 mt-10">
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
              <StoriesCard
                date="June 23 2021"
                title="International Conference in Kathmandu 2019"
              />
            </div>
          </div>
        </div>
      </div>
      {/* stories ends  */}

      {/* connecting dots starts */}
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <p className="text-primary font-semibold">OUR HISTORY</p>
            <div className="text-xl font-bold mt-1">
              Connecting Dots of SNAKEBITE NEPAL
            </div>
            <p className="mt-5 leading-7 md:pr-8">
              About 7,000 venomous snake biteTrusted Source cases are reported
              every year in the United States. A bite from a venomous snake is
              rarely deadly — about 6 fatalities are reported every year — but
              it should always be treated as a medical emergency. Even a bite
              from a harmless snake can be serious, leading to an allergic
              reaction or an infection. Venomous snake bites can produce an
              array of symptoms, including localized pain and swelling,
              convulsions, nausea, and even paralysis.About 7,000 venomous snake
              biteTrusted Source cases are reported every year in the United
              States. A bite from a venomous snake is rarely deadly — about 6
              fatalities are reported every year — but it should always be
              treated as a medical emergency. Even a bite from a harmless snake
              can be serious, leading to an allergic reaction or an infection.
              Venomous snake bites can produce an array of symptoms, including
              localized pain and swelling, convulsions, nausea, and even
              paralysis.
            </p>
          </div>

          <div className="mt-4 w-80 md:w-full">
            <PeoplesThoughts
              name="Mr. Sital"
              content="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <PeoplesThoughts
              name="Mr. Ravi"
              content="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <PeoplesThoughts
              name="Mr. Aatmaram"
              content="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
          </div>
        </div>
      </div>
      {/* connecting dots ends  */}

      {/* historical image gallery starts  */}
      <div className="bg_lightGrey py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* heading section starts  */}
          <div className="text-center">
            <h1 className="text-xl font-bold">HISTORICAL IMAGE GALLERY</h1>
            <button className="btn-outline-primary mt-4">View All</button>
          </div>
          {/* heading section endss  */}

          <div className="grid md:grid-cols-4 mt-10 md:mt-20 gap-6">
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
          </div>
        </div>
      </div>
      {/* historical image gallery ends  */}

      {/* Sponsers & Promoters starts  */}
      <div className="container mx-auto px-4 mt-10 md:mt-20 px-8 md:px-4 mb-10 md:mb-32">
        <h1 className="flex items-center font-bold text-xl md:mt-10 mb-10">
          Sponsers & Promoters
        </h1>
        <Sponsers />
      </div>
      {/* Sponsers & Promoters ends  */}
    </Page>
  );
}

export default About;
