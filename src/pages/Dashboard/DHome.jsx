import React from 'react'
import Dashboard from '../../template/Dashboard'
import {Link} from 'react-router-dom'
import {FaRegCalendarAlt} from 'react-icons/fa'

function DHome() {
    return (
        <Dashboard>
            <div className="bg-gray-100 py-10 md:h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="mt-8 text-3xl">
                        Welcome to Snakebite Nepal
                    </h1>
                    <p className="font-bold text-md mt-2 flex items-center"><FaRegCalendarAlt className="mr-2" /> {new Date().toDateString()}</p>
                    <div className="grid md:grid-cols-5 gap-4 mt-10">
                        
                            <div className="col-span-3">
                                <div className="card bg-white p-4">
                                    <Link to="">
                                        <h1 className="font-bold text-lg">
                                            UPCOMING EVENT
                                        </h1>
                                        
                                        <p className="font-semibold text-sm">
                                            CLUB AFFAIRS: Yearly Wrap-up and Suggestions for the Incoming President
                                        </p>
                                    </Link>
                                </div>

                                <div className="card bg-white p-4">
                                    <Link to="">
                                        <h1 className="font-bold text-lg">
                                            RECENT STORIES
                                        </h1>
                                        
                                        <p className="font-semibold text-sm">
                                            International Conference in Kathmandu 2019                                </p>
                                    </Link>
                                </div>

                                <div className="card bg-white p-4">
                                    <Link to="">
                                        <h1 className="font-bold text-lg">
                                            Total Antivenom Centers
                                        </h1>
                                        
                                        <p className="font-semibold text-3xl">
                                            120
                                        </p>
                                    </Link>
                                </div>

                                <div className="card bg-white p-4">
                                    <Link to="">
                                        <h1 className="font-bold text-lg">
                                            Messages
                                        </h1>
                                        
                                        <p className="font-semibold text-3xl">
                                            2
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-span-2 text-center card p-4 bg-white w-80 h-screen md:w-full md:h-full">
                                <iframe src="https://www.hamropatro.com/widgets/calender-medium.php" 
                                frameborder="0" 
                                scrolling="yes" marginwidth="0" 
                                marginheight="0" 
                                allowtransparency="true"
                                className="w-full h-full"></iframe>
                            </div>
                        </div>
                    
                </div>
            </div>
        </Dashboard>
    )
}

export default DHome
