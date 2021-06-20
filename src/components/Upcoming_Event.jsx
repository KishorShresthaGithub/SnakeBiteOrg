import React from 'react'
import {MdEventNote} from 'react-icons/md'
import {MdEvent} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {BiTime} from 'react-icons/bi'

function Upcoming_Event() {
    return (
        <div className="card bg-blue-600 text-white p-4 md:p-8 h-4/5 overflow-y-scroll scroll">
            <div className="title flex justify-between items-center">
                <h1 className="font-bold text-xl ">UPCOMING EVENT</h1>
                <span className="font-bold text-xl "><MdEventNote /></span>
            </div>
            <hr className="mt-2" />
            <p className=" font-bold text-xl mt-5">CLUB AFFAIRS: Yearly Wrap-up and Suggestions for the Incoming President</p>
            {/* date starts  */}
            <p className="flex items-center mt-4 font-semibold">
                <span className="mr-2">
                    <MdEvent />
                </span>
                {new Date().toDateString()}
            </p>
            {/* date ends  */}
            {/* location starts  */}
            <p className="flex items-center mt-2 font-semibold">
                <span className="mr-2">
                    <HiLocationMarker/>
                </span>
                Maitidevi Kathmandu Nepal
            </p>
            {/* location ends  */}
            {/* time starts  */}
            <p className="flex items-center mt-2 font-semibold">
                <span className="mr-2">
                    <BiTime/>
                </span>
                11:00 AM
            </p>
            {/* time ends  */}

            {/* event description starts  */}
            <p className="mt-4"><u><b>Event Description</b></u></p>
            <p className="flex items-center mt-2 font-semibold">
            COVID Relief help for the Bheri Zonal Hospital in Nepalgunj. Nepalgunj is recently a COVID hot spot in the west of Nepal on the Nepal/India boarder.
            Food coupons with subsidy support from the Rotary Club of Kathmandu Mid-Town were handed out to patients and caregivers. People use these subsidized coupons to
            </p>
            {/* event description ends  */}
        </div>
    )
}

export default Upcoming_Event
